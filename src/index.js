import React from "react";
import ReactDOM from "react-dom";
import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
    return x * 2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter(function (num) {
    return num > 10;
});
console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
var reducedNumber = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
})
// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//     newNumber += currentNumber
// })
console.log(reducedNumber);

//Find - find the first item that matches from an array.

const foundNumber = numbers.find(function (num) {
    return num > 10;
});
console.log(foundNumber);

//FindIndex - find the index of the first item that matches.
const foundIndexNumber = numbers.findIndex(function (num) {
    return num > 10;
});
console.log(foundIndexNumber);

//Emojipedia Challenge
let meaning = [];

for (let i = 0; i < emojipedia.length; i++) {
    let loopedMeaning = emojipedia[i].meaning
    meaning.push(loopedMeaning.substring(0, 101))
}

console.log(meaning);


const savedMeaning = emojipedia.map(function(emojiEntry) {
    
    return emojiEntry.meaning.substring(0, 101);
})
console.log(savedMeaning);


ReactDOM.render(
    <h1>Map / Filter / Reduce</h1>,
    document.getElementById("root")
)