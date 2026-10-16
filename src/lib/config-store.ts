import "server-only";
import { getRedisClient } from "@/lib/redis";

/**
 * Small persistent config store (admin-managed API keys, featured profiles).
 * Backed by this site's own Upstash Redis database, so it behaves the same on
 * Vercel, Netlify, Cloudflare, Docker or any other host. Keys are namespaced
 * per brand so clones sharing a Redis instance by mistake still stay apart.
 */
const PREFIX = "anonlens:config:";

export async function readConfigItem<T>(key: string): Promise<T | undefined> {
  const redis = getRedisClient();
  if (!redis) return undefined;
  const value = await redis.get<T>(PREFIX + key);
  return value ?? undefined;
}

export async function writeConfigItem(key: string, value: unknown): Promise<void> {
  const redis = getRedisClient();
  if (!redis) throw new Error("Redis is not configured (UPSTASH_REDIS_REST_URL/TOKEN) — config writes are disabled.");
  await redis.set(PREFIX + key, value);
}
