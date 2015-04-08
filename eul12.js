(function eul12(){
     var maxDivisor = 0;
     var divisors = 0;
     var overFiveHundred = 501; //will need to be greater than or equal to 501
     
     function createSeries(){
          var i = 0;
          var series = [];
          while(i <= overFiveHundred){
               series.push(i);
               i++;
          }
          console.log( "series: " + series);
          return series;
     }
     
     function createTriangles(series){
          var tri = 0;
          var trianlges = [];
          while(i < series.length){
               tri += series[i];
               i++;
          }
          triangles.push(tri);
          console.log("triangles: " + triangles);
          return triangles;
     }
     
     function findMaxDivisors(){
          
     }
     
     console.log("maxDivisors: " + maxDivisors);
     return maxDivisors;
}());