/** Serialises JSON-LD so a `<` in the data cannot close the script tag. */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
