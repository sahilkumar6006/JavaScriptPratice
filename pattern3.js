let n = 5;
for(let i =0; i <= n; i++) {
  let str = "";
  for(let j =n; j > 0; j--) {
    if(j > i) {
      str = str + "-";
    }
    else {
      str = str+ "*";
    }
    
  }
  console.log(str);
}