'use strict';


// 1.1 - chapter 1
function isUnique(str){
  var chars = [];
  if(str.length > 256)
    return false;
  for(var i = 0; i < str.length; i++){
    console.log(str[i]);
    if(chars[i] === undefined){
      chars[i] = true;
    }
    else return false;
  }
  return true;
}

isUnique('abcdefghi');


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
