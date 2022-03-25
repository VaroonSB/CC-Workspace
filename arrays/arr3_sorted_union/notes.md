sorted union:
  use arguments object to get all arguments
  concat all th arguments into single array
  assign the array to set to eliminate duplicate while preserving the order

three dots is spread syntax:
  let desserts = ['cake', 'cookie', 'donut'];
  let desserts1 = ['icecream', 'flan', 'frozen yoghurt', desserts];
  console.log(desserts1); // [ 'icecream', 'flan', 'frozen yoghurt', [ 'cake', 'cookie', 'donut' ] ]



  let desserts = ['cake', 'cookie', 'donut'];
  let desserts1 = ['icecream', 'flan', 'frozen yoghurt', ...desserts];
  console.log(desserts1); // [ 'icecream', 'flan', 'frozen yoghurt', 'cake', 'cookie', 'donut' ]