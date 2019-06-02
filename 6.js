function sqFinder() {
  let sumOfTheSquares = 0;
  let squareOfTheSum = 0;
  for (let i = 1; i < 101; i++) {
    sumOfTheSquares = sumOfTheSquares + i;
  }
  console.log("sum of the numbers 1-100=", sumOfTheSquares);
  sumOfTheSquares = sumOfTheSquares * sumOfTheSquares;
  console.log("square of that=", sumOfTheSquares);
  for (let j = 1; j < 101; j++) {
    squareOfTheSum = squareOfTheSum + j * j;
  }
  console.log("squareOfTheSum=", squareOfTheSum);
  console.log(
    "The answer is:",
    "sumOfTheSquares",
    sumOfTheSquares,
    " and squareOfTheSum",
    squareOfTheSum
  );
  console.log("The answer is:", sumOfTheSquares - squareOfTheSum);
}
sqFinder();

// =25502500 - 338350=25164150
