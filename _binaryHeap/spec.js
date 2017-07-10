describe('BinaryHeap', function() {
  var result;
  var bHeap;

  beforeEach(function() {
    // Something do to before each test
    bHeap = new BinaryHeap();
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should be able to reorder four numbers as they are inserted', function() {
    bHeap.insert(1);
    bHeap.insert(3);
    bHeap.insert(4);
    bHeap.insert(2);
    result = bHeap._heap;
    expect(result).to.eql([1, 2, 4, 3]);
  });

  it('should be able to reorder six numbers as they are inserted', function() {
    bHeap.insert(6);
    bHeap.insert(5);
    bHeap.insert(4);
    bHeap.insert(3);
    bHeap.insert(2);
    bHeap.insert(1);
    result = bHeap._heap;
    expect(result).to.eql([1, 3, 2, 6, 4, 5]);
  });

  it('should be able to reorder four numbers when the root is removed', function() {
    bHeap.insert(1);
    bHeap.insert(3);
    bHeap.insert(4);
    bHeap.insert(2);
    result = bHeap.removeRoot();
    expect(result).to.equal(1);
    result = bHeap._heap;
    expect(result).to.eql([2, 3, 4]);
  });

  it('should be able to reorder six numbers when the root is removed twice are removed', function() {
    bHeap.insert(6);
    bHeap.insert(5);
    bHeap.insert(4);
    bHeap.insert(3);
    bHeap.insert(2);
    bHeap.insert(1);
    result = bHeap.removeRoot();
    expect(result).to.equal(1);
    result = bHeap.removeRoot();
    expect(result).to.equal(2);
    result = bHeap._heap;
    expect(result).to.eql([3, 4, 5, 6]);
  });

});
