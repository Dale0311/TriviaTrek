function possibleAnswers(currentQuestion) {
  const tempAns = [
    ...currentQuestion.incorrectAnswers,
    currentQuestion.correctAnswer,
  ];
  let answers = [];
  let usedIndexes = [];
  let i = 0;
  while (i < tempAns.length) {
    let randomNum = Math.floor(Math.random() * tempAns.length);
    if (!usedIndexes.includes(randomNum)) {
      answers.push(tempAns[randomNum]);
      usedIndexes.push(randomNum);
      i++;
    }
  }
  console.log(answers);
}

export default possibleAnswers;
