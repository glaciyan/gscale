import { Build } from "../offlineDatabase/db";

export class GDataFileFormat {
  format = "gscale_builds_download";
  source = "gscale.cc";

  constructor(public version: number, public builds: Build[]) {}
}
