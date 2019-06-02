function primeFinder() {
  let i = 2;
  let num = 600851475143;
  while (num > i) {
    if (num % i === 0) {
      num = num / i;
    }
    i++;
  }
  console.log(i);
}

// = 6857

