const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(yugi);

function yugi(total, value, index, array) {
  return total + value;
}
console.log(sum);

const numbers = [45, 4, 9, 16, 25];
let sum1 = numbers.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
console.log(sum1);