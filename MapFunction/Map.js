// let arr = [1,2,3,4,5,6];

// let myArr = arr.map(function(v,i, arr) {
//   return v*v;
// })

// console.log(myArr);

//Way of Using the Map function

//Way 1

// let arr2 = [2,3,4,5,6,7,8];
// let output = arr2.map(double);

// function double(x) {
//   return x *2;
// }

// console.log(output);

//way 2 

// let arr = [1,2,3,4,5];
// let output = arr.map(function double(x) {
//   return x * 2;
// })
// console.log(output);


//way 3
// let arr = [1,2,3,4,5];
// let output = arr.map(x => x*2);
// console.log(output);

//Pratice Map Function
// let arr =[
// "sahil kumar",
// "sawtanter padda",
// "joban preet",
// "joban pal",
// "Sanju Kumar"
// ]

// let newArr = arr.map(function(v,i) {
//   let names = v.split(" ");

//   let ans = names[0][0] + names[1][0];
 
//   let toCaptalize = ans.toUpperCase();
//   console.log(toCaptalize);
// })

//To return even  and odd

let arr=[1,2,3,4,5,6,7,8,9,10];
let newArr = arr.map(function(v,i) {
  if( v % 2 == 0) {
    return true;
  }else {
    return false;
  }

})

console.log(newArr)