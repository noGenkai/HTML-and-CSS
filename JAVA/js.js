const SQ5 = 5 ** .5;
const PHI = (1 + SQ5) / 2;
function allEvenFibonacciUpTo(limit) {
  const highestIndexBelowLimit = Math.floor(Math.log(limit * SQ5) / Math.log(PHI));
  // I love expressive variable names, but the formula could get too long!
  const n = Math.floor(highestIndexBelowLimit / 3);
  return ((PHI ** (3 * n + 3) - 1) / (PHI ** 3 - 1)
    - ((1 - PHI) ** (3 * n + 3) - 1) / ((1 - PHI) ** 3 - 1)) / SQ5;
}

console.log(allEvenFibonacciUpTo(4e6));