// function zero_negativity(listy){
//     for(let i = 0; i < listy.length; i++){
//         if(listy[i] < 0){
//             return false;
//         }
//     }
//     return true;
// }
// zero_negativity([1,2,3]);


// function is_even(num){
//     if(num % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// is_even(2);


// function how_many_even(listy){
//     count = 0;
//     for(let i = 0; i < listy.length; i++){
//         if(listy[i] % 2 === 0){
//             count += 1;
//         }
//     }
//     return count;
// }
// how_many_even([1,2,3,4,5,6]);


// function create_dummy_array(n){
//     listy = [];
//     for(let i = 0; i < n; i++){
//         listy.push(Math.floor(Math.random() * 10));
//     }
//     return listy;
// }
// create_dummy_array(4);


function random_choice(listy){
    let x = listy[Math.floor(Math.random() * listy.length)];
    return x;
}
random_choice([1, "a", -2, "cat", 55, false]);
