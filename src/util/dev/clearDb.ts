import { db } from "../../offlineDatabase/db";

export default async () => {
  await db.builds.clear();
};
