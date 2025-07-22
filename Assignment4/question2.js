const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let sum = 0;

for (const price of amdPrices) {
  sum += price;
}

const average = sum / amdPrices.length;

console.log("The 7-day SMA of AMD is:", average.toFixed(2));
