import { Build } from "../offlineDatabase/db";

export default (a: Build, b: Build) => {
  if (a.order === b.order) {
    return (b.orderChanged ?? 0) - (a.orderChanged ?? 0);
  }

  return (a.order ?? Infinity) - (b.order ?? Infinity);
};
