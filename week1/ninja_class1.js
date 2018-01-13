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
// Example Outputs
// var ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"


function Ninja(name, health){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log(this.name);
    }
    
    this.showStats = function(){
        console.log(`Name: ${ this.name }, Health: ${ this.health }, Speed: ${ speed }, Strength: ${ strength }`)
    }

    // function updateHealth(){
    //     health += 10;
    // }

    this.drinkSake = function(){
        this.health += 10;
        return this;
    }

    this.readHealth = function(){
        return this.health;
    }

    this.punch = function(ninja){
        if(ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(`${this.name} punched ${ninja.name} and lost 5 health!`)
        }
        else{
            (console.log("This ain't no ninja!"));
        }
        return this;
    }

    this.kick = function(ninja){
        if(ninja instanceof Ninja){
            var kickLoss = (strength * 15);
            ninja.health -= kickLoss;
            console.log(`${this.name} kicked ${ninja.name} and lost ${kickLoss} health!`)
        }
        else{
            (console.log("This ain't no ninja!"));
        }
        return this;
    }

};

Ninja.prototype.cake = "Eat cake!"


var ninja1 = new Ninja("Hayabusa");
// console.log(ninja1.speed);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.name = "George";
ninja1.showStats();
console.log(ninja1.cake);

var ninja2 = new Ninja("Fred");
ninja2.sayName();
ninja2.punch("Yo!");
ninja1.showStats();
ninja1.kick(ninja2);
ninja1.kick("Bob");
ninja2.showStats();