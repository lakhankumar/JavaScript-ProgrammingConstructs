// Perform arithmetic operations and find max, min
 let a=10;
 let b =20;
 let c= 30;
let RE1 = a + (b * c) ;
let RE2 = (a % b) + c;
let RE3 = c +( a / b);
let RE4 = (a * b) + c;
console.log("The Results Are : " + RE1 +" "+ RE2 +" " + RE3 +" "+RE4);
let maximum = Math.max(RE1, RE2, RE3, RE4);
let minimum = Math.min(RE1, RE2, RE3, RE4);
console.log("Maximum is " + maximum);
console.log("Minimum is " + minimum);