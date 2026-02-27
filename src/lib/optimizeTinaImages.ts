import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import type { GetImageResult } from 'astro';
import { resolveTinaImage } from '@/lib/resolveImage.ts';

type Path = readonly string[];

export type TinaImageOptimization = {
  /** Path to the Tina image field (string URL) */
  srcPath: Path;

  /** Optional alt field path */
  altPath?: Path;

  /** getImage options */
  width?: number;
  height?: number;
  format?: 'avif' | 'webp' | 'jpeg' | 'png';
};

const imageCache = new Map<string, GetImageResult>();

/* -------------------------------------------------- */
/* Path utilities                                     */
/* -------------------------------------------------- */

function getAtPath(obj: any, path: Path): any {
  return path.reduce((acc, key) => acc?.[key], obj);
}

function setAtPath(obj: any, path: Path, value: any): void {
  const last = path[path.length - 1];
  const parent = path.slice(0, -1).reduce((acc, key) => acc?.[key], obj);
  if (parent && last) {
    parent[last] = value;
  }
}

/* -------------------------------------------------- */
/* Main entry                                         */
/* -------------------------------------------------- */

export async function optimizeTinaImages(
  envelope: Record<string, any>,
  configs: TinaImageOptimization[]
): Promise<void> {
  for (const config of configs) {
    const srcValue = getAtPath(envelope, config.srcPath);

    if (typeof srcValue !== 'string' || !srcValue) {
      continue;
    }

    const alt =
      config.altPath &&
      typeof getAtPath(envelope, config.altPath) === 'string'
        ? getAtPath(envelope, config.altPath)
        : undefined;

    const raw = await resolveTinaImage(srcValue);
    if (!raw) continue;

    const cacheKey = JSON.stringify({
      src: raw.src,
      width: config.width,
      height: config.height,
      format: config.format,
      alt,
    });

    let optimized = imageCache.get(cacheKey);

    if (!optimized) {
      optimized = await getImage({
        src: raw,
        width: config.width,
        height: config.height,
        format: config.format,
        alt,
      });

      imageCache.set(cacheKey, optimized);
    }

    // Replace only the src string, not the field type
    setAtPath(envelope, config.srcPath, optimized.src);
  }
}
