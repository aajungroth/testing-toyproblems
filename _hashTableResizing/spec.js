describe('hashTableResizing', function() {
  var result;
  var expected;
  var hashTable;

  beforeEach(function() {
    // Something do to before each test
    hashTable = makeHashTable();
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should retrieve everything that is inserted, even after a resize', function() {
    hashTable.insert('one', 1);
    result = hashTable.retrieve('one');
    expected = 1;
    expect(result).to.equal(expected);

    hashTable.insert('two', 2);
    result = hashTable.retrieve('two');
    expected = 2;
    expect(result).to.equal(expected);

    hashTable.insert('three', 3);
    result = hashTable.retrieve('three');
    expected = 3;
    expect(result).to.equal(expected);

    hashTable.insert('four', 4);
    result = hashTable.retrieve('four');
    expected = 4;
    expect(result).to.equal(expected);
  });

  it('should retrieve everything that has not been removed, even after a resize', function() {
    hashTable.insert('one', 1);
    hashTable.insert('two', 2);
    result = hashTable.remove('one');
    expected = 1;
    expect(result).to.equal(expected);
    result = hashTable.retrieve('two');
    expected = 2;
    expect(result).to.equal(expected);
  });

  it('should remove values', function() {
    hashTable.insert('Spielberg\'s best movie', 'Jaws');
    hashTable.remove('Spielberg\'s best movie');
    var value = hashTable.retrieve('Spielberg\'s best movie');
    expect(value).to.equal(null);
  });

  it('should update values', function() {
    hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
    hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
    var value = hashTable.retrieve('Tarantino\'s best movie');
    expect(value).to.equal('Pulp Fiction');
  });

});
