str = "sahil";
let count =0;

for(let i =0;  i < str.length; i++) {
  let char = str.charAt(i);
  if(char =='a' || char == 'e' || char== 'i' || char == 'o' || char == 'u') {
    count ++;
  }
}

console.log(count);