pig latin:
  define an array containing vowels
  if(array.indexOf(str[0]) > -1)  // checking first letter of the given string is vowel or not
    add 'way' at end of string
  else{
    use string match function and find the index of first vowel
    str = str.substring(index) + str.substring(0, index) + 'ay
  }
  return str