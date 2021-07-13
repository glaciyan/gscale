import { toLevel } from "../lib/getCharacterLevel";

test("level 1", () => {
    const conversion = toLevel(1);
    expect(conversion).toEqual({ level: 1, ascended: false });
});

test("level -14", () => {
    const conversion = toLevel(-14);
    expect(conversion).toEqual({ level: 1, ascended: false });
});

test("level 20", () => {
    const conversion = toLevel(20);
    expect(conversion).toEqual({ level: 20, ascended: false });
});

test("level 40", () => {
    const conversion = toLevel(40);
    expect(conversion).toEqual({ level: 40, ascended: false });
});

test("level 21", () => {
    const conversion = toLevel(21);
    expect(conversion).toEqual({ level: 20, ascended: true });
});

test("level 90", () => {
    const conversion = toLevel(90);
    expect(conversion).toEqual({ level: 90, ascended: false });
});

test("level 100", () => {
    const conversion = toLevel(100);
    expect(conversion).toEqual({ level: 90, ascended: false });
});

test("level 80", () => {
    const conversion = toLevel(80);
    expect(conversion).toEqual({ level: 80, ascended: false });
});

test("level 81", () => {
    const conversion = toLevel(81);
    expect(conversion).toEqual({ level: 80, ascended: true });
});

test("level 89", () => {
    const conversion = toLevel(89);
    expect(conversion).toEqual({ level: 80, ascended: true });
});
