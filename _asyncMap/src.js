'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

//output none, runs the call back with the results array of the tasks
//input an array of functions and a call back
//constraints none stated
//edge cases the results array must be popluated in
  //the order the tasks were inputted to asyncMap
var asyncMap = function(tasks, callback) {
  var results = [];
  var taskCounter = 0;

  //iterate through all of the tasks
  tasks.forEach(function(task, i) {
    //run the task with a call back that takes a result
    task(function(result) {
      //save the result a the current index in a results array
      results[i] = result;
      //increment a counter for the amount of tasks run
      taskCounter++;
      //if the counter is greater than or equal to the number of tasks
      if (taskCounter >= tasks.length) {
        //run the asyncMap callback with the results array
        callback(results);
      }
    });
  });
};