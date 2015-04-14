
//Kyle Rebstock

(function eul5() {
  console.log("start");
  //starting here higher numbers doesn't really save us alot of time unless we already know how high we can start
  var dividend = 0; 

  /*we need not start over at three every time because if it is divisible 
  by 20 then is is also divisible by 2 and of course 1 is just a waste of time*/
  var i = 3;    
  var maxDivisor = 20;
  var found = false;
  //Of course while loops are much faster than for loops.
  while (found === false) {
    dividend += maxDivisor;
    while (dividend % i === 0 && i <= maxDivisor) {
      if (i === maxDivisor) {
        found = true;
      }
      i++;
    }    
    i = 3;
  }
  console.log(dividend);
  return dividend;
}());