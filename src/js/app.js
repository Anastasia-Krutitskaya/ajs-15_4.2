export default function sortByHealth(arr) {
  arr.sort((a, b) => (a.health > b.health ? -1 : 1));
}

export const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
