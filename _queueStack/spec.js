describe('queueStack', function() {
  var result;
  var stack;
  var queue;

  beforeEach(function() {
    // Something do to before each test
    stack = new Stack();
    queue = new Queue();
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should push values onto the stack', function() {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    result = stack.size();
    expect(result).to.equal(3);
  });

  it('should pop values off of the stack', function() {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    result = stack.pop();
    expect(result).to.equal(3);
    result = stack.size();
    expect(result).to.equal(2);
  });

  it('should enqueue values onto the queue', function() {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    result = queue.size();
    expect(result).to.equal(3);
  });

  it('should dequeue values off of the queue', function() {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    result = queue.dequeue();
    expect(result).to.equal(1);
    result = queue.size();
    expect(result).to.equal(2);
  });

});
