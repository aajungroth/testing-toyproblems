describe('rotateMatrix', function() {
  var result;
  var matrix;
  var rotatedMatrix;

  beforeEach(function() {
    // Something do to before each test
  });

  it('should pass a basic test', function() {
    expect(1).to.equal(1);
  });

  it('should rotate a matrix 90 degrees clockwise', function() {
    matrix = [];
    rotatedMatrix = [];
    result = rotateMatrix(matrix);
    expect(result).to.eql(rotatedMatrix);
  });

  it('should rotate a matrix 90 degrees clockwise', function() {
    matrix = [
      [1,2,3,4],
      [5,6,7,8],
      [9,'A','B','C'],
      ['D','E','F','G']
    ];

    rotatedMatrix = [
      ['D',9,5,1],
      ['E','A',6,2],
      ['F','B',7,3],
      ['G','C',8,4]
    ];

    result = rotateMatrix(matrix);
    console.log('rotated clockwise:', result);
    expect(result).to.eql(rotatedMatrix);
  });

  it('should rotate a matrix 90 degrees counter-clockwise', function() {
    matrix = [
      [1,2,3,4],
      [5,6,7,8],
      [9,'A','B','C'],
      ['D','E','F','G']
    ];

    rotatedMatrix = [
      ['D',9,5,1],
      ['E','A',6,2],
      ['F','B',7,3],
      ['G','C',8,4]
    ];

    result = rotateMatrix(rotatedMatrix, -1);
    console.log('rotated counter-clockwise:', result);
    expect(result).to.eql(matrix);
  });

});
