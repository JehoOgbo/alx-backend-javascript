const expect = require('chai').expect;
const should = require('chai').should();
const calculateNumber = require('./2-calcul_chai')

describe('Calculation function with Chai expect', () => {
  it('should return the sum of rounded integers', () => {
    expect(calculateNumber("SUM", 1, 3)).to.equal(4);
  });

  it('should return the difference between rounded integers', () => {
    expect(calculateNumber("SUBTRACT", 20, 23)).to.equal(-3);
  });

  it('should return the quotient of integer division', () => {
    expect(calculateNumber("DIVIDE", 20, 5)).to.equal(4);
    expect(calculateNumber("DIVIDE", 5, 20)).to.equal(0.25);
    expect(calculateNumber("DIVIDE", 3, 0)).to.equal("Error");
    expect(calculateNumber("DIVIDE", 0, 3)).to.equal(0);
  });

  it('should round the first argument', () => {
    expect(calculateNumber("SUM", 1.2, 3)).to.equal(4);
    expect(calculateNumber("SUM", 4.82, 3)).to.equal(8);
    expect(calculateNumber("SUBTRACT", 2.45, 8)).to.equal(-6);
    expect(calculateNumber("SUBTRACT", 3.55, 8)).to.equal(-4);
    expect(calculateNumber("DIVIDE", 30.234, 5)).to.equal(6);
    expect(calculateNumber("DIVIDE", 29.534, 5)).to.equal(6);
  });

  it('should round the second argument and return result', () => {
    calculateNumber("SUM", 3, 83.23).should.equal(86);
    calculateNumber("SUM", 43, 22.53).should.equal(66);
    calculateNumber("SUBTRACT", 3, 1.23).should.equal(2);
    calculateNumber("SUBTRACT", 3, 2.6).should.equal(0);
    calculateNumber("DIVIDE", 5, 1.23).should.equal(5);
    calculateNumber("DIVIDE", 10, 1.52).should.equal(5);
  });

  it('should handle negative numbers correctly and return sum', () => {
    calculateNumber("SUM", -3.343, -7.3).should.equal(-10);
    calculateNumber("SUM", -2.56, 8.2).should.equal(5);
    calculateNumber("SUBTRACT", 5, -32).should.equal(37);
    calculateNumber("SUBTRACT", -5, -32).should.equal(27);
    calculateNumber("DIVIDE", 5, -1).should.equal(-5);
    calculateNumber("DIVIDE", -5, 1).should.equal(-5);
    calculateNumber("DIVIDE", -5, -1).should.equal(5);
  });
})
