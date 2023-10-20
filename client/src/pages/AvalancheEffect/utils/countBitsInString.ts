export function countBitsInString(text: string) {
  const byteLength = new TextEncoder().encode(text).length;
  const bitLength = byteLength * 8;
  return bitLength;
}
