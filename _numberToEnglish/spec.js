describe('numberToEnglish', function() {
  var result;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should pass convert a number less than twenty-one to english', function() {
    result = (7).toEnglish(); // > "seven"
    expect(result).to.equal('seven');
  });

  it('should convert 100 to one hundred', function () {
    result = (100).toEnglish();
    expect(result).to.equal('one hundred');
  });

  it('should convert 200 to two hundred', function () {
    result = (200).toEnglish();
    expect(result).to.equal('two hundred');
  });

  it('should convert 500 to five hundred', function () {
    result = (500).toEnglish();
    expect(result).to.equal('five hundred');
  });

  it('should convert 700 to seven hundred', function () {
    result = (700).toEnglish();
    expect(result).to.equal('seven hundred');
  });

  it('should convert 275 to two hundred seventy-five', function () {
    result = (275).toEnglish();
    expect(result).to.equal('two hundred seventy-five');
  });

  it('should convert 630 to six hundred thirty', function () {
    result = (630).toEnglish();
    expect(result).to.equal('six hundred thirty');
  });

  it('should convert 922 to nine hundred twenty-two', function () {
    result = (922).toEnglish();
    expect(result).to.equal('nine hundred twenty-two');
  });

  it('should convert a three digit number to english', function() {
    result = (575).toEnglish(); // > "five hundred seventy-five"
    expect(result).to.equal('five hundred seventy-five');
  });

  it('should convert 1000 to one thousand', function () {
    result = (1000).toEnglish();
    expect(result).to.equal('one thousand');
  });

  it('should convert 50000 to fifty thousand', function () {
    result = (50000).toEnglish();
    expect(result).to.equal('fifty thousand');
  });

  it('should convert 700000 to seven hundred thousand', function () {
    result = (700000).toEnglish();
    expect(result).to.equal('seven hundred thousand');
  });

  it('should convert 5625 to five thousand six hundred twenty-five', function () {
    result = (5625).toEnglish();
    expect(result).to.equal('five thousand six hundred twenty-five');
  });

  it('should convert 17490 to seventeen thousand four hundred ninety', function () {
    result = (17490).toEnglish();
    expect(result).to.equal('seventeen thousand four hundred ninety');
  });

  it('should convert 355003 to three hundred fifty-five thousand three', function () {
    result = (355003).toEnglish();
    expect(result).to.equal('three hundred fifty-five thousand three');
  });

  it('should convert 845913 to eight hundred forty-five thousand nine hundred thirteen', function () {
    result = (845913).toEnglish();
    expect(result).to.equal('eight hundred forty-five thousand nine hundred thirteen');
  });

  it('should convert one million to english', function() {
    result = (1000000).toEnglish(); // > "one million"
    expect(result).to.equal('one million');
  });

  it('should convert 2385024 to english', function() {
    result = (2385024).toEnglish(); // > "two million three hundred eighty-five thousand twenty-four"
    expect(result).to.equal('two million three hundred eighty-five thousand twenty-four');
  });

  it('should convert 973563700 to english', function() {
    result = (973563700).toEnglish(); // > "nine hundred seventy-three million five hundred sixty-three thousand seven hundred"
    expect(result).to.equal('nine hundred seventy-three million five hundred sixty-three thousand seven hundred');
  });

  it('should convert a lage number to english', function() {
    result = (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
    expect(result).to.equal('seventy-eight million one hundred ninety-three thousand five hundred twelve');
  });

  it('should convert a lage number with additional edge cases to english', function() {
    result = (78993505).toEnglish(); // > "seventy-eight million nine hundred ninety-three thousand five hundred five"
    expect(result).to.equal('seventy-eight million nine hundred ninety-three thousand five hundred five');
  });

  it('should convert one billion to english', function() {
    result = (1000000000).toEnglish(); // > "one billion"
    expect(result).to.equal('one billion');
  });

  it('should convert 2385024582 to english', function() {
    result = (2385024582).toEnglish(); // > "two billion three hundred eighty-five million twenty-four thousand five hundred eighty-two"
    expect(result).to.equal('two billion three hundred eighty-five million twenty-four thousand five hundred eighty-two');
  });

  it('should convert 973563700353 to english', function() {
    result = (973563700353).toEnglish(); // > "nine hundred seventy-three billion five hundred sixty-three million seven hundred thousand three hundred fifty-three"
    expect(result).to.equal('nine hundred seventy-three billion five hundred sixty-three million seven hundred thousand three hundred fifty-three');
  });

  it('should convert one trillion to english', function() {
    result = (1000000000000).toEnglish(); // > "one trillion"
    expect(result).to.equal('one trillion');
  });

  it('should convert one quadrillion to english', function() {
    result = (1000000000000000).toEnglish(); // > "one quadrillion"
    expect(result).to.equal('one quadrillion');
  });

  it('should convert one quintillion to english', function() {
    result = (1000000000000000000).toEnglish(); // > "one quintillion"
    expect(result).to.equal('one quintillion');
  });

  it('should convert 2^53, the largest number javascript can represent, to english', function() {
    result = Math.pow(2, 53).toEnglish(); // > "max int"
    expect(result).to.equal('nine quadrillion seven trillion one hundred ninety-nine billion two hundred fifty-four million seven hundred forty thousand nine hundred ninety-two');
  });

});
