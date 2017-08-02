describe('linkedListCycles', function() {
  var result;
  var nodeA;
  var nodeB;
  var nodeC;
  var nodeD;
  var nodeE;

  beforeEach(function() {
    // Something do to before each test
    nodeA = Node('A');
    nodeB = nodeA.next = Node('B');
    nodeC = nodeB.next = Node('C');
    nodeD = nodeC.next = Node('D');
    nodeE = nodeD.next = Node('E');
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should detect the end of linked lists without cycles', function() {
    result = hasCycle(nodeA);
    expect(result).to.equal(false);
  });

  it('should detect linked lists with cycles', function() {
    nodeE.next = nodeB;
    result = hasCycle(nodeA);
    expect(result).to.equal(true);
  });

});
