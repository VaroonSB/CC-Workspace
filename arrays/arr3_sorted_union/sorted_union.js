function uniteUnique(arr) {
  console.log(arguments);
  let fullArr = [];
  for(let i = 0; i < arguments.length; i++){
    fullArr = fullArr.concat(arguments[i]);
  }
  fullArr = [...new Set(fullArr)];
  console.log(fullArr)
  return fullArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);