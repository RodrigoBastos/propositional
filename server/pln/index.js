/**
 * Created by rodrigo on 25/06/15.
 */

var _           = require('lodash');
var S           = require('string');
var natural     = require('natural');
var Tokenizer   = require('sentence-tokenizer');
var config = require('./config');

var tokenizer = new Tokenizer('Chuck');
//var wordTokenizer = new natural.RegexpTokenizer({pattern: config.wordTokenizerPattern});
var wordTokenizer = new natural.WordPunctTokenizer();

function PLN (config){
  this.text = config.text;
}


module.exports = PLN;

PLN.prototype.sentenceTokenizer = function(){
  tokenizer.setEntry(this.text);
  this.sentences = tokenizer.getSentences();
  return this;
};

PLN.prototype.wordsTokenizers = function () {
  var that = this;
  that.words = that.sentences.map(function(sentence){
    //var words = wordTokenizer.tokenize(sentence);
    return sentence.split(' ');
    //return words;
  });

  return that;

};