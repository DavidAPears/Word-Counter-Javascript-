const PubSub = require('../../helpers/pub_sub.js');
const LetterCount = function (){

};

LetterCount.prototype.bindEvents = function (){
  PubSub.subscribe('InputView:word-inputted', (evt) => {
    const inputtedWord = evt.detail;
    const result = this.letterCount(inputtedWord);
    PubSub.publish('LetterCount: result', result);
  });
};


LetterCount.prototype.letterCount = function (word) {
  word = word.replace(/(^\s*)|(\s*$)/gi,"");
	word = word.replace(/[ ]{2,}/gi," ");
	word = word.replace(/\n /,"\n");
  return word.split(" ").length;
  console.log(letterCount);
};

// The above RegEx which wil reduce/remove all white space












module.exports = LetterCount;
