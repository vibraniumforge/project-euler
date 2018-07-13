function myFx() {
  let sum = 2;
  let factor = 3;
  let i = 2;
  let max = 100;
  while (factor < max) {
    while (factor % i !== 0) {
      i++;
      if (i == factor) {
        sum = sum + factor;
        break;
      }
    }
    factor++;
    i = 2;
  }
  console.log("The sum of all primes below", max, "is:", sum);
}
myFx();
