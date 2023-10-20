export function countDifferingBits(binary1, binary2) {
  if (binary1.length !== binary2.length) {
    throw new Error("Бінарні рядки мають мати однакову довжину");
  }

  let differingBits = 0;
  for (let i = 0; i < binary1.length; i++) {
    if (binary1[i] !== binary2[i]) {
      differingBits++;
    }
  }

  return differingBits;
}
