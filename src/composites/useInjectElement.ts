import { IElement } from "~/lib/data/contracts/IElement";

export function useInjectElement() {
  return inject("element", undefined) as IElement | undefined;
}
