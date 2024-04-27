const string="ajmal"
const string2="muhammed"

//accecing elements
console.log`${string[1]}` //j

//replace it create a new array replaceAll

console.log(string.replace("ajmal","muhammed"))

//concat 

const fullName=string.concat( ` ${string2}`)
console.log(fullName);

//trim remove spaces
const a="           trim       "
console.log(a.trim())
//indexOf and lastIndexOf

console.log(string.indexOf("a"))
console.log(string.lastIndexOf("a"))

//startsWith  endsWith

console.log(string.startsWith("a"));
console.log(string.startsWith("m"));

//substring start with and end with
console.log(string.substring(3,4))

//slice
console.log(string2.slice(2));

//convert number into string 

const toString=1245
console.log(String(toString));

//how to convert object in to string

const b={name:"muhammed ajmal"}
console.log(b);
console.log(JSON.stringify(b));

//toLowerCase toUpperCase


//string comparison if same if get ==0 else -1
const str="apple"
const str2="apple"

console.log(str.localeCompare(str2));
console.log(str.includes("a"));
console.log(str.includes("b"));

//split method we can use how split like space

const split="check in split method"
console.log(split.split(" "));

//how join array ?we can use join method

const join=["checking","join","method"]

console.log(join.join(" and "));



