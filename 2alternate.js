function fibonacciFinder(max) {
    let sum = 0;
    let a = 1;
    let b = 1;
    let c = a + b;
    do {
      a = b;
      b = c;
      c = a + b;
      if (c % 2 === 0) {
        sum = sum + c;
      }
    } while (c < max);
    console.log("The sum of the Fibonacci numbers under", max, "is:", sum);
  }
  
  fibonacciFinder(4000000);
  
  // =4613730
  