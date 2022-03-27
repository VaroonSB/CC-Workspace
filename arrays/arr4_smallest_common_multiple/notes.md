samllest common multiple:
  sort the array
  populate the array with intermediate values
  let x, i = 1;
  while(res.every((ele) => { return x % ele == 0;}) == false){    // check each elements whether least multiple x is divisible by every elements. If not multiply with largest number and i++ 
    x = arr[1] * i;
    i++;
  }