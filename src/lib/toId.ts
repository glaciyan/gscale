export function toId(name: string) {
    return name.trim().replace(/'/g, "").replace(/[ -]/g, "_").toLowerCase();
}
