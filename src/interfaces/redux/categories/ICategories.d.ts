export interface ICategory {
  _id: string;
  name: string;
  parent: string;
  level: 1 | 2 | 3;
  path: string;
  slug: string;
  children?: Array<ICategory>;
}
