// Question 1
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Node.js, TypeScript, VS code all installed;
// Question 2
// let myName = 'ERIC';
// let message = 'hello would ypu like to learn some Python today?';
// console.log(myName+" "+message);
// Question 3
// lowerCase
//  let personName = "Zainab Nazish"
//  console.log("lowercase:",personName.toLowerCase());
//  //upperCase
//  console.log("uppercase:",personName.toUpperCase());
//  //titleCase
// console.log("titlecase",personName.replace(/\bw/g,c => c.toUpperCase()));
//Question 4
// let quote: string = "A person who never made a mistake never tried anything new";
// let famous_person: string = "Albert Einstein";
// let message: string = `${famous_person} once said, ${quote}`;
// console.log(message);
//Question 5
// let famousPerson = "Albert Einstein";
// let message =  "once said , “A person who never made a mistake never tried anything new.”"
// console.log(famousPerson,message);
//Question 6
// let whitespaceName = "\n\tZainub Nazish\t\n";
// console.log(whitespaceName);
// let withoutWhitespaceName = whitespaceName.trim();
// console.log(withoutWhitespaceName);
//Question 7  or   // Question 8
//  console.log(5 + 3);           // addition
//  console.log(11 - 3);          // substraction
//  console.log(4 * 2);           //multiplication
//  console.log(16 / 2);          //divide
//Question 9
// let favouriteNumber: number = 5
// console.log(`My favourite number is ${favouriteNumber}`);
//Question 10 
// Program written by: Zainab Nazish
//Current Date: 23-2-2024
// This program will write Hello World
// console.log('Hello World');   
//Question 11
// let names :string[] = ['Melahat','Zainab','Saluja','Merium'];
// for(let i=0; i<names.length; i++){
//      console.log(names[i]);
// }
//  Question 12
// let names :string[] = ['Melahat','Zainab','Saluja','Merium'];
// const message :string = 'welcome to Typescript class: '
//  for(let i=0; i<names.length; i++){
//       console.log(message + names[i]);
//  }
// Question 13
//  let transportation :string[] = ['Car','Aeroplane','Train','Cycle'];
//  for(let i=0; i<transportation.length; i++){
//      console.log('I would like to own a '+ transportation[i])
//  }
// Question 14
//  let Guest_List : string[] = ['Melahat','Saluja','Merium'];
// for(let i=0; i<Guest_List.length; i++){
//       console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//  }
// Question 15
// let Guest_List : string[] = ['Melahat','Saluja','Merium'];
// for(let i=0; i<Guest_List.length; i++){
//       console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//  }
//  let absent_Guest :string = 'Melahat' ;
//  let new_Guest :string = 'Iqra' ;
//  Guest_List[0] = new_Guest ;
//  for(let i=0; i<Guest_List.length; i++){
//      console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
// console.log(`Miss. ${absent_Guest} is not coming to the party.`);
//   Question 16
//let Guest_List : string[] = ['Melahat','Saluja','Merium'];
// for(let i=0; i<Guest_List.length; i++){
//       console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//  }
//   let absent_Guest :string = 'Melahat' ;
//   let new_Guest :string = 'Iqra' ;
//   Guest_List[0] = new_Guest ;
//   for(let i=0; i<Guest_List.length; i++){
//       console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
//  console.log(`Miss. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! we find Big Table so we are inviting 3 more guests.')
// Guest_List.unshift('Hina') ;
// Guest_List.splice(2 , 0 , 'Maryam Nawaz');
// Guest_List.push('Benazir Bhutto');
// for(let i=0; i<Guest_List.length; i++){
//   console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
//Question 17
//let Guest_List : string[] = ['Melahat','Saluja','Merium'];
// for(let i=0; i<Guest_List.length; i++){
//       console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//  }
//let absent_Guest :string = 'Melahat' ;
//let new_Guest :string = 'Iqra' ;
//Guest_List[0] = new_Guest ;
//    for(let i=0; i<Guest_List.length; i++){
//       console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//  }
//   console.log(`Miss. ${absent_Guest} is not coming to the party.`);
//  console.log('Good News! we find Big Table so we are inviting 3 more guests.')
//  Guest_List.unshift('Hina') ;
//  Guest_List.splice(2 , 0 , 'Maryam Nawaz');
//  Guest_List.push('Benazir Bhutto');
//  for(let i=0; i<Guest_List.length; i++){
//    console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//  }
//  console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');
//  while(Guest_List.length > 2){
//  let remove_Guest = Guest_List.pop();
//  console.log(`Sorry Miss. ${remove_Guest}, You are not invited for Dinner.`);
//  }
//  for(let i=0; i<Guest_List.length; i++){
//   console.log('Dear Miss. '+ Guest_List[i] + ',\n\nYou are Still invited.\n\nThank You!\n\n')
// }
// Guest_List.splice(0, 2);
// console.log(Guest_List);
// Question 18
//Store the locations in a array. Make sure the array is not in alphabetical order.
//let places :string[] =['Italy','Germany','Agra','Eifel Tower','Times Square'];
//Print your array in its original order.
//console.log('Orignal ' + places);
//Print your array in alphabetical order without modifying the actual list.
//console.log('Copy ' + [...places].sort());
//Show that your array is still in its original order by printing it.
//console.log('Orignal ' + places);
//Print your array in reverse alphabetical order without changing the order of the original list.
//console.log('Copy ' + [...places].sort().reverse());
//Show that your array is still in its original order by printing it again.
//console.log('Orignal ' + places);
//Reverse the order of your list. Print the array to show that its order has changed.
//console.log('Orignal ' + places.reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order.
//console.log('Orignal ' + places.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//console.log('Orignal ' + places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//console.log('Orignal ' + places.sort().reverse());
// QUESTION 19
//let Guest_List : string[] = ['Melahat','Saluja','Merium'];
// for(let i=0; i<Guest_List.length; i++){
//       console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//  }
// let absent_Guest :string = 'Melahat' ;
// let new_Guest :string = 'Iqra' ;
// Guest_List[0] = new_Guest ;
//    for(let i=0; i<Guest_List.length; i++){
//       console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//  }
//  console.log(`Miss. ${absent_Guest} is not coming to the party.`);
//   console.log('Good News! we find Big Table so we are inviting 3 more guests.')
// array me 3 guest add kiye hai.
//Guest_List.unshift('Hina') ;
// Guest_List.splice(2 , 0 , 'Maryam Nawaz');
// Guest_List.push('Benazir Bhutto');
// yahan per women 6 guest ke array ko print kraya hai.
//for(let i=0; i<Guest_List.length; i++){
//  console.log('Dear Miss. '+ Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
//}
//Sorry Message to guest for not inviting.
//console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');
//yahan per mene guest remove kiya hain. 
//while(Guest_List.length > 2){
//let remove_Guest = Guest_List.pop();
//console.log(`Sorry Miss. ${remove_Guest}, You are not invited for Dinner.`);
// }
// Hamare bache howe 2 Invited Guest.
//   for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Miss. '+ Guest_List[i] + ',\n\nYou are Still invited.\n\nThank You!\n\n')
// }
//Mene sare guest array se remove kar diye.
//Guest_List.splice(0, 2);
//console.log(Guest_List);
//Question 19
//print a message indicating the number of people you are inviting to dinner.
//console.log(`Total number of Guest Are: ${Guest_List.length}`);
// Question 20
//Think of something you could store in a array.
//  let items :string[] = ['Pakistan','Karachi','Islamabad',];
//  //Write a program that creates a list containing these items.
//  let item2 :string[] = [] ;
// item2.push('Germany'); 
// item2.push('England');
// item2.push('Dubai'); 
// console.log(item2);
// Question 21
//Write a program that creates objects containing these items.
// Data type of person object
// interface person{
//   age : number,
//   name : string,
//   nationality : string,
//   Student : Boolean 
// }
// person object
//  let person :person = {
// age : 26 ,
// name : 'Saluja',
// nationality : 'Pakistani',
// Student : true     
//  }
// print person
//  console.log(person);
// Data type of car object
//  interface car {
//   maker : string,
//   color : string,
//   automatic : boolean,
//  }
// car object
//  let car = { 
//   market :'toyota',
//   color : 'Black',
//   automatic : true
//  }
// print car
//  console.log(car);
// Question 22
//  If you haven’t received an array index error in one of your programs yet, try to make one happen.
//Creating array
//let newArray :string[] = ['will smith','james Bond','Tom Cruise'];
//Accessing array by index
//console.log(newArray[5]);
// Make sure you correct the error before closing the program.
// Correct the error
//console.log(newArray);
// Question 23
// Write a series of conditional tests.
// Creating car variable
//let car  :string = 'subaru';
// Test no 1
//console.log("Is car ==='subaru'? I predict True.");
//console.log(car ==='subaru');
// Test no 2
//console.log("Is car =='subaru'? I predict True.");
//console.log(car =='subaru')
// Test no 3
//console.log("Is car !='Honda'? I predict True.");
//console.log(car != 'Honda');
// Test no 4
//console.log("Is car !=='ford'? I predict True.");
//console.log(car !== 'ford');
// Test no 5
//console.log("Is car.Upper Case =='SUBARU'? I predict True.");
//console.log(car .toUpperCase() == 'SUBARU');
// Test no 6
//console.log("Is car =='SUBARU'? I predict False.");
//console.log(car == 'SUBARU');
// Test no 7
//console.log("Is car === 'SUBARU'? I predict False.");
//console.log(car === 'SUBARU');
// Test no 8
//console.log("Is car === 'Train'? I predict False.");
//console.log(car === 'Train');
// Test no 9
//console.log("Is car === 'Bus'? I predict False.");
//console.log(car === 'Bus');
// Test no 10
//console.log("Is car === 'Cycle'? I predict False.");
//console.log(car === 'Cycle');
// Question 24 
// Equality and Inequality Test 1
// console.log("Equality test with strings: ", "Apple" === "Apple");
// Equality and Inequality Test 2
// console.log("Inequality test with strings: ", ("Apple" as string) != "orange");
// Tests using the lower case function
// console.log("Lower Case function test: ","HELLO".toLowerCase() === "hello");
// Numerical tests involving equality , 
// console.log("Equality test with numbers: ", 26 === 26);
// Numerical tests involving inequality, 
// console.log("Inequality test with numbers: ", (26 as number) != 35);
// Greater than test,
// console.log("Greater than test", 10 > 5);
// less than test,
// console.log("less than test", 5 < 10);
//greater than or equal to, 
// console.log("Greater than and equal to test: ", 10 >= 10);
//less than or equal to
// console.log("less than or equal to test: ", 5 <= 10 );
//Test using "and" operator
// console.log("And operator test: ", 5===5 && 10 > 5 );
//Test using "or" operator
// console.log("or operator test: ", 5===5 || false);
//Test whether an item is in a array
// const fruits :string[] = ['Nashpati','Banana','Amrood'];
// console.log('Test "Nashpati" in the array: ', fruits.includes("Nashpati"));
// Question 25
//  Create a variable called alien_color
//let alien_color :string = 'green';
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//if(alien_color === 'green'){
//  console.log("Player just earned 5 points !");
//}
// Write one version of this program that passes the if test and another that fails.
//alien_color = 'yellow';
//  (The version that fails will have no output.)
//if(alien_color === 'green'){
//  console.log("Player just earned 5 points !");
//}
// Question 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25
//let alienColors: string = "green";
//write an if-else chain.
//If the alien’s color is green,
//print a statement that the player just earned 5 points for shooting the alien. 
//if(alienColors === "green"){
//  console.log("player just earned 5 points for shooting the alien.");
//}else{
//  console.log("player just earned 10 points.")
//}
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//alienColors = "yellow"
//if(alienColors === "green"){
// console.log("player just earned 5 points for shooting the alien.");
//}else{
// console.log("player just earned 10 points.")
//}
//Write one version of this program that runs the if block and another that runs the else block.
// Question 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//let alienColors: string = "green";
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// Version 1 of the program
//if(alienColors === "green"){
//  console.log("Version 1: player earned 5 points.");
//}
//else if(alienColors === "yellow"){
//  console.log("player earned 10 points.");
//}
//else if(alienColors === "red"){
// console.log("player earned 15 points.");
//}
//else{
// console.log("Please select right color")
//}
// Version 2 of the program
// alienColors = "yellow";
// if(alienColors === "green"){
//   console.log("player earned 5 points.");
// }
// else if(alienColors === "yellow"){
//  console.log("Version 2: player earned 10 points.");
// }
// else if(alienColors === "red"){
//  console.log("player earned 15 points.");
// }
// else{
//  console.log("Please select right color")
// }
// Version 3 of the program
// alienColors = "red";
// if(alienColors === "green"){
//   console.log("player earned 5 points.");
// }
// else if(alienColors === "yellow"){
//  console.log("player earned 10 points.");
// }
// else if(alienColors === "red"){
//  console.log("Version 3: player earned 15 points.");
// }
// else{
//  console.log("Please select right color")
// }
//Question 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
//let age: number = 25;
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
// if(age < 2){
//   console.log("person is a baby.");
// }
// else if(age >= 2 && age < 4){
//   console.log("person is a toddler.");
// }
// else if(age >= 4 && age < 13){
//   console.log("person is a kid.");
// }
// else if(age >= 13 && age < 20){
//   console.log("person is a teenager.");
// }
// else if(age >= 20 && age < 65){
//   console.log("person is an adult.");
// }
// else{
//   console.log("person is an elder.")
// }
// Question 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let favorite_fruits: string[] = ['apple' ,'banana' ,'mango'];
// if(favorite_fruits.includes('apple')){
//   console.log('I really like apple!');
// }
// if(favorite_fruits.includes('banana')){
//   console.log('I really like banana!');
// }
// if(favorite_fruits.includes('mango')){
//   console.log('I really like mango!');
// }
// if(favorite_fruits.includes('strawberry')){
//   console.log('I really like strawberries!');
// }
// if(favorite_fruits.includes('orange')){
//   console.log('I really like orange!');
// }
// Question 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//===============================================================================================================
// const userNames: string[] = ['admin','Bugs Bunny','Daffy Duck','Sylvester','Tweety'];
// for(let i=0; i<userNames.length; i++){
//   if(userNames[i] === 'admin'){
//     console.log('Hello admin, would you like to see a status report?');
//   }
//   else{
//     console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
//   }
// }
// Question 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// let  userName: string[] = ['fariha','Ayesha','yashfa','Nishoo','Nazish'];
// if(userName.length === 0){
//   console.log('we need to find some users');
// }else{
//   userName = [];
//   console.log('All user Name have been removed. ' + userName.length);
// }
// Question 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// let current_users = ['MelAhat', 'SaLuja', 'yaShfa', 'nishoo', 'Amber'];
// let new_users = ['fariha', 'MelAhat', 'Mehwish', 'zaib', 'nishoo'];
// new_users.forEach(function (newUsername) {
//     var lowerCase = newUsername.toLowerCase();
//     if (current_users.map(function (c_user) { return c_user.toLowerCase().includes(lowerCase); })) {
//         console.log("The user ".concat(newUsername, " is not available.Please write a diffrent username"));
//     }
//     else {
//         console.log("The username ".concat(newUsername, " is available."));
//     }
// });
// Question 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
// let numbers: number[] =[1,2,3,4,5,6,7,8,9]; 
// for(let num of numbers){
//   let ordinalEnding:string;
//   if(num ===1 ){
//     ordinalEnding = "st";
//   }
//   else if(num ===2){
//     ordinalEnding = "nd";
//   }
//   else if(num ===3){
//     ordinalEnding = "rd";
//   }
//   else{
//     ordinalEnding = "th";
//   }
//   console.log(`${num}${ordinalEnding}`);
// }
// Question 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// let Pizzas: string[] = ['Pepperoni' ,'Cuban','BBQ Chicken',];
// for(let Pizza of Pizzas){
//   console.log(`i like ${Pizza} pizza.`);
// }
// console.log(`I really love pizza`);
// Question 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// let Animals: string[] = ['dog','cat','rabbit'];
// for(let Animal of Animals){
//   console.log(`A ${Animal} would make a great pet.`);
// }
// console.log(`Any of these animals would make a great pet!`);
// Question 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// function make_shirt(size:string, text:string){
//   console.log(`Creating a ${size} shirt with the message: ${text}`);
// }
// make_shirt('large','Hello world');
// make_shirt('medium','Hello world');
// make_shirt('small','Hello world');
// Question 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt(size:string = 'Large', text:string ='I love TypeScript.'){
//   console.log(`Creating a ${size} shirt with the message: ${text}`);
//    }
//    make_shirt();
//    make_shirt('Medium');
//    make_shirt('small','I love Python');
// Question 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(city: string, country:string = 'Default Country.'){
//   console.log(`${city} is in ${country}`);
// }
// describe_city('Karachi','Pakistan',);
// describe_city('Tokyo','Japan',);
// describe_city('Paris');
// Question 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// function city_country(city: string, country: string){
//   return `${city},${country}`;
// }
// console.log (city_country('karachi','Pakistan'));
// console.log (city_country('Tokyo','Japan'));
// console.log (city_country('Paris','France'));
// Question 40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
// function make_album(artist: string, title:string, tracks?:number){
//   const album: {artist: string, title:string , tracks?:number} = {
//     artist : artist,
//     title : title
//   }
//   if(tracks !== undefined){
//     album.tracks = tracks;
//   }
//   return album;
// }
// const album1 = make_album('Artist 1' , 'Album Title 1');
// console.log(album1);
// const album2 = make_album('Artist 2' , 'Album Title 2');
// console.log(album2);
// const album3 = make_album('Artist 3' , 'Album Title 3', 12);
// console.log(album3);
// Question 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// let magician : string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore' ];
// function show_magicians(magicians: string[]){
//   magicians.forEach(element =>{
//       console.log(element);
//   });
// }
// show_magicians(magician);
// Question 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// let magician : string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore' ];
// function make_great (magicianArry:string[]){
//      for(let i=0; i<magicianArry.length; i++){
//           magician[i] =  'the Great ' + magicianArry[i]
//      }
// }
//  function show_magicians(magicians: string[]){
//   magicians.forEach(element =>{
//       console.log(element);
//    });
//  }
//  make_great(magician);
//  show_magicians(magician);
// Question 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// let magician : string[] = ['Harry Potter','Hermione Granger','Ron Weasley','Albus Dumbledore'];
// function CopyArray(arr:string[]){
//    return [...arr]
// }
// function make_great (magicianArry:string[]){
//   for(let i=0; i<magicianArry.length; i++){
//        magicianArry[i] = 'the Great ' + magicianArry[i]
//   }
// }
// function show_magicians(magicians: string[]){
//   magicians.forEach(element =>{
//     console.log(element);
//   });
// }
// const CopyMagicianArray = CopyArray(magician)
// make_great(CopyMagicianArray);
// console.log('\n\nThis is my orignal array:');
// show_magicians(magician);
// console.log('\n\nThis is my modified copy of the array:');
// show_magicians(CopyMagicianArray);
// Question 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// function makeSandwich (item: string[]) {
//    console.log('\nMaking your sandwich with:');
//    item.forEach(element  => console.log("- " + element));
//    console.log('Enjoye your sandwich !\n');
// }
// makeSandwich(['Ham','Cheese','lettuce']);
// makeSandwich(['Turkey','Bacon']);
// makeSandwich(['Peanut butter','Jelly']);
// Question 45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// function storeCarInfo(manufacture, modelName) {
//     var extraOption = [];
//     for (var _i = 2; _i < arguments.length; _i++) {
//         extraOption[_i - 2] = arguments[_i];
//     }
//     var carInfo = __assign({ manufacture: manufacture, modelName: modelName }, Object.assign.apply(Object, __spreadArray([{}], extraOption, false)));
//     return carInfo;
// }
// ;
// var answare = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['navigation', 'Power window'] });
// console.log(answare);
