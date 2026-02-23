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

