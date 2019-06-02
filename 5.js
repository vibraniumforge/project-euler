function smMultiple() {
    let n=0;
    let i=1;
    let max=20;
    let found=false;
    while (found===false)  {
      n=n+max;
      while(n%i===0 && i<=max) {
        if (i===max) {
          found=true
        }
        i++
      }
      i=1;
    }
    console.log("The max divisor is:", n);
  }

  //232792560