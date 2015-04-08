 // largest palindrome made from the product of two 3-digit numbers
 // Kyle Rebstock

var str = 99;
var stri = "";
var palins = [];

var reverse_string = function(str){
  var stri = "";
  numToString = str.toString();
  //console.log(numToString.length + " This is the alen str.length");
  for (var i = numToString ; i > 0 ; i--){
    stri += numToString.charAt(i-1)
  }
  return stri;
}

var palindrome = function(str){
    //console.log("reverse is: " + reverse_string(str) + "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
  if(str == reverse_string(str)){
     console.log("palindrome is: " + str + "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    palins.push(str);     
  }
}


function parsePalin(str){
   do{      
     for(i = str; i >= 90; i--){        
       for(a = str; a >= 91; a--){         
         b = a * i;  
         console.log("b: " + b + " a: " + a + " i: " + i);
         palindrome(b);
       }  
     }
   }while(palindrome(b));
   console.log(palins);
}

parsePalin(99);