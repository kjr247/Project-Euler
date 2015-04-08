//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var x = 444420;
var i = 2;

  for(i = 2; i <= 20; i++){
    for(x = 444420;x <= 450000; x++){
      if(x % i !== 0){
        i = 2;        
        continue;
      }
      if(x % i === 0){      
        console.log("x: " + x +  " was divisible by i: " + i);
        if(i === 20){
          console.log("i is 20 and this x: " + x "is divisible by all numbers between 1 through 20");            
          break;
        }
      }    
    }
  }