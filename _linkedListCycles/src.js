/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 *
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value) {
  return { value: value, next: null };
};

//output a boolean
//input a linked list
//constraints linear time, constant space, do not mutate input
//edge cases none
var hasCycle = function(linkedList) {
  //declare a one step pointer
  var oneStep = linkedList;
  //declare a two step pointer
  var twoStep = linkedList;
  //declare a result
  var isCycle;

  //loop until a pointer points to null or the pointers point to the same thing
  do {
    //if the one step pointer equals null
    if (oneStep.next === null) {
      //result equals false
      isCycle = false;
    } else {
      //advance the one step pointer
      oneStep = oneStep.next;
      //if the two step pointer equals null or its next pointer equals null
      if (twoStep.next === null || twoStep.next.next === null) {
        //result equals false
        isCycle = false;
      } else {
        //advance the two step pointer
        twoStep = twoStep.next.next;
        //if the two step pointer points to the same thing as the one step pointer
        if (oneStep === twoStep) {
          //result equals true
          isCycle = true;
        }
      }
    }
  } while (isCycle === undefined);
  //return result
  return isCycle;
};
