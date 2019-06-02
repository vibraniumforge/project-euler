function findTriples(max) {
  let counter = 0;
  for (let a = 1; a < max; a++) {
    counter++;
    for (let b = a; b < max; b++) {
      counter++;
      let c = Math.sqrt(a * a + b * b);
      if (parseInt(c) === c && a + b + c === 1000) {
        // if (c%1===0 && a + b + c === 1000 ){
        // if(Math.floor(c)===(c) && a + b + c === 1000){
        //   if (Number.isInteger(c) && a + b + c === 1000) {
        console.log("The result of a + b + c = 1000 is", a, b, c);
        console.log("This took", counter, "operations"); 
      }
    }
  }
}

findTriples(500);
