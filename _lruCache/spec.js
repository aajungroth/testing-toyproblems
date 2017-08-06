describe('lruCache', function() {
  var result;
  var expected;
  var chache;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should simulate an LRUCache', function() {
    cache = new LRUCache(3); // limit of 3 items
    cache.set("item1", 1);
    cache.set("item2", 2);
    cache.set("item3", 3);
    cache.set("item4", 4);
    result = cache.get("item3") //=> 3
    expected = 3;
    result = cache.get("item2") //=> 2
    expected = 2;
    // item1 was removed because it was the oldest item by insertion/usage
    result = cache.get("item1") //=> null
    expected = null;
    expect(result).to.equal(expected);

    // item4 is removed to make room, because it is the oldest by usage,
    // which takes priority.
    cache.set("item5", 5);
    result = cache.get("item4");
    expected = null;
    expect(result).to.equal(expected);

    // item3 is also removed, because it was retrieved before item2 was
    // last retrieved.
    cache.set("item6", 6);
    result = cache.get("item3");
    expected = null;
    expect(result).to.equal(expected);

    result = cache.get("item6");
    expected = 6;
    expect(result).to.equal(expected);

    result = cache.get("item5");
    expected = 5;
    expect(result).to.equal(expected);

    result = cache.get("item2");
    expected = 2;
    expect(result).to.equal(expected);
  });

  it('should stop increasing the size when the limit is reached', function() {
    var cache = new LRUCache(10);
    for (var i = 0; i < 15; i++) {
      cache.set(i, i);
    }
    result = cache.size();
    expected = 10;
    expect(result).to.equal(expected);
  });

});
