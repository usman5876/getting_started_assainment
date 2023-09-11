"use strict";
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a
//     message indicating the number of people you are inviting to dinner.
/*
let guests = ["Hassan", "Awais", "Akbar",'Shabaz'];
console.log(guests.length, 'peoples are invited for dinner');
*/
// 20. Think of something you could store in a array. For example, you could make a list of mountains,
//     rivers, countries, cities, languages, or anything else you’d like. Write a program that 
//     creates a list containing these items.
/*
let mountains = ['k2', 'nanga parbat', 'mount everest', 'trouch meer'];
let cities = ['islamabad', 'Peshawar', 'Lahore', 'Faisalabad','Karachi'];
let countries = ['Pakistan','India','china','japan','bangaladesh','Iran','Afghanistan'];


// 21. They think of something you could store in a TypeScript Object. Write a program that
//     creates Objects containing these items.

let hybriditems = {
    "mountains": mountains,
    "cities": cities ,
    "countries": countries
};
console.log(hybriditems.countries);

*/
// 22. Intentional Error: If you haven’t received an array index error in one of your programs
//     yet, try to make one happen. Change an index in one of your programs to produce an index 
//     error. Make sure you correct the error before closing the program.
/*
let mountains = ['k2', 'nanga parbat', 'mount everest', 'trouch meer'];
for (let i = 0; i <= 5; i++) {
    console.log(mountains[i]);
};
*/
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each
//    test and your prediction for the results of each test. Your code should look something like this:
/*

let car = 'toyota';
console.log("Is car == 'toyota'? I predict True.");
console.log(car == 'toyota');

let bike = 'honda';
console.log("Is bike == 'honda'? I predict True. ");
console.log(bike == 'honda');

let motor = 'hp13';
console.log("Is motor == 'hp13'? I predict True. ");
console.log(motor == 'hp13');

let bike2 = 'cd70';
console.log("Is bike == 'cd70'? I predict True. ");
console.log(bike2 == 'cd70');

let car2 = 'suzuki';
console.log("Is car == 'suzuki'? I predict True. ");
console.log(car2 == 'suzuki');

let bike4 = 'honda';
console.log("Is bike == 'suzuki'? I predict false. ");
console.log(bike == 'suzuki');

let car3 = 'honda';
console.log("Is car == 'suzuki'? I predict false. ");
console.log(car3 == 'suzuki');

let laptop = 'dell';
console.log("Is Laptop == 'Hp'? I predict false. ");
console.log(laptop == 'Hp');

let mobile = 'android';
console.log("Is mobile == 'iphone'? I predict false. ");
console.log(mobile == 'iphone');

let name1 = 'ali';
console.log("Is name == 'usman'? I predict false. ");
console.log(name1 == 'usman');

*/
// 24. More Conditional Tests:  write more tests. Have at least one True and one False result 
//     for each of the following:
/*
let stname = "usman";
console.log(stname == "usman");
console.log(stname != "ali");    // tests for equality and inequality with strings

console.log(stname == "Usman"); //Tests using the lower case function

let num = 15;
console.log(num == 12, num >12, num <=10, num !=20 ); // Numerical tests involving equality and inequality,
         // greater than and less than, greater than or equal to, and less than or equal to

console.log(stname == "usman" && num == 15);
console.log(stname == "ali" && num == 12); //Tests using "and" and "or" operators
console.log(stname == "ali" || num == 15);

let fruits = ["apple", "banana", "grapes", "mango"] ;//Test whether an item is in a array
let item = "orange";
fruits.forEach((elem)=>{
    if (elem == item) {
        console.log(`${item} is found in fruits list`);
    }
    else{
        console.log(`${item} is not found in fruit list`); //Test whether an item is not in a array
        
    }
});
*/
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called 
//     alien_color and assign it a value of 'green', 'yellow', or 'red'.
/*
let alien_color = ['green','yellow', 'red'];

//Write an if statement to test whether the alien’s color is green. If it is, print a message that
// the player just earned 5 points.

alien_color.forEach((color)=>{
    if ((color === 'green') ){
        console.log('You have won 5 point!');
    }
});

*/
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
/*
let alien_color = ['green','yellow', 'red'];
alien_color.forEach((color)=>{
    if ((color === 'green') ){
        console.log('You have won 5 point!');
    }
    else{
        console.log('You have earned 10 points.');
        
    }
});
*/
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//    • If the alien is green, print a message that the player earned 5 points.  
//    • If the alien is yellow, print a message that the player earned 10 points.
//    • If the alien is red, print a message that the player earned 15 points.
let alien_color = ['green', 'yellow', 'red'];
alien_color.forEach((color) => {
    if (color == 'green') {
        console.log('You have earned 5 point!');
    }
    else if (color == 'yellow') {
        console.log('You have earned 10 points.');
    }
    else if (color == 'red') {
        console.log('You have earned 15 points.');
    }
});
