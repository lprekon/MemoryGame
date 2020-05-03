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

export function generateAnswers(numSpaces) {
  let numGreens = 0;
  while (numGreens == 0) {
    numGreens = Math.floor(Math.random() * numSpaces);
  }
  let answers = [];
  let i = 0;
  while (i < numGreens) {
    const candidate = Math.floor(Math.random() * numSpaces);
    if (!answers.includes(candidate)) {
      const newAnswers = answers.concat(candidate);
      answers = newAnswers;
      i = i + 1;
    }
  }
  console.log('final answers', answers);
  return answers.sort();
}
