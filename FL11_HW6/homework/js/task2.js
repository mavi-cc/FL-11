let a = parseFloat(prompt('Input a side of a triangle', ''));
let b = parseFloat(prompt('Input b side of a triangle', ''));
let c = parseFloat(prompt('Input c side of a triangle', ''));

if (a + b > c && a + c > b && b + c > a) {
  if (a === b && a === c) {
    console.log('Equivalent triangle');
  } else if (a === b && a !== c || a === c && a !== b || b === c && b !== a) {
    console.log('Isosceles triangle');
  } else {
    console.log('Normal triangle');
  }
} else {
  console.log('Triangle doesn’t exist');
}
