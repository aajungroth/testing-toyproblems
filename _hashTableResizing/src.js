/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
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

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  //output none
  //input a key and value
  //constraints double storageLimit when size reaches
    //3/4 of storageLimit
  //edge cases collisions need to be stored into a bucket
    //duplicates do not need to be saved
  result.insert = function(key, value) {
    //declare an iterator
    var i;
    var j;
    var temp = [];

    //call getIndexBelowMaxForKey with the key and the
      //storageLimit and save the result in a variable
    var generatedIndex = getIndexBelowMaxForKey(key, storageLimit);
    //if the bucket does not exist
    if (Array.isArray(storage[generatedIndex]) === false) {
      //create a bucket
      storage[generatedIndex] = [];
      //push the key and value into the bucket at the generated index
      storage[generatedIndex].push([key, value]);
    } else {
      //iterate through the bucket
      for (i = 0; i < storage[generatedIndex].length; i++) {
        //if the key exists at the current index
        if (storage[generatedIndex][i][0] === key) {
          storage[generatedIndex][i][1] = value;
          return;
        }
      }
      //push the key value pair into the bucket
      storage[generatedIndex].push([key, value]);
    }
    //increment the size by 1
    size++;
    //if the size is greater than or equal to 3/4 the storageLimit
    if (size >= ((3 / 4) * storageLimit)) {
      //double the storageLimit
      storageLimit *= 2;
      //make a temp array for the new storage
      temp = [];
      //iterate through storage
      for (i = 0; i < storage.length; i++) {
        //if the current index is a bucket
        if (Array.isArray(storage[i])) {
          //iterate through the bucket
          for (j = 0; j < storage[i].length; j++) {
            //call getIndexBelowMaxForKey with the key and the
              //storageLimit and save the result in a variable
            generatedIndex = getIndexBelowMaxForKey(key, storageLimit);
            //if the generated index does not have a bucket
            if (Array.isArray(temp[generatedIndex]) === false) {
              //create a bucket
              temp[generatedIndex] = [];
            }
            //push the key and value into the bucket
              //at the generated index
            temp[generatedIndex].push([key, value]);
          }
        }
      }
      //overwrite storage with the temp storage
      storage = temp;
    }
  };

  //output the value
  //input a key
  //constraints none stated
  //edge cases return null if the value does not exist
  result.retrieve = function(key) {
    //call getIndexBelowMaxForKey with the key and the
      //storageLimit and save the result in a variable
    var generatedIndex = getIndexBelowMaxForKey(key, storageLimit);

    //if the location in storage is a bucket
    if (Array.isArray(storage[generatedIndex])) {
      //iterate through the bucket
      for (var i = 0; i < storage[generatedIndex].length; i++) {
        //if the current tuples key is a equal to the key
        if (storage[generatedIndex][i][0] === key) {
          //return the value
          return storage[generatedIndex][i][1];
        }
      }
      return null;
    } else {
      return null;
    }
  };

  //output the value
  //input a key
  //contraints half storageLimit when size reaches
    //1/4 of storageLimit
  //edge cases return null if the valued does not exist
  result.remove = function(key) {
    //declare a has key variable and initialize to false
    var hasKey = false;
    //call getIndexBelowMaxForKey with the key and the
      //storageLimit and save the result in a variable
    var generatedIndex = getIndexBelowMaxForKey(key, storageLimit);
    var i = 0;
    var j = 0;
    var value;
    var temp;

    //if the location in storage is a bucket
    if (Array.isArray(storage[generatedIndex])) {
      //iterate throught the bucket
      for (i = 0; i < storage[generatedIndex].length; i++) {
        //if the key exists
        if (storage[generatedIndex][i][0] === key) {
          //splice it from the bucket and save the value
          value = storage[generatedIndex].splice(i, 1);
          value = value[0][1];
          //if the bucekt is empty
          if (storage[generatedIndex].length === 0) {
            //splice the bucket
            storage.splice(generatedIndex, 1);
          }
          //set has key variable to true
          hasKey = true;
          break;
        }
      }
      //if the has key variable is false
      if (hasKey === false) {
        return null;
      }
    } else {
      return null;
    }
    //decrement the size by 1
    size--;
    //if the size is less than or equal to 1/4 the storageLimit
    if (size <= ((1 / 4) * storageLimit)) {
      //half the storage limit
      storageLimit = Math.ceil(storageLimit / 2);
      //make a temp array for the new storage
      temp = [];
      //iterate through storage
      for (i = 0; i < storage.length; i++) {
        //if the current index is a bucket
        if (Array.isArray(storage[i])) {
          //iterate through the bucket
          for (j = 0; j < storage[i].length; j++) {
            //call getIndexBelowMaxForKey with the key and the
              //storageLimit and save the result in a variable
            generatedIndex = getIndexBelowMaxForKey(key, storageLimit);
            //if the generated index does not have a bucket
            if (Array.isArray(temp[generatedIndex]) === false) {
              //create a bucket
              temp[generatedIndex] = [];
            }
            //push the key and value into the bucket at the generated index
            temp[generatedIndex].push([storage[i][j][0], storage[i][j][1]]);
          }
        }
      }
      //overwrite storage with the temp storage
      storage = temp;
    }
    return value;
  };

  return result;
};
