/*10001st prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/


(function eul7() {
  // starting index (first prime)
  console.log("start"); 
  var i = 3;
  var j = 2;
  var max = 10001;
  var primes = [2];
 
  
  while (primes.length <= max) {
    // while has a remainder,
    // it could still be a prime number
    while (i % j !== 0) {
      j++;
      //if we have tried every other number and 
      //ends at itself then if must be a prime number
      if(j === i){
        primes.push(i);
         break;
      }
    }

    i++;
    j = 2;
  }

  console.log(primes[max-1]);
  return primes[max - 1];
}());