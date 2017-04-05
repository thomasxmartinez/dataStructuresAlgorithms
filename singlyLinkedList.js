'use strict';

function node(data) {
  this.data = data;
  this.next = null;
}

function singlyLinkedList(){
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

singlyLinkedList.prototype.add = function(data) {
  var node = new node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  }
  this.numberOfValues++;
};

singlyLinkedList.prototype.remove = function(data) {
  var previous = this.head;
  var current = this.head;
  while(current) {
    if(current.data === data) {
      if(current.data === this.head) {
        this.head = this.head.next;
      }
      if(current === this.tail) {
        this.tail = previous;
      }
      previous.next = current.next;
      this.numberOfValues--;
    } else {
      previous = current;
    }
    current = current.next;
  }
};

singlyLinkedList.prototype.insertAfter = function(data, toNodeData) {
  var current = this.head;
  while(current){
    if(current.data === toNodeData){
      var node = new node(data);
      if(current === this.tail) {
        this.tail.next = node;
        this.tail = node;
      } else {
        node.next = current.next;
        current.next = node;
      }
      this.numberOfValues++;
    }
    current = current.next;
  }
};

singlyLinkedList.prototype.traverse = function(fn) {
  var current = this.head;
  while(current){
    if(fn) {
      fn(current);
    }
    current = current.next;
  }
};

singlyLinkedList.prototype.length = function() {
  return this.numberOfValues;
};

singlyLinkedList.prototype.print = function(){
  var string = '';
  var current = this.head;
  while(current){
    string += current.data + '';
    current = current.next;
  }
  console.log(string.trim());
};
