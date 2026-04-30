export function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFKD')                // break accented chars into base + diacritic
    .replace(/[\u0300-\u036f]/g, '')  // remove diacritics
    .replace(/[^a-z0-9]+/g, '-')      // replace non-alphanumeric with hyphen
    .replace(/^-+|-+$/g, '');         // trim leading/trailing hyphens
}
