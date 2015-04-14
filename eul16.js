// must include <script src="http://leemon.com/crypto/BigInt.js"></script>  to work with scientific notation
(function(){
	console.time("concatenation");
	function pow(n,p) {		// takes number and power
	   var a  = int2bigInt(n,0,0); // convert n to bigint
	   var b = int2bigInt(n,0,0);

	   for(var i=1; i < p; i++) {
	      a = mult(a, b);         // use bigint.js mult method to multiply n, p times
	   }
	   return a;
	}

	function sumDigits(n) {
	   var b = bigInt2str(n, 10);
	   var sum = 0;
	   var a   = b.split('');
	   for ( i in a) {
	      sum += parseInt(a[i]);
	   }
	   return sum;
	}

	console.log(sumDigits(pow(2,1000)));
	console.timeEnd("concatenation");
}());