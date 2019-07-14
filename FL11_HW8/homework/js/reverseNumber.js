function reverseNumber(num) {
  var negative = false;
  let result = 0;

  if (num < 0) {
    negative = true;
    num *= -1;
  }

  while (num % 10 === 0) {
    num = num / 10;
  }

  while (num) {
    result *= 10;
    result += num % 10;
    num = Math.floor(num / 10);
  }

  if (negative) {
    result *= -1;
  }

  return result
}

console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));
