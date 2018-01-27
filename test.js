// const y = [];

// console.log(y);

// y.push(88);

// console.log(y);


// var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];

// for (var i = 0; i < names.length; i++) {
//     if (names[i].length === 5) {
//         console.log(names[i]);
//     }
// }


// var z = [9, 10, 6, 5, -1, 20, 13, 2];
// var zLength = z.length;

// for (var i = 0; i < z.length; i++) {
//     if ((i + 1) === zLength) {
//         continue;
//     } else {
//         console.log(z[i]);
//     }
// }


// function yell(stringy) {
//     console.log(stringy.toUpperCase());
// };

// yell("hello");


// function magic_multiply(x, y){
//     if (x === 0 && y === 0) {
//         return "All inputs 0";
//     } else if (Array.isArray(x)) {
//         for (var i = 0; i < x.length; i++) {
//              x[i] *= y;
//         }
//         return x
//     } else if (typeof y === "string") {
//         return "Error: Can not multiply by string"
//     } else if (typeof x === "string") {
//         return x.repeat(y);
//     } else {
//         x = x * y;
//         return x;
//     }
// }

// let test1 = magic_multiply(5, 2);
// console.log(test1);

// let test2 = magic_multiply(0, 0);
// console.log(test2);

// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);

// let test4 = magic_multiply(7, "three");
// console.log(test4);

// let test5 = magic_multiply("Brendo", 4);
// console.log(test5);


// function zero_negativity(array) {
//     for (var i = 0;  i < array.length; i++) {
//         if (array[i] < 0) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// };

// let test1 = zero_negativity([1, 2, 3]);
// console.log(test1);


// function is_even(numby) {
//     if (numby % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// let test1 = is_even(3);
// console.log(test1);


// function how_many_even(array) {
//     count = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             count += 1;
//         }
//     }
//     return count;
// };

// let test1 = how_many_even([1, 1, 3, 4]);
// console.log(test1);


// function create_dummy_array(numby) {
//     array = [];
//     for (var i = 0; i < numby; i++) {
//         array.push(Math.floor((Math.random() * 10)));
//     }
//     return array;
// };

// let test = create_dummy_array(5);
// console.log(test);


// function random_choice(array) {
//     return array[Math.floor(array.length * Math.random())];
// };

// let test = random_choice([1, "cat", true, 37, "blue"]);
// console.log(test);




// Assignment: Ninja Class
// Create a new class called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's Strength and Speed, as well as their health.
// drinkSake() - This should add +10 Health to the Ninja

// function Ninja(name, health) {
//     this.name = name;
//     this.health = 100;
//     let speed = 3;
//     let strength = 3;

//     this.sayName = function() {
//         console.log(`My ninja name is ${this.name}`);
//         return this;
//     }

//     this.showStats = function() {
//         console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`);
//     }

//     this.drinkSake = function() {
//         this.health += 10;
//     }
// };

// const myNinja = new Ninja("Hayabusa");
// myNinja.sayName();
// myNinja.showStats();
// myNinja.drinkSake();
// myNinja.showStats();



// function Ninja(name, health) {
//     this.name = name;
//     this.health = 100;
//     let speed = 3;
//     let strength = 3;

//     this.sayName = function() {
//         console.log(`My ninja name is ${this.name}`);
//         return this;
//     }

//     this.showStats = function() {
//         console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`);
//     }

//     this.drinkSake = function() {
//         this.health += 10;
//     }

//     this.punch = function(punchedNinja) {
//         if (punchedNinja instanceof Ninja) {
//             punchedNinja.health -= 5;
//             console.log(`${punchedNinja.name} was punched by ${this.name} and lost 5 health!`);
//         } else {
//             console.log(`I'm sorry, Dave.  I can't do that.`);
//         }
//         return this;
//     }

//     this.kick = function(kickedNinja) {
//         if (kickedNinja instanceof Ninja) {
//             let subtractedHealth = (strength * 15);
//             kickedNinja.health -= subtractedHealth;
//             console.log(`${kickedNinja.name} was kicked by ${this.name} and lost ${subtractedHealth} health!`);
//         } else {
//             console.log(`I'm sorry, Dave.  I can't do that.`);
//         }
//         return this;
//     }
// };

// const myNinja = new Ninja("Hayabusa");
// const lameNinja = new Ninja("Lame-O");
// myNinja.showStats();
// myNinja.kick(lameNinja);
// lameNinja.showStats();



// Part I
// Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following attributes:

// name
// health
// speed
// strength
// Speed and strength should be 3 by default. Health should be 100 by default. Do not worry about private variables.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's Strength and Speed, as well as their health.
// drinkSake() - This should add +10 Health to the Ninja
// Part II - Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

// // example output
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// // -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei.showStats();
// // -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// class Ninja {
//     constructor(name, health, speed, strength) {
//         this.name = name;
//         this.health = 100;
//         this.speed = 3;
//         this.strength = 3;
//     }

//     sayName() {
//         console.log(`My ninja name is ${this.name}.`)
//         return this;
//     }

//     drinkSake() {
//         this.health += 10;
//         return this;
//     }

//     showStats() {
//         console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
//         return this;
//     }
// };

// class Sensei extends Ninja {
//     constructor(name, health, speed, strength, wisdom) {
//         super(name)
//         this.health = 200;
//         this.speed = 10;
//         this.strength = 10;
//         this.wisdom = 10;
//     }

//     speakWisdom() {
//         super.drinkSake();
//         console.log(`In sake is truth.`);
//     }
// }

// const newNinja = new Ninja("Leonardo");
// newNinja.sayName();
// newNinja.showStats();

// const newSensei = new Sensei("Splinter");
// newSensei.sayName();
// newSensei.showStats();
// newSensei.speakWisdom();
// newSensei.showStats();


// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");


// var a = 2;
// var b = function() { console.log("something"); };
// function doSomething(x) {
//   console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);


// function doSomething(possibleCallback) {
//   if (typeof(possibleCallback) === 'function'){
//     console.log('possibleCallback is a callback!');
//     possibleCallback(); //we can invoke the callback!
//   }
//   else {
//     console.log('possibleCallback: ', possibleCallback, ' is not a callback function.');
//   }
// }
// doSomething(function myCallback(){ console.log('yes, I am a callback!') });
// doSomething('string');


// function makePasta(pasta, makeSauce) {
//   console.log("Boiling water");
//   console.log("Putting " + pasta + " pasta in the water");
//   console.log("Pasta is done!");
//   return pasta + " Pasta! Voila!";
// }
// makePasta("Penne");
// makePasta("Farfalle");


// // This is a function that just prints the result of another list of instructions
// function printResult(doSomething) {
//  var result = doSomething();         // store the return value of the callback parameter
//  console.log(result);                // print the result!
// }
// printResult(function returnFive(){ return 5 })  // this should print "5"



// function each(arr, callback) {
//   // loop through the array
//   for(var i = 0; i < arr.length; i++) {
//     callback(arr[i]); // invoking the callback many times... delegation!
//   }
// }
// // call the each function
// each([1,2,3], function(num) { alert(num + " I am from the callback!"); }) //so many alerts!


// //simulated really slow DB call.
// function getStuffFromDatabase(callback){
//   var data;
//   var myTimer = setTimeout(function(){
//     if (typeof(callback) == 'function'){
//       //it just got back from the DB!
//       data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
//       callback(data);
//     }
//   }, 10000);
//   // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
//   return data;
// }    
// // //simulated request (failing);
// // function requestDataFromDatabase(){
// //   var data = getStuffFromDatabase(); // this should return my data right??
// //   console.log(data);
// // }
// // ************CHANGES HERE **************
// function requestDataFromDatabase(){
//   var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
//     console.log(data, "ASynchronous");
//     for (var i = 0; i < data.length; i ++){
//       console.log(data[i].name);
//     }
//   });
//   console.log(data, "Synchronous");
// }
// //***************** END CHANGES **********************
// function catchFly(){
//   console.log('I just caught a fly!');
// }
// requestDataFromDatabase();
// // keep running my program!
// console.log('Hello');
// catchFly();
// //etc.