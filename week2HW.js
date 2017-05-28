'use strict';

// Given a 4 digit telephone number, print all possible combinations of letters that each number could represent.
// How does it work? Look at your keypad on you phone. These are the mappings:
//     '2': 'abc',
//     '3': 'def',
//     '4': 'ghi',
//     '5': 'jkl',
//     '6': 'mno',
//     '7': 'pqrs',
//     '8': 'tuv',
//     '9': 'wxyz',
//
// Thus say if we have only two digit numbers, and the telephone number is 23, then the possible combinations are:
// ad
// ae
// af
// bd
// be
// bf
// cd
// ce
// cf

var digits = [];
digits.push({id: 1, name: ['*']});
digits.push({id: 2, name: ['a', 'b', 'c']});
digits.push({id: 3, name: ['d', 'e', 'f']});
digits.push({id: 4, name: ['g', 'h', 'i']});
digits.push({id: 5, name: ['j', 'k', 'l']});
digits.push({id: 6, name: ['m', 'n', 'o']});
digits.push({id: 7, name: ['p', 'q', 'r', 's']});
digits.push({id: 8, name: ['t', 'u', 'v']});
digits.push({id: 9, name: ['w', 'x', 'y', 'z']});
digits.push({id: 0, name: ['#']});

function permut () {
  if (string.length < 2) return string; // This is our break condition

  var permutations = []; // This array will hold our permutations

  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    // Cause we don't want any duplicates:
    if (string.indexOf(char) != i) // if char was used already
      { continue; }           // skip it this time

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); // Note: you can concat Strings via '+' in JS

    for (var subPermutation of permut(remainingString)) { permutations.push(char + subPermutation); }
  }
  return permutations;
}

var numArray = [{key: 1, value: '*'},
               {key: 2, value: ['a', 'b', 'c']},
               {key: 3, value: ['d', 'e', 'f']},
               {key: 4, value: ['g', 'h', 'i']},
               {key: 5, value: ['j', 'k', 'l']},
               {key: 6, value: ['m', 'n', 'o']},
               {key: 7, value: ['p', 'q', 'r', 's']},
               {key: 8, value: ['t', 'u', 'v']},
               {key: 9, value: ['w', 'x', 'y', 'z']},
               {key: 0, value: '#'}];
