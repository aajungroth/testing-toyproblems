describe('jsonpRequest', function() {
  var result;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should add the script tag to the dom', function() {
    jsonpRequest('http://toy-problems.hackreactor.com:3003/jsonparty', function (data) {
      console.log(data.response); // "Aw yeah, now we're JSONPartying"
      console.log(data.random); // 3558
    });
    expect(1).to.equal(1);
  });

});
