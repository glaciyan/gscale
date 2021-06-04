import dexie from "dexie";

const buildsDB = new dexie("buildsDB");

buildsDB.version(1).stores({
    builds: "++id, &order, completed, type, characterId, level, normal, elemental, burst",
});

export default buildsDB as any;
