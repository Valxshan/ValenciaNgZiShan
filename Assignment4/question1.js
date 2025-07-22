const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

let highestPrice = amdPrices[0];

for (const price of amdPrices) {
  if (price > highestPrice) {
    highestPrice = price;
  }
}

console.log("AMD 52-week high is:", highestPrice);
