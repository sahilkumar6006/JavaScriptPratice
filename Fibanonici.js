function fib(n) {
  let arr = [];
  for(let i =0; i < n; i++  ) {
    if(i ==0){
      arr.push(1);
    }else if(i == 1) {
      arr.push(1);
    }else
    arr.push(arr[i-1] + arr[i-2])
  }
  console.log(arr);
}

fib(5);