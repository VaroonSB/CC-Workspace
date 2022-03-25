function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if(vowels.indexOf(str[0]) > -1){
    str += 'way';
  }
  else{
    let match;
    if(str.match(/[aeiou]/g)){
      match = str.match(/[aeiou]/g);
    }
    else{
      match = 0;
    }
    const first = str.indexOf(match[0]);
    str = str.substring(first) + str.substring(0, first) + 'ay';
  }
  return str;
}

console.log(translatePigLatin("consonant"));