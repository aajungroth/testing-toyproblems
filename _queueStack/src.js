/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
//output a stack with push, pop, and size functions
//input none
//constraints no native methods
//edge cases
var Stack = function() {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

// add an item to the top of the stack
//output none
//input a new value to go to the front of the array
//constraints no native methods
//edge cases
Stack.prototype.push = function(value) {
  var node = {
    value: value,
    leftPointer: null,
    rightPointer: this.head
  }

  if (this.head != null) {
    this.head.leftPointer = node;
  }
  this.head = node;
  if (this.tail === null) {
    this.tail = node;
  }
  this.length++;
};

// remove an item from the top of the stack
//output the value at the top of the stack
//input none
//constraints no native methods
//edge cases empty stack returns null
Stack.prototype.pop = function() {
  if (this.head === null) {
    return null
  }
  var value = this.head.value;

  this.head = this.head.rightPointer;
  if (this.head === null) {
    this.tail === null
  }
  this.length--;
  return value;
};

// return the number of items in the stack
//output the length of the stack
//input none
//constraints no native methods
//edge cases
Stack.prototype.size = function() {
  return this.length;
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(value) {
    //push value into inbox
    inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    //if outbox and inbox are empty
    if (outbox.size() === 0 && inbox.size() === 0) {
      return null;
    }
    //if outbox is empty
    if (outbox.size() === 0) {
      //while inbox is not empty
      while (inbox.size() > 0) {
        //pop value from inbox and push to outbox
        outbox.push(inbox.pop());
      }
    }
    //return popped value from outbox
    return outbox.pop();
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
    //return the length of inbox and outbox added together
    return inbox.size() + outbox.size();
  };
};
