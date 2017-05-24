describe('rockPaperScissors', function() {
  var result;
  var permutationsThrow3 = [
    ['rock', 'rock', 'rock'],
    ['rock', 'rock', 'paper'],
    ['rock', 'rock', 'scissors'],
    ['rock', 'paper', 'rock'],
    ['rock', 'paper', 'paper'],
    ['rock', 'paper', 'scissors'],
    ['rock', 'scissors', 'rock'],
    ['rock', 'scissors', 'paper'],
    ['rock', 'scissors', 'scissors'],
    ['paper', 'rock', 'rock'],
    ['paper', 'rock', 'paper'],
    ['paper', 'rock', 'scissors'],
    ['paper', 'paper', 'rock'],
    ['paper', 'paper', 'paper'],
    ['paper', 'paper', 'scissors'],
    ['paper', 'scissors', 'rock'],
    ['paper', 'scissors', 'paper'],
    ['paper', 'scissors', 'scissors'],
    ['scissors', 'rock', 'rock'],
    ['scissors', 'rock', 'paper'],
    ['scissors', 'rock', 'scissors'],
    ['scissors', 'paper', 'rock'],
    ['scissors', 'paper', 'paper'],
    ['scissors', 'paper', 'scissors'],
    ['scissors', 'scissors', 'rock'],
    ['scissors', 'scissors', 'paper'],
    ['scissors', 'scissors', 'scissors']
  ];
  var rounds = 0;
  var size = 0;
  var expectedLengthOneRound = 3;
  var expectedLengthTwoRounds = 9;
  var expectedLengthThreeRounds = 27;
  var expectedLengthFourRounds = 81;
  var expectedLengthFiveRounds = 243;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should return an array of permutations for three moves for undefined rounds', function() {
    result = rockPaperScissors();
    result = JSON.stringify(result);
    permutationsThrow3 = JSON.stringify(permutationsThrow3);
    expect(result).to.equal(permutationsThrow3);
  });

  it('should return an array of permutations of size 27 for undefined rounds input', function() {
    rounds = undefined;
    result = rockPaperScissors(rounds);
    size = result.length;
    expect(size).to.equal(expectedLengthThreeRounds);
  });

  it('should return an array of permutations of size 27 for zero rounds input', function() {
    rounds = 0;
    result = rockPaperScissors(rounds);
    size = result.length;
    expect(size).to.equal(expectedLengthThreeRounds);
  });

  it('should return an array of permutations of size 3 for one round', function() {
    rounds = 1;
    result = rockPaperScissors(rounds);
    size = result.length;
    expect(size).to.equal(expectedLengthOneRound);
  });

  it('should return an array of permutations of size 9 for two rounds', function() {
    rounds = 2;
    result = rockPaperScissors(rounds);
    size = result.length;
    expect(size).to.equal(expectedLengthTwoRounds);
  });

  it('should return an array of permutations of size 27 for three rounds', function() {
    rounds = 3;
    result = rockPaperScissors(rounds);
    size = result.length;
    expect(size).to.equal(expectedLengthThreeRounds);
  });

  it('should return an array of permutations of size 81 for four rounds', function() {
    rounds = 4;
    result = rockPaperScissors(rounds);
    size = result.length;
    expect(size).to.equal(expectedLengthFourRounds);
  });

  it('should return an array of permutations of size 243 for five rounds', function() {
    rounds = 5;
    result = rockPaperScissors(rounds);
    size = result.length;
    expect(size).to.equal(expectedLengthFiveRounds);
  });

});
