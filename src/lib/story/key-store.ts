import { readConfigItem, writeConfigItem } from "@/lib/config-store";

/**
 * Admin-dashboard-managed HikerAPI keys, stored in Redis config store
 * (Redis, namespaced per brand). Redis config store was chosen over a full
 * database because this is exactly its intended shape: a small, read-very-
 * often / written-rarely piece of app config (comparable to a feature
 * flag), read fresh on every HikerAPI call with no redeploy needed when
 * the admin dashboard adds or replaces a key.
 */
export interface StoredHikerApiKey {
  id: string;
  label: string;
  key: string;
  addedAt: string;
}

const STORE_KEY = "hikerApiKeys";

function isStoredKey(value: unknown): value is StoredHikerApiKey {
  return (
    !!value &&
    typeof value === "object" &&
    typeof (value as StoredHikerApiKey).id === "string" &&
    typeof (value as StoredHikerApiKey).key === "string" &&
    (value as StoredHikerApiKey).key.length > 0
  );
}

/**
 * Keys added through the admin dashboard. Never throws — a Redis config store
 * outage degrades to "no dashboard-managed keys" (callers fall back to the
 * legacy env-var keys below), not a broken site.
 */
export async function getStoredKeys(): Promise<StoredHikerApiKey[]> {
  try {
    const value = await readConfigItem<unknown>(STORE_KEY);
    if (!Array.isArray(value)) return [];
    return value.filter(isStoredKey);
  } catch (err) {
    console.error("[key-store] config read failed:", err);
    return [];
  }
}

/**
 * The original key source: `HIKERAPI_KEY` plus however many
 * `HIKERAPI_Fallback_N_KEY` env vars are set. Kept as a safety net — keys
 * already configured this way keep working even if nothing has been added
 * through the dashboard yet, or Redis config store is ever unreachable.
 */
export function getEnvKeys(): string[] {
  const keys: string[] = [];
  if (process.env.HIKERAPI_KEY) keys.push(process.env.HIKERAPI_KEY);
  for (let i = 1; ; i++) {
    const key = process.env[`HIKERAPI_Fallback_${i}_KEY`];
    if (!key) break;
    keys.push(key);
  }
  return keys;
}

/**
 * Every usable HikerAPI key, in the order `HikerApiStoryProvider.request()`
 * should try them: dashboard-managed keys first (what the owner actively
 * curates and can reorder by replacing/removing), then legacy env-var keys
 * as a safety net — deduplicated so a key present in both places is only
 * tried once.
 */
export async function getAllHikerApiKeys(): Promise<string[]> {
  const stored = (await getStoredKeys()).map((k) => k.key);
  const env = getEnvKeys();
  const seen = new Set<string>();
  const merged: string[] = [];
  for (const key of [...stored, ...env]) {
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(key);
  }
  return merged;
}

/**
 * Overwrites the dashboard-managed key list. Writes go to this site's own Redis database.
 */
export async function writeStoredKeys(keys: StoredHikerApiKey[]): Promise<void> {
  await writeConfigItem(STORE_KEY, keys);
}
