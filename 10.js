function myFx() {
  let primeArray = [2];
  var factor = 3;
  var i = 2;
  let max = 10;
  while (factor < max) {
    while (factor % i !== 0) {
      i++;
      if (i === factor) {
        primeArray.push(factor);
        break;
      }
    }
    factor++;
    i = 2;
  }
  const reducer = (n1, n2) => n1 + n2;
  console.log("The number of primes below", max, "is:", primeArray.length);
  console.log(
    "The sum of all primes below",
    max,
    "is:",
    primeArray.reduce(reducer)
  );
}
myFx();
