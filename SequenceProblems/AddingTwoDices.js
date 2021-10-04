/*
Using Math Function To Add The Two Dice Numbers
*/
let dice1 =Math.floor(((Math.random() * 10) % 6) + 1);
let dice2 =Math.floor(((Math.random() * 10) % 6) + 1);
let sumOfTwoDices = dice1 + dice2;
console.log("The First Dice Number Is : " +dice1);
console.log("The Second Dice Number Is : " +dice2);
console.log("The Sum Of Two Dices Is : " +sumOfTwoDices);