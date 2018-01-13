// function starString(num){
//     stars = "*";
//     return stars.repeat(num);
// }
// let x = starString(8);
// console.log(x);

// function drawStars(listy){
//     stars = "*";
//     for(let i = 0; i < listy.length; i++){
//         console.log(stars.repeat(listy[i]));
//     }
// }
// drawStars([4, 6, 1, 3, 5, 7, 25]);

// function drawStars(listy){
//     stars = "*";
//     for(let i = 0; i < listy.length; i++){
//         if(Number.isInteger(listy[i])){
//             console.log(stars.repeat(listy[i]));
//         }
//         else if(typeof listy[i] == "string"){
//             console.log(listy[i][0].repeat(listy[i].length).toLowerCase());
//         }
//     }
// }
// drawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);

// let x = 1;
// let y = 2;
// let z == 3;
// console.log(x + x);


// var words = ["a lot of fun", "about not giving up", "challenging and empowering", "creative expression", "what I learned at CodingDojo!"]
// int i = 0;
// words[i] = words[i].replace(" ", "|");
// console.log(words);

// console.log(this);

// function Person(name, age){
//     var privateVariable = "This variable is private";
//     var privateMethod = function(){
//         console.log(this);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//     }
// }
// var eliza = new Person("Eliza", 48);
// console.log(eliza.privateVariable);


// function Person(name, age){
//     var privateVariable = "This variable is private";
//     var privateMethod = function(){
//         console.log(this);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//         // we can access our attributes within the constructor!
//         console.log("Also my privateVariable says: " + privateVariable)
//         // we can access our methods within the constructor!
//         privateMethod();
//     }
// }
// var joe = new Person("Joe", 23);
// joe.greet();


// function Person(name, age){
//     // create a private variable that stores a reference to the new object we create
//     var self = this;
//     var privateVariable = "This variable is private";
//     var privateMethod = function(){
//         console.log("this is a private method for " + self.name);
//         console.log(self);
//     }
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//         // we can access our attributes within the constructor!
//         console.log("Also my privateVariable says: " + privateVariable)
//         // we can access our methods within the constructor!
//         privateMethod();
//     }
// }
// var joe = new Person("Joe", 23);
// joe.greet();


// class Dot {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//         console.log("You created a Dot!");
//     }
// }
// const dot1 = new Dot("a", 10);


// class Dot {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     // prototype method
//     showLocation(){
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
//     // static method
//     static getHelp(){
//         console.log("This is a Dot class, for created Dots! A Dot takes x and y coordinates, type 'new Dot' to create one!");
//     }
// } 
// let dot3 = new Dot(4, 2);
// // we can see showLocation from our instance...
// console.log(dot3.showLocation);
// // but we can't see getHelp
// console.log(dot3.getHelp);
// // however we can call getHelp this way:
// Dot.getHelp()


// // parent Dot class
// class Dot {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     showLocation(){
//         console.log(`This ${this.constructor.name} is at x ${this.x} and y ${this.y}`);
//     }
// }
// // child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius){
//         super(x, y);
//         this.radius = radius
//     }
//     // showLocation(){
//     //     console.log(`This Circle is at x ${this.x} and y ${this.y}`);
//     // }
// }

// let circle1 = new Circle(33, 33, 33);
// // same attributes as a Dot, plus a radius
// console.log(circle1);
// // and Circles can access Dot methods
// circle1.showLocation();



// // parent Dot class
// class Dot {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     showLocation(){
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
//     // simple method in the parent class
//     parentFunction(){
//         return "This is coming from the parent!";
//     }
// }
// // child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius){
//         super(x, y);
//         this.radius = radius
//     }
//     showLocation(){
//         console.log(`This Circle is at x ${this.x} and y ${this.y}`);
//     }
//     // simple function in the child class
//     childFunction(){
//         // by using super, we can call the parent method
//         let message = super.parentFunction();
//         console.log(message);
//     }
// }
// let cerk = new Circle(1, 2, 3);
// cerk.childFunction();

do {
  console.log('Hello');
} while (false)
console.log('Goodbye');
