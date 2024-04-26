//Equality with strings 
console.log(`testing with strings`);
console.log("apple" == "apple");// true
console.log(("mango"as string) == "Mango"); //false


//using the lower case function
console.log("using the lower case ")
console.log("Apple".toLowerCase()=="apple");//true

//numerical tests
console.log("numerical tests")
console.log(10 > 5)//true
console.log(2 < 1) //false


//tests using "and" and "or" operators
console.log("tests with `and` and `or` operators")
console.log(true && false)//false
console.log (true || false) //true




//tests whether an item is in an array 
let fruits : string[] = ["apple", "banana", "cherry"];
console.log("is 'apple'in fruits ");
console.log(fruits.includes("apple"));//true



//test whether an item is not in an array

console.log("is 'mango' not in fruits?")
console.log(!fruits.includes("mango")); //true