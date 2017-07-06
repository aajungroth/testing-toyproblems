/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

//output an object with insert, retrieve, and remove function
//input none
//constraints none stated
//edge cases, handle collisions, do not have to resize
var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  //output none
  //input a string key, and a value
  //constraints constant time
  //edge cases an empty string should be valid input
    //collisions should result in an array bucket being made
  result.insert = function(key, value) {
    //get the index based on the key input and storageLimit
    var index = getIndexBelowMaxForKey(key, storageLimit);
    //put the string key and value into an array
    var pair = [key, value];

    //if no array exists at that index
    if (storage[index] === undefined) {
      //create one
      storage[index] = [];
    }

    //iterate through the bucket
    for (var i = 0; i < storage[index].length; i++) {
      //if the key is in the bucket
      if (storage[index][i][0] === key) {
        //update the value
        storage[index][i][1] = value;
        return;
      }
    }
    //add that array into an array in the storage at the
    //index specified by the key
    storage[index].push(pair);
  };

  //output the value at that key
  //input the string key
  //constraints constant
  //edge cases strings that are not recognized
    //keys should return null
  result.retrieve = function(key) {
    //get an index based on the key and storageLimit
    var index = getIndexBelowMaxForKey(key, storageLimit);

    //if the index results in undefined
    if (storage[index] === undefined) {
      //return null
      return null;
    }
    //else
    else {
      //iterate through the bucket at that index
      for (var i = 0; i < storage[index].length; i++) {
        //if the first pair matches the key
        if (storage[index][i][0] === key) {
          //return the second pair
          return storage[index][i][1];
        }
      }
    }
    //return null
    return null;
  };

  //output the value
  //input the string key
  //constraints linear time
  //edge cases strings not in the hash table should
    //return null
    //strings in buckets will have to be removed from
      //the bucket
    //empty buckets should be removed
  result.remove = function(key) {
    //get the index based on the key and storageLimit
    var index = getIndexBelowMaxForKey(key, storageLimit);
    //if that index is undefined
    if (storage[index] === undefined) {
      //return null
      return null;
    }
    //else
    else {
      //iterate through the bucket
      for (var i = 0; i < storage[index].length; i++) {
        //if the first pair matches the key
        if (storage[index][i][0] === key) {
          //remove the pair from the bucket
          var value = storage[index].splice(i, 1);
          //if the bucket is empty
          if (storage[index].length === 0) {
            //remove the bucket
            storage.splice(index, 1);
          }
          //return the second pair
          return value[0][1];
        }
      }
    }
    //return null
    return null;
  };

  //function for testing
  result.getLength = function() {
    return storage.length;
  };

  return result;
};
