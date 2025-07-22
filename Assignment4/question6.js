// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Sort prices ascendingly
const sortedPrices = amdPrices.slice().sort((a, b) => a - b);

// Get the first 3 lowest prices
const threeLowest = sortedPrices.slice(0, 3);

console.log(
  `The three lowest prices are ${threeLowest[0]}, ${threeLowest[1]}, and ${threeLowest[2]}`
);
