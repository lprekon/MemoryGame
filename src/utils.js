export const range = (min, max) =>
  Array.from({ length: max - min + 1 }, (_, i) => min + i);

export const colors = {
  hidden: 'lightgray',
  green: 'lightgreen',
  red: 'lightcoral',
  //candidate: 'deepskyblue',
};
