function getLast() {
  let lastOne;
  for (let i = 0; i < arguments.length; i++) {
    lastOne = arguments[i];
  }
  return lastOne;
}

console.log(getLast(5, 10, 15, 20));
