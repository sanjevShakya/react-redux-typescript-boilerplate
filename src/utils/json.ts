export function deepCopyJSON(json: {}) {
  return JSON.parse(JSON.stringify(json));
}
