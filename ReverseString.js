str = "Hello";
let revStr=""

  for(let j=str.length; j >= 0; j--) {
    let reverse = str.charAt(j);
    revStr = revStr + reverse;
  }
  
  

console.log(revStr);