// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt with
// the default message, and a shirt of any size with a different message.

/*
function make_shirt(size='Large',message = 'I love typescript'){
    console.log(`The shirt size is ${size}. and msg is "${message}" `);
}
make_shirt();
make_shirt('Medium',...[,])
make_shirt ( ...[,],'Its user msg');
make_shirt ( ...[,],'Its user msg 2');
*/



// 38. Cities: Write a function called describe_city() that accepts the name of a city
// and its country. The function should print a simple sentence, such as Karachi is in
// Pakistan. Give the parameter for the country a default value. Call your function for
// three different cities, at least one of which is not in the default country.

/*
function describe_city(city = 'Faisalabad',country = 'Pakistan'){
    console.log(`${city} is the city of ${country}`);
}
describe_city();
describe_city('Lahore',...[,]);
describe_city('Peshawar');
describe_city('Karachi')
*/




// 39. City Names: Write a function called city_country() that takes in the name 
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan" Call your function with at least three city-country pairs, and
// print the value that’s returned.

/*
function city_country(city = 'Fsd', country = 'pakistan'){
    return `"${city}, ${country}"`;
}
console.log(city_country());
console.log(city_country('kolkata','Bangaldesh'));
console.log(city_country('sydney','Australia'));
*/


// 40. Album: Write a function called make_album() that builds a Object describing a music
// album. The function should take in an artist name and an album title, and it should
// return a Object containing these two pieces of information. Use the function to make
// three dictionaries representing different albums. Print each return value to show 
// that Objects are storing the album information correctly. Add an optional parameter
// to make_album() that allows you to store the number of tracks on an album. If the 
// calling line includes a value for the number of tracks, add that value to the album’s
// Object. Make at least one new function call that includes the number of tracks on an album.

/*
let album = {
    artist:'',
    album : '',
    noofTracks: 0

};
function make_album(artistname:string,albumname:string,track = 0){
    album.artist = artistname;
    album.album = albumname;
    if(track != 0){
        album.noofTracks = track;
    }
    console.log(album);

};
make_album('Atif','Masheup');
make_album('Arjeet singh','Just once');
make_album('QB','over horizon',5);
*/





// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
/*
const magicianName = ['sheferd','ratho','benjmi','queral'];
function show_magicians(array:string[]){
    array.forEach((name)=>{console.log(name);});
}
show_magicians(magicianName);
*/




// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write
// a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to see that
// the list has actually been modified.
/*
function  make_great(){
   for (let i = 0; i < magicianName.length; i++) {
    magicianName[i]= `The Great ${magicianName[i]}`;
   }
};
make_great();
show_magicians(magicianName);
*/




// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because
// the original array will be unchanged, return the new array and store it in
// a separate array. Call show_magicians() with each array to show that you have 
// one array of the original names and one array with the Great added to each magician’s name.

/*
const magicianNameUpdate:string[] = [];
function  make_great(){
    for (let i = 0; i < magicianName.length; i++) {
     magicianNameUpdate[i]= `The Great ${magicianName[i]}`;
    }
 };
 make_great();
 show_magicians(magicianName);
 show_magicians(magicianNameUpdate);

 */






 // 44. Sandwiches: Write a function that accepts a array of items a person 
 // wants on a sandwich. The function should have one parameter that collects
 // as many items as the function call provides, and it should print a summary
 // of the sandwich that is being ordered. Call the function three times, using
 // a different number of arguments each time.

/*
 function sandwichMake(items:string[]){
    items.forEach((name)=>{console.log(name);});

 }
 sandwichMake(["Bread","Cheese"]);
 sandwichMake(['bread','cheese', 'lettuce']);
 sandwichMake([ "bread"]);

 */






 // 45. Cars: Write a function that stores information about a car in a Object.
 // The function should always receive a manufacturer and a model name. It should
 // then accept an arbitrary number of keyword arguments. Call the function with
 // the required information and two other name-value pairs, such as a color or 
 // an optional feature. Print the Object that’s returned to make sure all the 
 // information was stored correctly.





  let cars:{}={};
  function carinput(manufac:string, model:number,...args:any){
    if (typeof args === undefined){
    cars = {
        manufacturer : manufac ,
        model : model
        };
    }
    else {
        cars = {
            manufacturer : manufac,
            model : model,
            };
       
   
    return cars;
  };
}
console.log(carinput("honda",2016));
