/**
 * A heap is a special kind of tree in which a parent node is ordered only in
 * respect to its immediate children. Unlike the binary search tree you may have
 * implemented, where the entire tree is ordered, in a heap the only order
 * guaranteed is between a node and its parent.
 *
 * In a binary heap each node should have only zero, one, or two children. Each node
 * must have 2 children before the next oldest node can have any children. Therefore
 * the 0th node will be the parent of the 1st and 2nd nodes, the 1st node will be the
 * parent of the 3rd and 4th nodes, and the 2nd node will be the parent of the 5th and
 * 6th nodes. In a specific kind of binary heap, the binary min heap, every node is
 * less than its immediate children:
 *
 *          0
 *     1         2
 *   3   4     5   6
 *  7
 *
 * There is only one place at any given time in a binary heap where a node can be
 * added or removed. In the example above, the next node will be inserted as the second
 * child of 3. If we were to remove a node instead, we would remove the 7. This mimics
 * the behavior of a stack and allows us to manage the heap in a very memory efficient way,
 * using a list or array. For example, the heap pictured above can be described as:
 *
 * [0, 1, 2, 3, 4, 5, 6, 7]
 *
 * where we always add to or remove from the end of the array.
 *
 * A well known fact, utilized with binary heaps stored in arrays, is that
 * we can calculate the index of a node's parent or children using math:
 *
 * parentIndex = Math.floor( (index - 1) / 2 )
 * childrenIndices = [index * 2 + 1, index * 2 + 2]
 *
 * When adding a new node to a binary min heap, it could be that we violate the property of the
 * heap whereby every node is of lower value than its children. Thus whenever we insert into
 * a binary min heap, we must compare the inserted node to its parent, and swap their positions
 * if it is less than its parent. After a swap it must compare itself to its new parent, continuing
 * until it is no longer less than its parent.
 *
 * Something similar happens when we want to remove the root node. Because we can only remove from the
 * end of the array we swap the position of the last node and the root node and then remove the now-last
 * node from the heap. The new root node now must be compared to its children and if it is not less than
 * both of them, be swapped with whichever of the two of them is the smallest. It is then compared with its
 * new children and this swapping continues until it is less than both its children.
 *
 * You can see a great visualization of a binary min heap in action here, play around with it until you can
 * easily guess how the heap will behave with both insertion and removal:
 * https://www.cs.usfca.edu/~galles/visualization/Heap.html
 */


// Below is a binary heap whose nodes are integers. Its storage is an array and
// its `getRoot`g method is already written. `BinaryHeap`'s `this._compare` method is hard-coded to return
// whether the fist element passed into it is less than the second. Use it when comparing nodes.
//
// Implement the `insert` and `removeRoot` methods, each operating in logarithmic time relative
// to the size of the heap, and each restoring the heap's property of parent to child sorting. Use
// the equations above to navigate parent / child relationships in the storage array, and write any
// helper functions needed to assist you.
//
// Extra credit: `BinaryHeap`'s `this._compare` is hard-coded to assist in making a min heap, modify `BinaryHeap`
// to accept an optional argument which is a function used as the sorting mechanism for the heap.
// That way you can use your `BinaryHeap` class to construct a max heap or min heap or whatever.
//
// Extra extra credit: Implement `heapSort`. `heapSort` takes an array, constructs it into a `BinaryHeap`
// and then iteratively returns the root of the `BinaryHeap` until its empty, thus returning a sorted array.


function BinaryHeap () {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) { return i < j };
}

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

//output none
//input two nodes
//constraints constant time
//edge cases
//swap child and parent
BinaryHeap.prototype.swapChildAndParent = function(parentIndex, newValue, newValueIndex) {
  //set a temp variable to the parent
  var temp = this._heap[parentIndex];

  //set the parent positon to the new value
  this._heap[parentIndex] = newValue;
  //set the new value position to temp
  this._heap[newValueIndex] = temp;
};

//output none
//input the new value, and the new value's index
//constraints logarithmic time
//edge cases
//recursive function
BinaryHeap.prototype.reorderHeap = function(newValue, index) {
  var parentIndex = Math.floor( (index - 1) / 2);
  if ((this._heap[parentIndex]) && (this._heap[parentIndex] > newValue)) {
    //swap parent and newValue
    this.swapChildAndParent(parentIndex, newValue, index);
    //recurse on the newValue and parent index
    this.reorderHeap(newValue, parentIndex);
  }
};

//output none
//input value
//constraints linear space, logarithmic time
//edge cases inserting into an empty heap should be an O(1) operation
BinaryHeap.prototype.insert = function (value) {
  //Push the value onto the heap
  this._heap.push(value);
  //if the heap's length is greater than 1
  if (this._heap.length > 1) {
    //call recursive function with new value and root
    this.reorderHeap(value, this._heap.length - 1);
  }
}

//get the last value in the heap
BinaryHeap.prototype.getEnd = function() {
  //return the value at length - 1
  return this._heap[this._heap.length - 1];
};

//swap the root and last value
BinaryHeap.prototype.swapRootAndEnd = function(end) {
  //set root position equal to last value
  this._heap[0] = end;
  //pop the last value
  this._heap.pop();
};

//swap the root and child
BinaryHeap.prototype.swapRootandChild = function(rootIndex, childIndex) {
  //set the temp equal to the root
  var temp = this._heap[rootIndex];

  //set the root position equal to the child
  this._heap[rootIndex] = this._heap[childIndex];
  //set the child positon equal to temp
  this._heap[childIndex] = temp;
};

//recursively swap new root and children
BinaryHeap.prototype.orderHeap = function(index) {
  var childrenIndices = [index * 2 + 1, index * 2 + 2];

  //if the root is greater than it's second child
  if (this._heap[index] > this._heap[childrenIndices[1]]) {
    //swap the root and child
    this.swapRootandChild(index, childrenIndices[1]);
    //recursively swap new root and children
    this.orderHeap(childrenIndices[1]);
  //else if the root is greater than it's first child
  } else if (this._heap[index] > this._heap[childrenIndices[0]]) {
    //swap the root and child
    this.swapRootandChild(index, childrenIndices[0]);
    //recursively swap new root and children
    this.orderHeap(childrenIndices[0]);
  }
}

//output the old root value
//input none
//constraints logarithmic time and linear space
//edge cases empty heaps should return null
BinaryHeap.prototype.removeRoot = function () {
  //if the length of the heap is less than 1
  if (this._heap.length < 1) {
    return undefined;
  }
  //if the length of the heap is 1
  if (this._heap.length === 1) {
    //pop the heap and return the value
    return this._heap.pop();
  }
  //get the last value in the heap and save it in a variable
  var end = this.getEnd();
  //get the root and save it in a variable
  var theRoot = this.getRoot();

  //swap the root and last value
  this.swapRootAndEnd(end);

  //call recursively swap new root and children
  this.orderHeap(0);
  return theRoot;
}
