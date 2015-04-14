(function eul18(){
      
      var stringer = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";      
      var arrOfDigits =  stringer.split(" ");

      
	var G = {
	      V:{
	            0: {u: "" ,color: "white", pred: "nil", d: "75", fin: "nil" },
                  1: {u: "" ,color: "white", pred: "nil", d: "75", fin: "nil" }
	      }
/*	      Adj: function Adj(u){ 
	      	var Arr = [];
	      	Arr.push(G.V[u*2+1]);
	      	Arr.push(G.V[u*2+2]);
	      	return Arr;
		}*/
	};
 


      for( i in arrOfDigits ){
            G.V[i] = {u: Number(arrOfDigits[i]) , color: "white", pred: "nil", d : Number(arrOfDigits[i]), fin: "nil" };            
      }
      console.log(G);
      var dist = 0;
      for( u in G.V){
            if (G.V[u].color === "white"){
                  //DFS-Visit(G, u);
                  console.log("now we should call DFS-Visit(G,u)");
            }
      }

	function DFS(G){

            

	}




      /*
	function DFS-Visit(){
	      var dist = dist + u.d
	      u.d = dist;
	      u.color = "gray";
	      for(v in G.Adj(u)){
	            if(v.color === "white"){
	                  v.pred = u;
	                  DFS-Visit(G, v);
	            }
	      }
	      u.color = "black";
	      dist = dist + u.d;
	      u.f = u.d;
	}*/
}())