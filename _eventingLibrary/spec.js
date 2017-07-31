describe('mixEvents', function() {
  var results;
  var expected;
  var obj

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should trigger an event', function() {
    obj = mixEvents({ name: 'Alice', age: 30 });
    obj.on('ageChange', function(){ // On takes an event name and a callback function
      console.log('Age changed');
      this.age++;
    });
    obj.trigger('ageChange');
    result = obj.age;
    expected = 31;
    expect(result).to.equal(expected);
  });

  it('should trigger multiple events', function() {
    obj = mixEvents({ name: 'Alice', age: 30 });
    for (var i = 0; i < 3; i++) {
      obj.on('ageChange', function(){ // On takes an event name and a callback function
        console.log('Age changed');
        this.age++;
      });
    }
    obj.trigger('ageChange');
    result = obj.age;
    expected = 33;
    expect(result).to.equal(expected);
  });

  it('should not trigger an error for events that do not exist', function() {
    result = obj.trigger('not an event');
    expect(result).to.equal(null);
  });

});
