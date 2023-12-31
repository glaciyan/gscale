import { INamed } from "./INamed";

export class GElement implements INamed {
  constructor(name: string, normalizedName: string) {
    this.name = name;
    this.normalizedName = normalizedName;
  }

  name: string;
  normalizedName: string;
}
