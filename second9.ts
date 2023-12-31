// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to
//    each. If you don’t have anything specific to write because your programs are too simple at 
//    this point, just add your name and the current date at the top of each program file. 
//    Then write one sentence describing what the program does.



// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s
//    name by accessing each element in the list, one at a time.
/*
let friendsName: string[] = ["adeel", "shabaz", "hassan", "awais", "zahid"];
for (var i=0;i<friendsName.length ;++i) {
    console.log(friendsName[i]);
    };
    console.log("---------------------------------");
*/



// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each
//    person’s name, print a message to them. The text of each message should be the same, but 
//    each message should be personalized with the person’s name.
/*
let friendsName: string[] = ["adeel", "shabaz", "hassan", "awais", "zahid"];
for (var i=0;i<friendsName.length ;++i) {
    console.log(`Hy! ${friendsName[i]}, how are u`);
    };
    console.log("---------------------------------");
*/





// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a
//     car, and make a list that stores several examples. Use your list to print a series of 
//     statements about these items, such as “I would like to own a Honda motorcycle.
/*
let fvrtVehicle:string = "Bycycle";
let statement = ["i would like to purchase", "i want to ride", "i want t modify", "i want to race with ali on my"];
statement.forEach(elem => {
    console.log(elem,fvrtVehicle);
    
});
*/




// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list
//  to print a message to each person, inviting them to dinner.
/*
let guests = ["Hassan", "Awais", "Akbar",'Shabaz'];
guests.forEach((name)=>{
    console.log(`${name}, please come for my party`)
});
*/





// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you
// need to send out a new set of invitations. You’ll have to think of someone else to invite.
/*
let guests = ["Hassan", "Awais", "Akbar",'Shabaz'];
let droper = guests.splice(2,1,"Adeel");
console.log(`${droper[0]} would not came to party tonight`);
guests.forEach((name)=>{
    console.log(`${name}, please come for my party`)
});
*/




// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think
// of three more guests to invite to dinner
/*

let guests = ["Hassan", "Awais", "Akbar",'Shabaz'];
let droper = guests.splice(2,1,"Adeel");
console.log(`${droper[0]} would not came to party tonight`);
guests.forEach((name)=>{
    console.log(`${name}, please come for my party`)

});
console.log("--------I have found a bigger table so, new guests will invite------- ");
guests.splice(2,0,"Zahid");
guests.push("Qasim");
guests.forEach((name)=>{
    console.log(`${name}, please come for my party`)

});





// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
//     for the dinner, and you have space for only two guests.

console.log('---Due to unavailability of table, i can invite only two guests.---');
for (let i = guests.length-1; i > 1; i--) {
    console.log(`Sorry! Due to unavaiabilty ${guests[i]} your name is removed from list`);
    guests.pop();
};
guests.forEach((name)=>{
    console.log(name, 'you are still invited for party');
    
});
guests.shift();
guests.shift();
console.log(guests, 'List is empty now');
*/

// 18. Seeing the World: Think of at least five places in the world you’d like to visit
//  Store the locations in a array. Make sure the array is not in alphabetical order.

let fvrtPlaces = ['Nanga Parbat', 'Twins Tower', 'Sydney beach', 'Liberty Statue'];

console.log(fvrtPlaces);  //  Print your array in its original order.

console.log([...fvrtPlaces].sort()); //Print your array in alphabetical order without modifying the actual list.
 
console.log(fvrtPlaces); //Show that your array is still in its original order by printing it.

console.log([...fvrtPlaces].sort().reverse()); // Print your array in reverse alphabetical order without changing the order of the original list.

console.log(fvrtPlaces); //Show that your array is still in its original order by printing it again.

fvrtPlaces.reverse();
console.log(fvrtPlaces); //Reverse the order of your list. Print the array to show that its order has changed.

fvrtPlaces.reverse();
console.log(fvrtPlaces); //Reverse the order of your list again. Print the list to show it’s back to its original order.

fvrtPlaces.sort();
console.log(fvrtPlaces); //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

fvrtPlaces.reverse();
console.log(fvrtPlaces); //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed


