/** calculateNumber - round two numbers and give the sum
 * {param} test - string used to determine type of operation
 * {param} a - number to be used for the operation
 * {param} b - number to be used for operation
 *
 * Return: rounded(a) + rounded(b)
 */
function calculateNumber(test, a, b) {
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

module.exports = calculateNumber;
