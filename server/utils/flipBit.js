export function flipBit(message, bitToFlipIndex) {
  const charIndex = Math.floor(bitToFlipIndex / 8);
  const bitIndex = 7 - (bitToFlipIndex % 8);

  const charCode = message.charCodeAt(charIndex);

  // Flip the bit at the specified index using bitwise XOR
  const flippedCharCode = charCode ^ (1 << bitIndex);

  const flippedMessage =
    message.substring(0, charIndex) +
    String.fromCharCode(flippedCharCode) +
    message.substring(charIndex + 1);

  return flippedMessage;
}
