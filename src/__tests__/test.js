import sortHeroes from '../js/app.js';

describe('sortHeroes', () => {
    test('should sort heroes by health in descending order', () => {
      const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
      ];
      
      const sortedHeroes = sortHeroes(heroes);
      
      expect(sortedHeroes).toEqual([
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
      ]);
    });
  
    test('should return an empty array when input is empty', () => {
      const heroes = [];
      const sortedHeroes = sortHeroes(heroes);
      expect(sortedHeroes).toEqual([]);
    });
  
    test('should handle a single hero', () => {
      const heroes = [{ name: 'воин', health: 50 }];
      const sortedHeroes = sortHeroes(heroes);
      expect(sortedHeroes).toEqual([{ name: 'воин', health: 50 }]);
    });
  
    test('should handle heroes with the same health', () => {
      const heroes = [
        { name: 'герой1', health: 50 },
        { name: 'герой2', health: 50 },
      ];
      const sortedHeroes = sortHeroes(heroes);
      expect(sortedHeroes).toEqual([
        { name: 'герой1', health: 50 },
        { name: 'герой2', health: 50 },
      ]);
    });
  });