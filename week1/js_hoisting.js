// console.log(hello);
// var hello = 'world';

//will output "world"
//actually output undefined, because the var was defined after the call



// var needle = 'haystack';
// test();


// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

//will not output anything, as the function is not called after its definition
//actually output "magnet"



// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

//will output "super cool"
//actually output "super cool"



// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = ‘gone’;
// }

//will output "chicken", then "gone"
//throws a SyntaxError, with the punctuation around "gone"; not single quotes like I thought



// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//will log "chicken" three times
///throws a TypeError, mean is not a function



// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

//will log "disco" three times
//logged "undefined", "rock", "r&b", "disco"



dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//will log "san jose", "seattle", "burbank", "san jose"
//actually logged this ^