export function countChangedBits(data?: number[]) {
  if (!data) {
    return 0;
  }

  let bitCount = 0;
  for (const item of data) {
    bitCount += item;
  }
  return bitCount;
}
