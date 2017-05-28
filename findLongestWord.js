'use strict';

function findLongestWord (str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
findLongestWord('The quick brown fox jumped over the lazy dog');

function findLongestWord (str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
findLongestWord('The quick brown fox jumped over the lazy dog');

function findLongestWord (str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
findLongestWord('The quick brown fox jumped over the lazy dog');

function findLongestWord (str) {
  var strSplit = str.split(' ');
  var longestWord = 0;
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}
findLongestWord('The quick brown fox jumped over the lazy dog');

function lastWordLen (str) {
  var lengthOfLastWord = 0;
  var lengthOfCurrentWord = 0;
  var isValidWord = false;

  if (str.length === 0) return 'no string';

  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (isValidWord) { lengthOfLastWord = lengthOfCurrentWord; }
      lengthOfCurrentWord = 0;
      isValidWord = false;
    } else {
      if (!isValidWord && !isValidPunctuation(str[i])) {
        isValidWord = true;
        lengthOfCurrentWord++;
      }
    }
  }
  if (isValidWord) { return lengthOfCurrentWord; } else { return lengthOfLastWord; }
}

function isValidPunctuation (ch) {
  if (ch === ' ' || ch === ',' || ch === '?') { return true; }
  return false;
}

var word = 'Hello, two parts!* world! so&& I know!@#';

var lengthOfWord = lastWordLen(word);

console.log('Length: ', lengthOfWord);

'use strict';

function lastWord (string) {
  var match = /.*\s(\w+)\W*$/.exec(string);
  return match[1].length;
}

console.log(lastWord('the quick brown fox jumped over the lazy dog.'));
console.log(lastWord('fabulously furry fantastic furballs???\"'));
