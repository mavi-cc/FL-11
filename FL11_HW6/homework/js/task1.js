let a1 = parseFloat(prompt('Input numeric value a1 for A(a1, a2)', ''));
let a2 = parseFloat(prompt('Input numeric value a2 for A(a1, a2)', ''));
let b1 = parseFloat(prompt('Input numeric value b1 for B(b1, b2)', ''));
let b2 = parseFloat(prompt('Input numeric value b2 for B(b1, b2)', ''));
let c1 = parseFloat(prompt('Input numeric value c1 for C(c1, c2)', ''));
let c2 = parseFloat(prompt('Input numeric value c2 fot C(c1, c2)', ''));

const d = 2;

let centerX = (a1 + b1) / d
let centerY = (a2 + b2) / d

if (centerX === c1 && centerY === c2) {
  console.log(true);
} else {
  console.log(false)
}
