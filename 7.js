function myFx() {
    let primeArray = [2];
    var i = 3;
    var j = 2;
    let maxPrimes = 10001
    while (primeArray.length < maxPrimes) {
        while (i % j !== 0) {
            j++
            if (j === i) {
                primeArray.push(i);
                break;
            }
        }
        i++;
        j = 2;
    }
    console.log("The number", maxPrimes, "prime is:", primeArray[maxPrimes - 1])
    return;
}
myFx();

//104743