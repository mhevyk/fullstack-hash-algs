import { countDifferingBits } from "./index.js";

export function bitDifferenceToChartData(hash1, hash2) {
  if (hash1.length !== hash2.length) {
    throw new Error("Хеші мають мати однакову довжину");
  }

  const bitDifferences = Array.from(hash1).map((char1, index) => {
    const char2 = hash2[index];
    const binary1 = parseInt(char1, 16).toString(2).padStart(4, "0");
    const binary2 = parseInt(char2, 16).toString(2).padStart(4, "0");
    return countDifferingBits(binary1, binary2);
  });

  return {
    labels: bitDifferences.map((_, i) => i + 1),
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
