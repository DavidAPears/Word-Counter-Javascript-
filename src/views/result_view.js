const PubSub = require('../../helpers/pub_sub.js');

const ResultView = function (){

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('LetterCount: result', (evt) => {
    const result = evt.detail;
    this.updateView(result);
  });
};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
  if (result){
    resultElement.textContent = `There are ${result} words in your sentence`;
  }
};

module.exports = ResultView
