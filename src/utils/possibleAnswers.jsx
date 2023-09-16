function possibleAnswers(currentQuestion) {
  const tempAns = [
    ...currentQuestion.incorrectAnswers,
    currentQuestion.correctAnswer,
  ];
  const letters = [ 'A', 'B', 'C', 'D'];
  let answers = [];
  let usedIndexes = [];
  let i = 0;
  while (i < tempAns.length) {
    let randomNum = Math.floor(Math.random() * tempAns.length);
    if (!usedIndexes.includes(randomNum)) {
      answers.push({letter:letters[i], choice: tempAns[randomNum]});
      usedIndexes.push(randomNum);
      i++;
    }
  }
  return answers;
}

export default possibleAnswers;
