function palindromeFinder() {
  for (let i = 1000; i > 890; i--) {
      for (let j = i - 1; j > 890; j--) {
          let k = i * j;
          let l = k.toString();
          let m = l.split('').reverse().join('');
          if (m == k) {
              console.log("The answer is:", i, j, k);
              return;
          }
      }
  }
}

// = 993 913 906609