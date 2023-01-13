module.exports = function toReadable (number) {
  const numbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  ];
  const decades = [
  '',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
  ];
  const teens = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  ];

  if (number >= 1000) {
    const thousands = Math.floor(number / 1000) % 1000
    const less = number % 1000
    const plural = thousands === 1 ? '' : 's'
    if (less) {
      return `${toReadable(thousands)} thousand${plural} ${toReadable(less)}`
    } else {
      return `${toReadable(thousands)} thousand${plural}`
    }
  }
  const ones = number % 10
  const decade = Math.floor(number / 10) % 10
  const hundred = Math.floor(number / 100) % 100
  const plural = hundred === 1 ? '' : 's'

  let result = ''
  if (hundred > 0) {
    result += `${numbers[hundred]} hundred`

    if (decade === 0 && ones === 0) {
      return result
    } else {
      result += ' '
    }
  }

  if (decade === 1) {
    return result + teens[ones]
  }
  if (decade > 0) {
    result += decades[decade]
    if (ones === 0) {
      return result
    } else {
      result += ' '
    }
  }
  return result + numbers[ones]
}