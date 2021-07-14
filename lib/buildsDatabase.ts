let buildsDB: any;

export async function getBuildsDB() {
    if (buildsDB) return buildsDB;

    const dexie = (await import("dexie")).default;

    buildsDB = new dexie("buildsDB");

    // completed is going to cause some problems with async later on
    buildsDB.version(1).stores({
        builds: "++id, &order, completed, type, characterId, level, normal, elemental, burst",
    });

    return buildsDB;
}
