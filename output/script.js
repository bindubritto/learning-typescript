"use strict";
// 01 - Union Types
// let playerName = 'Mash';
// console.log(typeof (playerName));
// let fruits = ['apple', 'mango', 34, true];
// fruits.push(false);
// let player = {
//     name: 'sakib',
//     age: 30,
//     isCaptain: false
// }
// player.age = 40;
// // player.country = 'Bangladesh';
// console.log(player)
// 02 - Function type
// const myFunc = (a: number, b: number) => {
//     console.log(a + b);
//     return a + b;
// };
// myFunc(4, 5);
// 03 - Function Signature
// signature
var add;
// body
add = function (a, b) {
    console.log(a + b);
    return a + b;
};
// call
console.log(add(5, 6));
