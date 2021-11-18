interface IObject {
  [index: string]: any;
}

const isNullObject = <T extends IObject>(obj: T) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
export default isNullObject;
