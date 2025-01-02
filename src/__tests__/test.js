import sortHeroes from "../js/sort_heroes.js";

describe("sortHeroes", () => {
  test("should sort heroes by health in descending order", () => {
    const correctSortHeroes = [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ];

    const incorrectSortHeroes = [
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ];

    const heroes = sortHeroes([
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ]);

    expect(heroes).toEqual(correctSortHeroes);

    expect(heroes).not.toEqual(incorrectSortHeroes);
  });
});
