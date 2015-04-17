//KyleRebstock
//The console.logs may explain the path a bit better. Just uncomment and view the values in the JS console.
//For some odd reason this runs fine in jsfiddle.com but not on codepen.io but this is where I wrote it so have fun.


console.time("thing");
var num = [[75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [95,64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [17,47,82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [18,35,87,10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [20,04,82,47,65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [19,01,23,75,03,34, 0, 0, 0, 0, 0, 0, 0, 0, 0],
           [88,02,77,73,07,63,67, 0, 0, 0, 0, 0, 0, 0, 0],
           [99,65,04,28,06,16,70,92, 0, 0, 0, 0, 0, 0, 0],
           [41,41,26,56,83,40,80,70,33, 0, 0, 0, 0, 0 ,0],
           [41,48,72,33,47,32,37,16,94,29, 0, 0, 0, 0 ,0],
           [53,71,44,65,25,43,91,52,97,51,14, 0, 0, 0, 0],
           [70,11,33,28,77,73,17,78,39,68,17,57, 0, 0, 0],
           [91,71,52,38,17,14,91,43,58,50,27,29,48, 0, 0],
           [63,66,04,68,89,53,67,30,73,16,69,87,40,31, 0],
           [04,62,98,27,23,09,70,98,73,93,38,53,60,04,23]];


var lines = num.length-2;
//Add all the sums from the bottom up, only add the max value
for (var i = lines; i >= 0; i--) {
    for (var j = 0; j <= i; j++) {
        //console.log("to check: " + num[i][j],num[i+1][j], num[i+1][j+1]); 
        num[i][j] += Math.max(num[i+1][j], num[i+1][j+1]);
        //console.log(num[i][j],num[i+1][j], num[i+1][j+1]);
    }
}

console.log("The answer is: "+num[0][0]);
console.timeEnd("thing");