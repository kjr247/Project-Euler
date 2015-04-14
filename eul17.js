// When things are simple, why over complicate them?
// Why be lazy and having the computer do a job for you that will only
// take 5 mins to do in your own head, yet saves the user time in the end.
(function(){
      console.time("end time");
      //Letters from 1 - 9
      var sum1 = 3 + 3 + 5 + 4 + 4 + 3 + 5 + 5 + 4;

      //Letters from 10 - 19
      var sum2 = 3 + 6 + 6 + 8 + 8 + 7 + 7 + 9 + 8 + 8;

      //letters from 20 - 99
      var sum3 = 10*(6 + 6 + 5 + 5 + 5 + 7 + 6 + 6) + 8*36

      //letters from 100 - 999
      //1-9 occurring 100 times.
      var sum4 = 36*100;

      //1-99 occurring 9 times
      var sum5 = 9*854;

      //“hundred” occurring 9 times with 7 letters
      var sum6 = 7*9;

      //“hundred and” occurring 9*99 times with 10 letters
      var sum7 = 9*99*10;

      //“one thousand” with is 11 letters
      var totalSum = sum1+sum2+sum3+sum4+sum5+sum6+sum7+11;

      console.log("The answer is: "+totalSum);
      console.timeEnd("end time");
}())