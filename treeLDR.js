'use strict';

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function Tree(nodeval) {
  this.root = new Node(nodeval);
}

Tree.prototype.traverseLDR = function(fn) {
  console.log('\nLDR:');
  nodeLDR(this.root);

  function nodeLDR(node) {
    if (node.left) {
      nodeLDR(node.left);
    }

    fn(node.val);

    if (node.right) {
      nodeLDR(node.right);
    }

    return;
  }
}

Tree.prototype.traverseDLR = function(fn) {
  console.log('\nDLR:');
  nodeDLR(this.root);

  function nodeDLR(node) {
    fn(node.val);

    if (node.left) {
      nodeDLR(node.left);
    }

    if (node.right) {
      nodeDLR(node.right);
    }

    return;
  }
}

Tree.prototype.traverseLRD = function(fn) {
  console.log('\nLRD:');
  nodeLRD(this.root);

  function nodeLRD(node) {

    if (node.left) {
      nodeLRD(node.left);
    }

    if (node.right) {
      nodeLRD(node.right);
    }

    fn(node.val);

    return;
  }
}

const myTree = new Tree('A');

myTree.root.left = new Node('B');
myTree.root.right = new Node('C');
myTree.root.left.left = new Node('D');
myTree.root.left.right = new Node('E');
myTree.root.right.left = new Node('F');
myTree.root.right.right = new Node('G');
myTree.root.left.left.left = new Node('H');
myTree.root.left.left.right = new Node('I');
myTree.root.left.right.left = new Node('J');
myTree.root.left.right.right = new Node('K');
myTree.root.right.left.left = new Node('L');
myTree.root.right.left.right = new Node('M');
myTree.root.right.right.left = new Node('N');
myTree.root.right.right.right = new Node('O');

myTree.traverseLDR( function(val) {
  console.log(val);
});

myTree.traverseDLR( function(val) {
  console.log(val);
});

myTree.traverseLRD( function(val) {
  console.log(val);
});
