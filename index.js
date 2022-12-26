const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);
console.log(first);
function myFunction(value, index) {
  return value > 18;
}

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
console.log(f);


const num = [175, 50, 25];

var d= num.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log(d);

//array.includes(search-item)
//Array.from("ABCDEFG");
