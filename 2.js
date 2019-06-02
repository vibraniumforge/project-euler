function fibonacciFinder(max) {
  let myArray = [];
  let a = 1;
  let b = 1;
  let c = a + b;
  do {
      a = b;
      b = c;
      c = a + b;
      if (c % 2 === 0) {
          myArray.push(c)
      }
  } while (c < max);
  console.log("myArray=", myArray);
  const myReducer = (value, value2) => (value + value2);
  console.log("The final sum of the array is:", myArray.reduce(myReducer));
}

fibonacciFinder(4000000);

// =4613730