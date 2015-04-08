(function eul10() {
  // starting index (first prime)
  console.log("start");
  // scientific notation on some browsers 
  // and JS engines can sometimes be marginally 
  var max = 2000000; 
  var i = max;
  var total = 0;
  
  //reverse while loops are generally a magnitude 
  // faster than for loops and regular while loops!
  while (i >= 2) {
    if(isPrime(i) === true){
      total += i;
    }
    i--;
  }

  function isPrime(n){
    var j = Math.floor(Math.sqrt(n));

    while(j >= 2){
      if (n % j === 0){
        return false;
      }
      j--;
    }
    return true;
  }
  
  console.log(total);
  return total;
}());
