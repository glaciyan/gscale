import { IElement } from "~/lib/data/contracts/IElement";
import { Elements } from "~/lib/data/Elements";

export function useInjectElement() {
  return inject("element", Elements.neutral) as IElement;
}
