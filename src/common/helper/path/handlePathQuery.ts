export const handlePathQuery = (
  url: URL,
  queryNew: string
): { path: string; query?: { p: string[]; sort: string[] } } => {
  let p = url.searchParams.getAll("p");

  let index = p.indexOf(queryNew);
  if (index === -1) {
    p.push(queryNew);
  } else {
    p = [...p].filter((value) => value !== queryNew);
  }
  url.searchParams.delete("p");

  return {
    path: url.pathname,
    query: { p: p, sort: url.searchParams.getAll("sort") },
  };
};
