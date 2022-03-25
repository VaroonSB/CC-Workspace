function mutation(arr) {
  let sup = arr[0].toLowerCase().split('');
  let sub = arr[1].toLowerCase().split('');
  return sub.every(function(c){
    for(let i = 0; i < sup.length; i++){
      if(c === sup[i])
        return true;
    }
    return false;
  })
}

mutation(["hello", "hey"]);