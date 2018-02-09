import * as qs from "query-string";

export function parseQueryString(queryString: string) {
  return qs.parse(queryString);
}
