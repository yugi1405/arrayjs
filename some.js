const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}
const numbers = [45, 4, 9, 16, 25];
let allOver = numbers.some(myFunction1);

function myFunction1(value) {
  return value > 18;
}
console.log(allOver18);
console.log(allOver);