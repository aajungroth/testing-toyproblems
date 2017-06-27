describe('suffleDeck', function() {
  var result;
  var original;
  var deck;

  beforeEach(function() {
    // Something do to before each test
    original = [];
    deck = orderedDeck();
    for (i = 0; i < deck.length; i++) {
      original.push(deck[i]);
    }
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should randomly shuffle the deck', function() {
    result = shuffleDeck(deck);
    expect(result).to.not.equal(undefined);
    expect(result).to.not.eql(original);
    console.log('result', result);
    console.log('original', original);
  });

});
