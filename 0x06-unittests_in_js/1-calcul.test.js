const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('calculateNumber', () => {
  it('should return the sum of rounded integers', () => {
    assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
  });

  it('should return the difference between rounded integers', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 20, 23), -3);
  });

  it('should return the quotient of integer division', () => {
    assert.strictEqual(calculateNumber("DIVIDE", 20, 5), 4);
    assert.strictEqual(calculateNumber("DIVIDE", 5, 20), 0.25);
    assert.strictEqual(calculateNumber("DIVIDE", 3, 0), "Error");
    assert.strictEqual(calculateNumber("DIVIDE", 0, 3), 0);
  });

  it('should round the first argument', () => {
    assert.strictEqual(calculateNumber("SUM", 1.2, 3), 4);
    assert.strictEqual(calculateNumber("SUM", 4.82, 3), 8);
    assert.strictEqual(calculateNumber("SUBTRACT", 2.45, 8), -6);
    assert.strictEqual(calculateNumber("SUBTRACT", 3.55, 8), -4);
    assert.strictEqual(calculateNumber("DIVIDE", 30.234, 5), 6);
    assert.strictEqual(calculateNumber("DIVIDE", 29.534, 5), 6);
  });

  it('should round the second argument and return sum', () => {
    assert.strictEqual(calculateNumber("SUM", 3, 83.23), 86);
    assert.strictEqual(calculateNumber("SUM", 43, 22.53), 66);
    assert.strictEqual(calculateNumber("SUBTRACT", 3, 1.23), 2);
    assert.strictEqual(calculateNumber("SUBTRACT", 3, 2.6), 0);
    assert.strictEqual(calculateNumber("DIVIDE", 5, 1.23), 5);
    assert.strictEqual(calculateNumber("DIVIDE", 10, 1.52), 5);
  });

  it('should handle negative numbers correctly and return sum', () => {
    assert.strictEqual(calculateNumber("SUM", -3.343, -7.3), -10);
    assert.strictEqual(calculateNumber("SUM", -2.56, 8.2), 5);
    assert.strictEqual(calculateNumber("SUBTRACT", 5, -32), 37);
    assert.strictEqual(calculateNumber("SUBTRACT", -5, -32), 27);
    assert.strictEqual(calculateNumber("DIVIDE", 5, -1), -5);
    assert.strictEqual(calculateNumber("DIVIDE", -5, 1), -5);
    assert.strictEqual(calculateNumber("DIVIDE", -5, -1), 5);
  });
})
