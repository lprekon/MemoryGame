export const range = (min, max) =>
  Array.from({ length: max - min + 1 }, (_, i) => min + i);

export const colors = {
  hidden: 'lightgray',
  green: 'lightgreen',
  red: 'lightcoral',
  //candidate: 'deepskyblue',
};

export function arraysAreEqual(array1, array2) {
  return (
    array1.length == array2.length &&
    array1.every((value, index) => value == array2[index])
  );
}
