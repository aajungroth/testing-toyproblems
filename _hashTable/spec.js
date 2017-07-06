describe('makeHashTable', function() {
  var result;
  var string0;
  var string1;
  var string2;
  var value0;
  var value1;
  var value2;
  var hashTable;

  beforeEach(function() {
    // Something do to before each test
    string0 = 'alpha';
    string1 = 'hello';
    string2 = 'zebra';
    value0 = 1;
    value1 = 'world';
    value2 = ['black', 'white'];
    hashTable = makeHashTable();
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should have an insert, retrieve, and remove function', function() {

    expect(Object.keys(hashTable)).to.eql(['insert', 'retrieve', 'remove', 'getLength']);
  });

  it('should have a length of 709 after three specific inserts', function() {
    hashTable.insert(string0, value0);
    hashTable.insert(string1, value1);
    hashTable.insert(string2, value2);
    result = hashTable.getLength();
    expect(result).to.equal(709);
  });

  it('should be able to retrieve the values that were stored', function() {
    hashTable.insert(string0, value0);
    hashTable.insert(string1, value1);
    hashTable.insert(string2, value2);
    result = hashTable.retrieve(string0);
    expect(result).to.equal(value0);
    result = hashTable.retrieve(string1);
    expect(result).to.equal(value1);
    result = hashTable.retrieve(string2);
    expect(result).to.equal(value2);
  });

  it('should be able to delete values from the hashTable', function() {
    hashTable.insert(string1, value1);

    result = hashTable.remove(string1);
    expect(result).to.equal(value1);
    result = hashTable.remove(string1);
    expect(result).to.equal(null);
  });

  it('should update the value when the same key is used', function() {
    hashTable.insert(string0, value0);
    hashTable.insert(string0, value1);
    result = hashTable.retrieve(string0);
    expect(result).to.equal(value1);
  });

});
