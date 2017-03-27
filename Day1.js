'use strict';

// var re = /[\W_]/g;   can contain punctuation to include characters.

function findLargestWord(str){
  var space = " ";
  for(var i = 0; i  < str.length; i ++){
    if (str[i] === space)
    return charAt[i]++charAt[space-1]
  }

}

}


function findLongestWord(str) {
  var longestWord = .sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");


'use strict';

function lastWord(string) {
  var match = /.*\s(\w+)\W*$/.exec(string);
  return match[1].length;
}

console.log(lastWord('the quick brown fox jumped over the lazy dog.'));
console.log(lastWord('fabulously furry fantastic furballs???\"'));


function lastWordLen(str) {
  var lengthOfLastWord = 0;
  var lengthOfCurrentWord = 0;
  var isValidWord = false;

  if (str.length === 0 ) return 'no string';

  for (var i = 0; i < str.length ; i++) {
    if (str[i] === ' ') {
      if (isValidWord)
        lengthOfLastWord = lengthOfCurrentWord;
      lengthOfCurrentWord = 0;
      isValidWord = false;
    } else {
      if (!isValidWord && !isValidPunctuation(str[i])) {
        isValidWord = true;
        lengthOfCurrentWord ++;
      }
    }
  }
  if (isValidWord)
    return lengthOfCurrentWord;
  else
    return lengthOfLastWord;
}
