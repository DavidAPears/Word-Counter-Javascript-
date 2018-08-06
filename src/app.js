const InputView = require('./views/input_view.js');
const LetterCount = require('./models/letter_count.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const inputView = new InputView();
  inputView.bindEvents();

  const letterCount= new LetterCount();
  letterCount.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();



});
