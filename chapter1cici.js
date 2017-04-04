'use strict';


// 1.1 - chapter 1
// function isUnique(str){
//   var chars = [];
//   if(str.length > 256)
//     return false;
//   for(var i = 0; i < str.length; i++){
//     console.log(str[i]);
//     if(chars[i] === undefined){
//       chars[i] = true;
//     }
//     else return false;
//   }
//   return true;
// }
//
// isUnique('abcdefghi');

var isUnique = function(str) {

  var cache = {};
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    console.log(letter)
    if (!cache[letter]) {
      cache[letter] = 0;
    }
    console.log(cache)
    cache[letter]++;

    if (cache[letter] > 1) {
      return false;
    }
  }
  return true;
};


isUnique('works');

// function LinkedList() {}
// LinkedList.prototype = {
//   length: 0,
//   first: null,
//   last: null,
// };
// chapter 2 how to implement a linked list
LinkedList.Circular = function() {};
LinkedList.Circular.prototype = new LinkedList();
LinkedList.Circular.prototype.append = function(node) {
  if (this.first === null) {
    node.prev = node;
    node.next = node;
    this.first = node;
    this.last = node;
  } else {
    node.prev = this.last;
    node.next = this.first;
    this.first.prev = node;
    this.last.next = node;
    this.last = node;
  }
  this.length++;
};
LinkedList.Circular.prototype.insertAfter = function(node, newNode) {
  newNode.prev = node;
  newNode.next = node.next;
  node.next.prev = newNode;
  node.next = newNode;
  if (newNode.prev == this.last) { this.last = newNode; }
  this.length++;
};
LinkedList.Circular.prototype.remove = function(node) {
  if (this.length > 1) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    if (node == this.first) { this.first = node.next; }
    if (node == this.last) { this.last = node.prev; }
  } else {
    this.first = null;
    this.last = null;
  }
  node.prev = null;
  node.next = null;
  this.length--;
};
LinkedList.Node = function(data) {
  this.prev = null; this.next = null;
  this.data = data;
};
// myList.append(new LinkedList.Node(someObject));
//look up creating a link list
// 2.1
function removeDupes(node){
  var hashSet = {};
  var runner = node.next;
  var prev = node;

  hashSet[prev.value] = true;
  while(runner !== null) {
    if(!hashSet[runner.value]){
      prev.next = prev.next.next;
    }
    hashSet[runner.value] = true;
    prev = runner;
    runner = runner.next;
  }
  return node;
}
removeDupes(4,5,6,4);


// 1.3 chapter 1

module.exports = Strings_1_3 = (function() {
  return {
    // Generate URL freindly strings of a specified length
    // Solution #3 from the book.
    // @param {String} s - Standard string with potential trailing whitespace
    // @param {Number} l - The "true" length of the string
    // @retuns {String} - A URL freindly string of the specified length
    URLify: function(s, l) {
      var newString = '';
      for (var i = 0; i < l; i++) {
        if (s.charAt(i) === ' '){
          newString += '%20';
        }else{
          newString += s.charAt(i);
        }
      }
      return newString;
    }
  };
}());

function urlIfy(str){
  newStr = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] == ' '){
      newStr+='%20';
      i++;
    }
    console.log(newStr)
    newStr+=str[i];
  }

  return newStr;
}

urlIfy('does a polar bear poop in antartica');


//1.6 string compression

function compressStr(str){
  var index = 0;
  var counter = 1;
  var starter = str.charAt(0);
  var newStr = '';

  while(index -1 < str.length){
    if(starter === str.charAt(index+1)){
      counter ++;
    } else{
      newStr += (starter + counter);
      counter = 1;
      starter = str.charAt(index+1);
    }
    index++;
  }
  if (newStr.length < str.length){
    return newStr;
  } else{
    return str;
  }
}


compressStr('abcd');


function palindromePermutation(str){
      var distinct = 0;
      var s_array = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0);
      str = str.toLowerCase();
      for(var i = 0; i < str.length; i++){
        if(str[i] == ' '){
          continue;
        }
        s_array[str[i].charCodeAt(0)]++;
        if(s_array[str[i].charCodeAt(0)] % 2){
          distinct++;
        }else{
          distinct--;
        }
      }
      return (distinct < 2);
    }

  palindromePermutation('budunk')
  
