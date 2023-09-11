// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//    • If the person is less than 2 years old, print a message that the person is a baby.
//    • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//    • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//    • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//    • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//    • If the person is age 65 or older, print a message that the person is an elder.

/*
let age = 28;
if (age < 2) {
    console.log('This person is a BABY!');
} else if ((age >= 2 && age < 4)) {
    console.log("This person is a TODDLER!");
}else if(age >= 4 && age<13){
    console.log ("This person is a KID!") ;
} else if(age >= 20 && age <65){
    console.log ('This person is an ADULT')
}else{
    console.log("This person is ELDER");
    
}

*/





// 29.  Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
//      if statements that check for certain fruits in your array.
//     • Make a array of your three favorite fruits and call it favorite_fruits.
//     • Write five if statements. Each should check whether a certain kind of fruit is in your
//      array. If the fruit is in your array, the if block should print a statement, such as You
//      really like bananas!

/*
const favourite_fruits=['mango','pineapple', 'banana'];
favourite_fruits.forEach((item)=>{
    if(item == 'mango'){
        console.log(`You really like ${item}`);
    }
    if(item == 'orange'){
        console.log(`You really like ${item}`);
    }
    if(item == 'pineapple'){
        console.log(`You really like ${item}`);
    }
    if(item == 'apple'){
        console.log(`You really like ${item}`);
    }
    if(item == 'banana'){
        console.log(`You really like ${item}`);
    }
});
*/




// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
//    • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//    • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

/*
const usernames = ['admin','ahmad','usman'];
usernames.forEach ((user) => {
    if ( user === "admin"){
        console.log('Hello admin, would you like to see report');
    }else{
        console.log(`hello ${user}, Thank you for logging in again!`);
    
    }
});

*/





// 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//    • If the list is empty, print the message We need to find some users!
//    • Remove all of the usernames from your array, and make sure the correct message is printed.

/*
var usernames = ['admin','ahmad','usman'];
let uslength:number = usernames.length;
if ( uslength == 0){
    console.log('We need to find some user');
}else{
    for(let i=0; i<uslength; i++ )
    {
        usernames.pop();
        
    }
    console.log(usernames);
    console.log("All the user have been removed, Now we need to find new ones");
}
*/





//  32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//  • Make a list of five or more usernames called current_users.
//  • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//  • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//  • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

/*
const current_users = ['ali','ahmad','awais','hassan','usman'];
const new_users = ['umar','awais','shabaz','moazam','usman'];
new_users.forEach((name)=>{
    if(current_users.includes(name)){
        console.log(`${name} is already taken`);
    }
    else{
        console.log(`${name} is availbale`);
    }
});
*/
/*
let a = true;
new_users.forEach((name)=>{
    current_users.forEach((elem)=>{
        if(name == elem){
            a = false;            
        }
        else{
            a= true;
        }
    });
    if (a == true){
        console.log(`${name} is available`);
    }
    else{
        console.log(`${name} is already taken`);
    }
});
*/



// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
//     Most ordinal numbers end in th, except 1, 2, and 3.
//    • Store the numbers 1 through 9 in a array.
//    • Loop through the array.
//    • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//    Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

/*
const nNumber = [1,2,3,4,5,6,7,8,9];
nNumber.forEach((number) => {
    if(number == 1){
        console.log(`1st`);
    } else if(number == 2){
        console.log('2nd');        
    } else if(number == 3){
        console.log("3rd");
    }
    else{
        console.log(`${number}th`) ;
    }
});
*/





// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a
// array, and then use a for loop to print the name of each pizza.
//    • Modify your for loop to print a sentence using the name of the pizza instead of printing 
// just the name of the pizza. For each pizza you should have one line of output containing a simple 
// statement like I like pepperoni pizza.
//    • Add a line at the end of your program, outside the for loop, that states how much you like
// pizza. The output should consist of three or more lines about the kinds of pizza you like and 
// then an additional sentence, such as I really love pizza!

/*
const favpizza = ['peproni','chiken cheeze','kabaash'];
favpizza.forEach((pizza)=>{console.log(pizza)});
favpizza.forEach((pizza)=>{console.log(`I love ${pizza} pizza`);});
console.log(`I like pizza to eat on ocassionaly. i prefer to eat ${favpizza[0]} pizza on special ocasions
 ${favpizza[1]} is my optional one which i prefer on eavery weekends. ${favpizza[2]} is my favrt one which i prefered on every resturent` );
*/






//  35. Animals: Think of at least three different animals that have a common characteristic.
//  Store the names of these animals in a list, and then use a for loop to print out the name of
//  each animal. • Modify your program to print a statement about each animal, such as A dog would
//  make a great pet. • Add a line at the end of your program stating what these animals have in 
//  common. You could print a sentence such as Any of these animals would make a great pet!

/*
const animal = ['cat','dog','lion'];
animal.forEach((name)=>{console.log(name);});
animal.forEach((name)=>{console.log (`${name} is a carnivores. `)});
console.log('All these animals are belonging to same family. They are carnivores. their behavoirs are same towards teir pray.burt some of them will be made a pet due to enivormental progression');
*/





// 36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
// that should be printed on the shirt. The function should print a sentence summarizing the size
// of the shirt and the message printed on it. Call the function.
/*
function make_shirt(size:number,message:string){
    console.log(`The shirt size is ${size}. and msg is "${message}" `);
}
make_shirt (12,'hello');
*/