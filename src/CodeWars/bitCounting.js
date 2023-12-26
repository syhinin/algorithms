function get64binary(int) {
  if (int >= 0) return int.toString(2).padStart(64, '0')
  else
    return (-int - 1)
      .toString(2)
      .replace(/[01]/g, d => +!+d)
      .padStart(64, '1')
}

export function countBits(n) {
  let total = 0

  const binaryNumber = get64binary(n)

  for (const num of binaryNumber) {
    total += Number(num)
  }

  return total
}
