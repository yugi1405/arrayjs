 const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18);

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
console.log(result);
function checkAdult(age) {
  return age >= 18;
}
