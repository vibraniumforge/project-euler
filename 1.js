function findNumbers(max) {
  let myArray = [];
  for (let i = 1; i < max; i++) {
    // if ((i%3===0) || (i%5===0)){
    // if(Math.floor(i/3)===(i/3) || Math.floor(i/5)===(i/5)){
    // if( Number.isInteger(i/3) && Number.isInteger(i/5)){
    if (parseInt(i / 3) === i / 3 || parseInt(i / 5) === i / 5) {
      myArray.push(i);
    }
  }
  console.log(myArray);
  const reducer = (value1, value2) => value1 + value2;
  console.log(
    "The sum of the numbers that are divisible by three and five under",
    max,
    "is:",
    myArray.reduce(reducer)
  );
}

findNumbers(1000);
// =233168
