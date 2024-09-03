export function createSearchQuery(params: [string, string][]): string {
  const strParams = params.map((param) => param.join('=')).join('&');

  return `?${strParams}`;
}
