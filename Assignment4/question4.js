const msftData = [
  [190.15, 196.21, 191.07, 194.44],
  [193.61, 195.89, 190.12, 193.4],
];

// Write your code below
let sumClosing = 0;

for (const dayData of msftData) {
  sumClosing += dayData[3];
}

const averageClosing = sumClosing / msftData.length;

console.log(`Average closing price of MSFT is ${averageClosing.toFixed(2)}`);
