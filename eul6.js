/* The sum of the squares of the first ten natural numbers is:
 1^2 + 2^2 + ... + 10^2 = 385

 The square of the sum of the first ten natural numbers is:
 (1 + 2 + ... + 10)^2 = 55^2 = 3025

 Hence the difference between the sum of the squares of the first ten natural
 numbers and the square of the sum is 3025 - 385 = 2640.

 Find the difference between the sum of the squares of the first one hundred
 natural numbers and the square of the sum.*/

(function eul6() {
   console.log("start");
   var max = 100;
   var i = 0;	//to inc sumOfSquares
   var j = 0;	//to inc SquareOfSums
   var x = 0;	//for adding sumOfSquares
   var y = 0;	//for adding sumOfSquares
   
   (function sumOfSquares(){
   	while(i <= max){
         x+= Math.pow(i, 2)
         i++;
      }   
      return x;
   }());
   
   (function SquareOfSum(){
      while( j <= max ){
			y += j;
         j++;
      }
      y = Math.pow(y, 2);
      return y;
   }());
   console.log(y-x);
   return y-x;
}());




//some browsers but not all will work faster with a while loop that counts in revers.
(function eul6() {
   console.log("start");
   var least = 0;
   var i = 100;   //to inc sumOfSquares
   var j = 100;   //to inc SquareOfSums
   var x = 0;  //for adding sumOfSquares
   var y = 0;  //for adding sumOfSquares
   
   (function sumOfSquares(){
      while(i >= least){
         x+= Math.pow(i, 2)
         i--;
      }   
      return x;
   }());
   
   (function SquareOfSum(){
      while( j >= least ){
         y += j;
         j--;
      }
      y = Math.pow(y, 2);
      return y;
   }());
   console.log(y-x);
   return y-x;
}());