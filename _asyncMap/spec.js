describe('asyncMap', function() {
  var result;
  var cB;
  var cB1;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return the results in the order the functions were passed to the asyncMap', function() {
    cB1 = function(results) {
      result = results;
      expect(result).to.eql(['one', 'two']);
    }

    asyncMap([
      function(cb){
       setTimeout(function(){
         cb('one');
       }, 200);
      },
      function(cb){
       setTimeout(function(){
         cb('two');
       }, 100);
      }
    ],
      function(results){
        // the results array will equal ['one','two'] even though
        // the second function had a shorter timeout.
        console.log(results); // ['one', 'two']
        cB1(results);
    });

    //expect(result).to.eql(['one', 'two']);
  });

  it('should handle more than two async functions in the correct order', function() {
    console.log('start');
    cB = function(finish) {
      //console.log('done:', done);
      var wait2For2 = function wait2For2(callback) {
        setTimeout(function () {
          callback(2);
        }, 200);
      };

      var wait5For4 = function wait5For4(callback) {
        setTimeout(function () {
          callback(4);
        }, 500);
      };

      var wait1For3 = function wait1For3(callback) {
        setTimeout(function () {
          callback(3);
        }, 100);
      };

      var wait3For1 = function wait3For1(callback) {
        setTimeout(function () {
          callback(1);
        }, 300);
      };

      var wait1For5 = function wait1For5(callback) {
        setTimeout(function () {
          callback(5);
        }, 100);
      };

      asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], function (results) {
        //debugger;
        expect(results).to.eql([1, 2, 3, 4, 5]);
        console.log('done in asyncMap:', finish);
        console.log('results:', results);
        finish();
      });
    };

    var test = function() {
      console.log('done');
    };
    //debugger;
    cB(test);
    console.log('Hello World!');
  });

});
