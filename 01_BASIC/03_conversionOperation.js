let score = "34"

console.log(typeof score);
console.log(typeof (score));//Both ore same 

let ValueInNumber = Number(score);//Now string is converted to number

console.log(typeof ValueInNumber);
console.log(ValueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let IsLoggedIn = 1 ;
let booleanIsLoggedIn = Boolean(IsLoggedIn);//Convert into boolean value(True or false)
console.log(booleanIsLoggedIn);

//1 => true
//0 => false
// "" => false
// "Roshan" => true
let SomeNumber = 45

let StringNumber = String(SomeNumber);//45 => "45"
console.log(StringNumber);
console.log(typeof StringNumber);
 

// ***************************** Oprations **************************************************


let value = 3
let negValue = -value;//-3

/*

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);//Remainder
console.log(2**3);//Power

*/

let str1 = "Roshan"
let str2 = "Patel"

let str3 = str1 + str2
console.log(str3);

// add space between two string has three different ways

//1st way
let str4 = str1 + " " + str2
console.log(str4);

//2nd way
let str5 = `${str1} ${str2}`
console.log(str5);

//3rd way
let str6 = str1.concat(" ",str2)
console.log(str6);

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32