function addOne(x) {
  return x + 1;
}

function pipe() {
  let result = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    result = arguments[i](result);
  }
  return result;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));
