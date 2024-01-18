// let n =5;
// for(let i =0; i < 5; i++) {
//   let str ="";
//   for(let j=0; j <i; j++) {
//     str = str + "*";

//   }
//   console.log(str);
// }

//pattern 2

// let n =5;
// for(let i =0; i < n; i++) {
//   let str ="";
//   for(let j =n; j > i; j--) {
//     str = str + "*";
//   }
//   console.log(str);
// }


//pattern3

let n =5;
for(let i =0; i <=n; i++) {
  let str ="";
  for(let j =n; j > 0; j--){
      if(j > i) {
        str = str + " ";
      }else {
        str = str + "*";
      }
  }
  console.log(str);
}