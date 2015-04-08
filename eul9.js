(function eul9(){
   console.log("start");
   var a = 1;
   var b = 2;
   var c;
   var max = 1000;
   
   while(a < max){
      while(a < b && b < max){
         c = max - a - b; // promises that a + b + c = 1000
         if(c < b){ // if something goes wrong break
            break;
         }
         if(Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2)){
            console.log(a * b * c);
            return a*b*c;
         }
         b++;
      }
      a++;
      b = a + 1;
   }
}());