import { ComputedRef } from "vue";
import { IElement } from "~/lib/data/contracts/IElement";

export function useElementContext() {
  return inject("element", undefined) as unknown as ComputedRef<IElement>;
}
