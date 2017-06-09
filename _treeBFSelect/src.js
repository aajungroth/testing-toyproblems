/**
  *
  * Implement a `BFSelect` method on this Tree class.
  *
  * BFSelect accepts a filter function, calls that function on each of the nodes
  * in Breadth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 3, 5, 7]
  *
  *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

//output an array of filted nodes in breadth first order
//input the filter function that will filter by some
  //some combination of value and depth
//contraints the tree most be traversed in breadth first order
//edge cases if the tree is an empty or no nodes pass the test
  //an empty array will be returned
Tree.prototype.BFSelect = function(filter) {
  // return an array of values for which the function filter(value, depth) returns true
  //array of filtered node values
  var filteredNodeValues = [];
  //current depth
  var depth = 0;

  //if the first node passes the filter
  if (filter(this.value, depth)) {
    //add it to the array of filtered nodes
    filteredNodeValues.push(this.value);
  }
  //increment the depth
  depth++;

  //inner function
  var filterChildren = function(node) {
    //iterate through the nodes children
    for (var i = 0; i < node.children.length; i++) {
      //if the current child node passes the filter
      if (filter(node.children[i].value, depth)) {
        //add it ot the arry of filtered nodes
        filteredNodeValues.push(node.children[i].value);
      }
    }
    //iterate on the children again
    for (i = 0; i < node.children.length; i++) {
      //if the child has children
      if (node.children[i].children.length > 0) {
        //increment the depth
        depth++;
        //recurse on the current child
        filterChildren(node.children[i]);
        //decrement the depth
        depth--;
      }
    }
  };
  //if the first node has children
  if (this.children.length > 0) {
    //call the inner function on the first node
    filterChildren(this);
  }
  //return array of filted values
  return filteredNodeValues;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
