function runLength(string) {
  var output = [];
  var counter = 1;
  if (string === '' || string === null) {
    return string;
  }
  for (var i = 0; i < string.length; i++){
    if(string[i] === string[i+1]){
      counter++;
      output.push(counter + string[i]);
    }
    if(string[i] !== string[i+1])
      counter = 1;
  }
  return output.join('');
}

runLength('bbccddffbbgg');
