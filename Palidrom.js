//level

str = "level";

let flag = true;

for(let i =0; i < str.length; i++) {
    if(str[i] !== str[str.length -i- 1]) {
      flag =false;
    }
  }

  if(flag == true) {
    console.log("the number is palidrome");
  }else {
    console.log("the string is not palidrome");
  }
