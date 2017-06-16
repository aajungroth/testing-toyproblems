describe('asyncMap', function() {
  var result;
  var cB;

  beforeEach(function() {
    // Something do to before each test
    cB;
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return the results in the order the functions were passed to the asyncMap', function() {
    cB = function(results) {
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
        cB(results);
    });

    //expect(result).to.eql(['one', 'two']);
  });

});
