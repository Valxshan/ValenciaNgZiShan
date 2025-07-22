const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
const sum = amdPrices.reduce((acc, curr) => acc + curr, 0);
const average = sum / amdPrices.length;

let countAboveAverage = 0;

for (const price of amdPrices) {
  if (price > average) {
    countAboveAverage++;
  }
}

console.log(
  `Number of days AMD was above the 7-day SMA is: ${countAboveAverage}`
);
