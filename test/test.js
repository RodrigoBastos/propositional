/**
 * Created by rodrigo on 26/06/15.
 */

var Q = require('q');
var PLN = require('./../server/pln/index');


//console.log(PLN.sentenceTokenizer('João é culpado e Pedro é inocente. Se José for culpado então Pedro é culpado.'));


Q(new PLN({text:'João é culpado e Pedro é inocente. Se José for culpado então Pedro é culpado.'}))
  .post('sentenceTokenizer')
  .post('wordsTokenizers')
  .done(onDone, onError)
;

function onDone(pln){
  console.log('Resultado:', pln);
}

function onError(err){
  console.error(err);
}

