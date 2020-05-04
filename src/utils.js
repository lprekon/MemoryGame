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
  console.log('generating answers');
  const numAnswers = Math.floor(Math.random() * numSpaces);
  console.log('Should x answers', numAnswers);
  var candidateList = range(0, numSpaces - 1);
  var answers = [];
  for (var i = 0; i < numAnswers; i++) {
    const cIndex = Math.floor(Math.random() * candidateList.length);
    answers = answers.concat(candidateList[cIndex]);
    candidateList = candidateList.filter((val, index) => index !== cIndex);
  }
  return answers;
}
