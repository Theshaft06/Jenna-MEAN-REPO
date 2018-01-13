class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }
    
    showStats(){
        console.log(`Name: ${ this.name }, Health: ${ this.health }, Speed: ${ this.speed }, Strength: ${ this.strength }`)
    }

    // function updateHealth(){
    //     health += 10;
    // }

    drinkSake(){
        this.health += 10;
        return this;
    }

    readHealth(){
        return this.health;
    }

    punch(ninja){
        if(ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(`${this.name} punched ${ninja.name} and lost 5 health!`)
        }
        else{
            (console.log("This ain't no ninja!"));
        }
        return this;
    }

    kick(ninja){
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


class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10
    }

    speakWisdom(){
        super.drinkSake();
        console.log("A tree falls in the forest, not a forest falling in a tree")
    }
}


var ninja1 = new Ninja("Hayabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.name = "George";
ninja1.showStats();


var sensei1 = new Sensei("Splinter");
sensei1.speakWisdom();
sensei1.showStats();