interface IObject {
  [index: string]: any;
}

const isNullObject = <T extends IObject>(obj: T) => {
  if (obj) return true;

  return false;
};
export default isNullObject;
