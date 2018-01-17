function fib() {
    var a = 1 
    var b = 0
    var temp;
    // console.log(num);

    function nacci() {
        while (a >= 0){
            temp = a;
            a = a + b;
            b = temp;
            a--;
        }
    }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"



// function fibonacci(num){
//   var a = 1, b = 0, temp;

//   while (num >= 0){
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }

//   return b;
// }