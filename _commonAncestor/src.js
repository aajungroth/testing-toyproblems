
/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandma = new Tree();
  * var mom = new Tree();
  * grandma.addChild(mom);
  * var me = new Tree();
  * mom.addChild(me);
  * grandma.getAncestorPath(me); // => [grandma, mom, me]
*/

var Tree = function() {
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my brother -> my mom
  *  2.) between me and my cousin -> my grandma
  *  3.) between my grandma and my grandma -> my grandma
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(nodeA, nodeB) {
  //declare temp node
  var temp;
  var depth = arguments[2] || 0;

  if (depth === 0) {
    if ((this === nodeA) && (this === nodeB)) {
      return this;
    }
  }
  //if the target nodes are both descendants of the current node
  if ((this.isDescendant(nodeA)) && (this.isDescendant(nodeB))) {
    //iterate through the children
    for (var i = 0; i < this.children.length; i++) {
      //call getClosestCommonAncestor on the current node and save the result
      temp = this.children[i].getClosestCommonAncestor(nodeA, nodeB, ++depth);
      //if the result is a node
      if (temp) {
        break;
      }
    }
    //if the saved result is a node
    if (temp) {
      //return the node
      return temp;
    } else {
      //return the current node
      return this;
    }
  }
  //return null
  return null;
};

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandma.getAncestorPath(me) -> [great grandma, grandma, mom, me]
  * 2.) mom.getAncestorPath(me) -> [mom, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandma.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(node) {
  //declare an array of nodes
  var path = [];

  //add the current node to the array
  path.push(this);

  //inner recursive function
  var findPath = function(currentNode) {
    //iterate through the nodes children
    for (var i = 0; i < currentNode.children.length; i++) {
      //add the current child node to the array
      path.push(currentNode.children[i]);
      //call the inner recursive function
      findPath(currentNode.children[i]);
      //if the last node in the array of nodes is the target node
      if (path[path.length - 1] === node) {
        break;
      } else {
        //remove the child
        path.pop();
      }
    }
  };

  //call inner recursive function
  findPath(this);
  if (path[path.length - 1] === node) {
    //return an array of nodes
    return path;
  }
  return null;
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
