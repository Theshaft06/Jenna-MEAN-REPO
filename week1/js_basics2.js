function magic_multiply(x, y){

  var temp = "";

  if(x.constructor === Array){
    for(let i = 0; i < x.length; i++){
      x[i] = x[i] * y;
    }
  }
  else if(typeof y == "string"){
    console.log("Error: Can not multiply by string");
    x ="";
  
  }
  else if(typeof x == "string"){
    for(let i = 0; i < y; i++){
     temp += x;
    }
    x = temp;
  } 
  else{
    x = x * y;
  };
    
  return x;
}

// let test1 = magic_multiply(5, 2);
// console.log(test1);

// let test2 = magic_multiply(0, 0);
// console.log(test2);

// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);

// let test4 = magic_multiply(7, "three");
// console.log(test4);
// => "Error: Can not multiply by string"

// let test5 = magic_multiply("Brendo", 4);
// console.log(test5);
// // => "BrendoBrendoBrendoBrendo"
