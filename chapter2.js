'use strict';

// Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.

function Grades () {
  this.gradeStore = [];
  this.add = add;
  this.average = average;
}

function add (grade) {
  this.gradeStore.push(grade);
}

function average () {
  return this.gradeStore.reduce(sum) / this.gradeStore.length;
}

function sum (accSum, grade) {
  return accSum + grade;
}

var grades = new Grades();
grades.add(75);
grades.add(76);
grades.add(77);
grades.add(78);
grades.add(79);
console.log(grades.average());

function Grades () {
  this.gradeStore = [];
  this.add = add;
  this.average = average;
}

function add (grade) {
  this.gradeStore.push(grade);
}

function average () {
  return this.gradeStore.reduce(sum) / this.gradeStore.length;
}

function sum (accSum, grade) {
  return accSum + grade;
}

var grades = new Grades();
grades.add(75);
grades.add(76);
grades.add(77);
grades.add(78);
grades.add(79);
console.log(grades.average());

function Grades () {
  this.gradeStore = [];
  this.add = add;
  this.average = average;
}

function add (grade) {
  this.gradeStre.push(grade);
}

function average () {
  return this.gradeStore.reduce(sum) / this.gradeStore.length;
}
function sum (accSum, grade) {
  return accSum + grade;
}
var grades = newGrades();
grades.add(75);
grades.add(76);
grades.add(77);
grades.add(78);
grades.add(79);
console.log(grades.average());

// Store a set of words in an array and display the contents both forward and backward.
function wordSet (str) {
  var strArray = [];
  for (var i = 0; i < str.length; i++) {
    strArray.push(str[i]);
  }
  for (var i = 0; i < str.length - 1; i--) {
    strArray.push(str[i]);
  }
  return strArray = [];
}
console.log(strArray);
