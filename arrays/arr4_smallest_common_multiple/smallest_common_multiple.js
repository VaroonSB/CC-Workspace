function smallestCommons(arr) {
  arr = arr.sort((a,b) => {
    return a-b;
  })
  let res  = [];
  for(let i = arr[0]; i < arr[1]; i++){
    res.push(i);
  }
  let x, i = 1;
  while(res.every((ele) => { return x % ele == 0;}) == false){
    x = arr[1] * i;
    i++;
  } 
  console.log(x);
  return x;
}

smallestCommons([1,5]);