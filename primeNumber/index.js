function checkPrimeNumber(start, finish) {
  for (let i = start; i <= finish; i++) {
    if (i <= 1) {
      console.log(`${i}:false`);
    } else {
      let numberPrime = true;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          console.log(`${i}:false`);
          numberPrime = false;
          break;
        }
        console.log(`${i}:true`);
      }
      if (numberPrime) {
        console.log(`${i}:true`);
      }
    }
  }
}
checkPrimeNumber(1, 20);
