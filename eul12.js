     console.log("start");
     var divisors = 0;
     var maxDivisors = 0;
     var tri = 1;
     var inc = 1;
     var div = 0;
     var remainder = 0;
     var i = 1;
     while (maxDivisors <= 501){
          inc++;
          tri += inc;
          div = 0;                    
          i = 2;
          while(i < 76576500){
               if(76576500 % i === 0){
                    div++;
                    console.log(tri +  " div count is: "+ div + " " + maxDivisors);
                    
                    if(div > maxDivisors){
                         maxDivisors = div;
                        if(maxDivisors >= 501){
                            break;
                        }
                    }
               }
               i++;
          }          
     }
     console.log("maxDivisors: " + maxDivisors);    
     console.log("finish");
