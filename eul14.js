(function eul15(){ // simple 40 choose 20 algorithm to quickly find the total number of combinations
  var start = Date.now();        
    
    function factorial(n){
        var factorialValue = 1;
        while (n > 1){
            factorialValue *= n;
            n -= 1;            
        }
        return factorialValue;
    }
     
    function number_combinations(n, k){
        var numberOfcombinations = factorial(n) / (factorial(k) * factorial(n - k));
        return console.log(Date.now()-start, numberOfcombinations);
    }  

    number_combinations(40, 20);

}());