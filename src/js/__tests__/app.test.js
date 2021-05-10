import sortByHealth, { characters } from '../app.js';

const charactersSorted = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sortByHealth', () => {
  sortByHealth(characters);
  expect(characters).toBe(charactersSorted);
});
