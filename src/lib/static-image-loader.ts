/**
 * Image loader for the GitHub Pages static export (see next.config.ts).
 * Serves images unoptimized, prefixing local paths with the basePath since
 * next/image doesn't do that for string `src` values. Remote URLs pass
 * through untouched.
 */
export default function staticImageLoader({ src }: { src: string; width: number; quality?: number }): string {
  if (src.startsWith("/") && !src.startsWith("//")) {
    return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
  }
  return src;
}
