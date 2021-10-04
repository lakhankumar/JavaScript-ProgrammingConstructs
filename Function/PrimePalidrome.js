//Take a input and determine if the number is prime
{
function isPrimeNumber(number){
if (number >= 2) {
    let flag = 0;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        console.log(number + " Is Not a prime number");
    else
        console.log(number + " Is a Prime number");
}
}
function isPalindrome(number) {
    let reverseNumber = number;
    while (number != 0) {
        let remainder = number % 10;
        reverseNumber = (reverseNumber * 10) + remainder;
        number = number / 10;
    }
    if (reverseNumber == number)
    console.log("The number is Palindrome");
    else
    console.log("The number is not Palindrome");}
}
const prompt = require('prompt-sync')();
let number = Number(prompt("Enter  number : "));
isPrimeNumber(number);
isPalindrome(number);