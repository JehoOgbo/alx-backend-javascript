const Utils = {
  /**
   * calculateNumber - Rounds two numbers and perform an operation on them
   * @param {string} test
   * @param {number} a
   * @param {number} b
   * @returns {number}
   */
  calculateNumber(test, a, b) {
    if (test === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    else if (test === 'DIVIDE') {
      if (b === 0) {
        return "Error";
      }
      return Math.round(a) / Math.round(b);
    }
    else if (test === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
  }
}

module.exports = Utils;
