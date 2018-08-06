const PubSub = require('../../helpers/pub_sub.js');


const InputView = function (){

};

InputView.prototype.bindEvents = function () {
 const input = document.querySelector('#text');
 input.addEventListener('input', (evt) => {
   const inputtedWord = evt.target.value;
   PubSub.publish('InputView:word-inputted', inputtedWord);
   console.log(inputtedWord);
 });
};

module.exports = InputView
