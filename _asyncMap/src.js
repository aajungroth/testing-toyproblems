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
  //array of tasks
  var tasks = Array.prototype.slice.call(arguments[0]);
  console.log(tasks);
  //task counter
  var taskCounter = 0;
  //array of results
  var results = [];
  //cb for tasks
  var taskCb = function (result) {
    //push task result to array of results
    results.push(result);
    //increment count
    taskCounter++;
      //if next task exists
      if (tasks[taskCounter]) {
        //invokes the next task with this cb
        tasks[taskCounter](taskCb);
      } else {
        //call back for async map with arry of results
        callback(results);
      }
  }

  //if first taks exists
  if (tasks[taskCounter]) {
    //function 1 runs with call back
      //after some time
        //excutes call back
    tasks[taskCounter](taskCb);
  }
};
