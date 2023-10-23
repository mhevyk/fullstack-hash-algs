import { countDifferingBits } from "./index.js";

function hexToBinary(hex) {
  return parseInt(hex, 16).toString(2).padStart(4, "0");
}

function countSteps(count) {
  const steps = [];
  for (let i = 1; i < count + 1; i++) {
    steps.push(i);
  }

  return steps;
}

export function bitDifferenceToChartData(hash1, hash2) {
  if (hash1.length !== hash2.length) {
    throw new Error("Хеші мають мати однакову довжину");
  }

  const bitDifferences = [];
  for (let i = 0; i < hash1.length; i++) {
    const char1 = hash1[i];
    const char2 = hash2[i];

    const binary1 = hexToBinary(char1);
    const binary2 = hexToBinary(char2);

    const bitBifference = countDifferingBits(binary1, binary2);
    bitDifferences.push(bitBifference);
  }

  return {
    labels: countSteps(bitDifferences.length),
    datasets: [
      {
        data: bitDifferences,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
}
