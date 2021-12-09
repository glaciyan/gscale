import { IElement } from "~/lib/data/contracts/IElement";

export function useInjectElement() {
  return inject("element") as IElement;
}
