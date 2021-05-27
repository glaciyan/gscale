export function toId(name: string) {
    return name.replace(/'/g, "").replace(/[ -]/g, "_").toLowerCase();
}
