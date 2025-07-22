const disneyData = [
  {
    open: "120.54",
    high: "122.56",
    low: "120.54",
    close: "121.09",
  },
  {
    open: "123.15",
    high: "127.76",
    low: "123.02",
    close: "124.92",
  },
];

// Write your code below
let sumClosing = 0;

for (let i = 0; i < disneyData.length; i++) {
  sumClosing += parseFloat(disneyData[i].close);
}

const averageClosingRaw = sumClosing / disneyData.length;

// Using .toFixed(2) directly for consistent 2 decimal places
const roundedAverage = averageClosingRaw.toFixed(2);

console.log(`Average closing price of Disney is ${roundedAverage}`);
