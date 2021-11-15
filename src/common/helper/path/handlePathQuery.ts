import { NextRouter } from "next/router";

const handleAddPath = (router: NextRouter, queryNew: string) => {
  const {
    query: { p },
  } = router;

  if (p === undefined) return queryNew;

  let query;
  if (typeof p === "string") {
    query = [p];
  } else {
    query = [...p];
  }

  let index = p?.indexOf(queryNew);

  if (index === -1) {
    return [...query, queryNew];
  } else {
    return query.filter((value) => {
      if (value !== queryNew) {
        return value;
      }
    });
  }
};

export const handlePathQuery = (
  router: NextRouter,
  queryNew: string
): { path: string; query?: string } => {
  const { asPath } = router;
  let index = asPath.indexOf("?");

  let link = index === -1 ? asPath : asPath.substring(0, index);

  let p = handleAddPath(router, queryNew);

  if (typeof p === "string") return { path: link, query: `p=${p}` };
  if (p.length === 0) return { path: link };

  let query = p
    .map((value, index) => (index === 0 ? `p=${value}` : `&p=${value}`))
    .join("");

  return { path: link, query: query };
};
