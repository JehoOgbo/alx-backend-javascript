const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', () => {
  it('should return the sum of rounded integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round the first argument', () => {
    assert.strictEqual(calculateNumber(1.2, 3), 4);
    assert.strictEqual(calculateNumber(2.45, 8), 10);
    assert.strictEqual(calculateNumber(4.82, 3), 8);
  });

  it('should round the second argument', () => {
    assert.strictEqual(calculateNumber(3, 83.23), 86);
    assert.strictEqual(calculateNumber(43, 22.53), 66);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-3.343, -7.3), -10);
    assert.strictEqual(calculateNumber(-2.56, 8.2), 5);
  });
})
