// let arr = [1,2,3,4,5,6,7,8,9,10];

// let filterArray = arr.filter(function(v,i) {
//   if(v % 2 == 0) {
//     return true;
//   }
 
// })


// let filterArray2 = arr.filter(v => v% 2 ==0);
// console.log(filterArray2);


// let filterOdd = arr.filter(v => v% 2 == 1);
// console.log(filterOdd);


//filter the even and square the 

// let arr = [2,3,4,5,6,7,8,9,10];
// let filterarr = arr.filter(v => v% 2 == 0).map(v => v* v);
// console.log(filterarr);

let obj =[
  {
    name: "SAhil", age: 21, gender: "M"
  },
  {
    name: "SAhil", age: 50, gender: "M"
  },{
    name: "SAhil", age: 30, gender: "F"
  },{
    name: "SAhil", age: 41, gender: "M"
  },{
    name: "SAhil", age: 60, gender: ""
  },{
    name: "SAhil", age: 55, gender: "M"
  },
]

let mapk = obj.filter(v => v.gender == "F").map(l => l.age);
console.log(mapk);