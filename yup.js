function charFreq (sentence) {
  var freqOfCharacters = {};
  sentence = sentence.toLowerCase();
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i].match(/[a-z]/)) {
      if (freqOfCharacters[sentence[i]]) {
        freqOfCharacters[sentence[i]] = (freqOfCharacters[sentence[i]] + 1);
      } else {
        freqOfCharacters[sentence[i]] = 1;
      }
    }
  }
  return freqOfCharacters;
}
// 
