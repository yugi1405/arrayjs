let str = "Please locate where 'locate' occurs!";
var ind=str.indexOf("locate");
console.log(ind);

let text = "Please locate where 'locate' occurs!";
 var txt=text.lastIndexOf("locate");
 console.log(txt);

let text1 = "Hello world, welcome to the universe.";
var txt1 =text1.includes("world");
console.log(txt1);

/*let text2 = "Hello world, welcome to the universe.";
var sw=text2.startsWith("Hello");
console.log(sw);*/

/*let text3 = "Hello world, welcome to the universe.";
var inc=text3.includes("world", 12);
console.log(inc);*/

let chcr = String.fromCharCode(72, 69, 76, 76, 79);
console.log(chcr);