var oneMillion = 1000000;
var startingNum = 13;
var temp = 0;
var one = 1;
var chain = 0;
var longestChain = 0;



while(startingNum < oneMillion){     
     temp = startingNum;     
     chain = 0;
     //if even divide by 2
     while(temp >= one){
          if(temp === 1){
               break;
          }
          if(temp % 2 === 0){
               temp = temp / 2;
          } else {
               temp = 3 * temp + 1;
          }          
          chain++;
          if(chain >= longestChain && temp <= 1){
               longestChain = chain;
               console.log("longest chain: " + longestChain + " current starting number: " + startingNum);
          }
          
     }
     if(startingNum === oneMillion){
          console.log("finish starting number: " + startingNum);
          break;
     }
     startingNum++;
}