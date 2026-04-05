/**
 * Prepends Astro's BASE_URL to an internal path so links work correctly
 * both in local dev (base = '/') and on GitHub Pages (base = '/astro-base-lexmed/').
 *
 * Usage:  href={url('/servicios')}
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  return `${base}${path}`;
}
