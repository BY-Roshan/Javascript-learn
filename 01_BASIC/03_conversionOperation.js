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

console.log("1" - 2);//-1
console.log(1 - "2");//-1.. Why it output is -1 because when we use - operator it convert string into number and then perform operation
console.log("1" - "2");//-1
console.log("1" - 2 + 2);//1
console.log(1 - "2" + 2);//1

console.log(3 + 3 * 4 / 12);//Do not write like this because it is difficult to undarstand
console.log((3 + 3) * 4 / 12);//Write like this because it is easy to understand


console.log(true);//true
console.log(+true);//1

console.log("");//output is "" ""(space)
console.log(+"");//0

/*
let num1, num2, num3 = 3
console.log(num1);//undefined
*/

let num1 = 1, num2 = 4, num3 = 3
console.log(num1, num2, num3);

let a, b, c ;
a = b = c = 4 //bad way for a good devloper 
console.log(a, b, c);

let GameCounter = 100
GameCounter++;//GameCounter = GameCounter + 1 AND ++GameCounter is also same
console.log(GameCounter);
/*
//Postfix increment
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

//Prefix increment
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
*/