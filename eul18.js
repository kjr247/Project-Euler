var stringer = "75 95 64 17 47 82 18 35 87 10 20 04 82 47 65 19 01 23 75 03 34 88 02 77 73 07 63 67 99 65 04 28 06 16 70 92 41 41 26 56 83 40 80 70 33 41 48 72 33 47 32 37 16 94 29 53 71 44 65 25 43 91 52 97 51 14 70 11 33 28 77 73 17 78 39 68 17 57 91 71 52 38 17 14 91 43 58 50 27 29 48 63 66 04 68 89 53 67 30 73 16 69 87 40 31 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";      

var TRIANGLE = [['75', '0'],
                ['95','64', '0'],
                ['17','47','82', '0'],
                ['18','35','87','10', '0'],
                ['20','04','82','47','65', '0'],
                ['19','01','23','75','03','34', '0'],
                ['88','02','77','73','07','63','67', '0'],
                ['99','65','04','28','06','16','70','92', '0'],
                ['41','41','26','56','83','40','80','70','33', '0'],
                ['41','48','72','33','47','32','37','16','94','29', '0'],
                ['53','71','44','65','25','43','91','52','97','51','14', '0'],
                ['70','11','33','28','77','73','17','78','39','68','17','57', '0'],
                ['91','71','52','38','17','14','91','43','58','50','27','29','48', '0'],
                ['63','66','04','68','89','53','67','30','73','16','69','87','40','31', '0'],
                ['04','62','98','27','23','09','70','98','73','93','38','53','60','04','23', '0']];


      var arrOfDigits =  stringer.split(" ");

	var G = {            
	      V:{
	            0: {
                        u: "" ,
                        color: "white",
                        pred: "", d: "75",
                        fin: "" ,
                        adjChildren: {
                              first: "",
                              second: "" 
                        } 
                  },
                  1: {
                        u: "" ,
                        color: "white",
                        pred: "", d: "75",
                        fin: "" ,
                        adjChildren: {
                              first: "",
                              second: "" 
                        } 
                  }
	      }
	}


	//populate the object!
      var count = 0;
      for( i in arrOfDigits ){
       G.V[count] = {u: Number(arrOfDigits[i]) , color: "white", pred: "nil", d : Number(arrOfDigits[i]), fin: "nil", adjChildren: { first: null, second: null } };
       count++;
      }
      console.log(G);      

	function DFS(G){            
            var dist = 0;
            Adj(G);            
            for(var u in G.V){                            
                  if (G.V[u].color === "white"){
                        //console.log("the if is now working");
                        DFSVisit(G, u, dist);
                  }
            }
            console.log(G, "finished");
            return G;            
      }

      function DFSVisit(G, u, dist){
            //console.log("we are in DFSVisit");            
            //alert("success we are in DFSVisit");
	      dist = dist + G.V[u].d;                        
	      G.V[u].d = dist;
	      G.V[u].color = "gray";   
            var first = G.V[u].adjChildren.first;
            var second = G.V[u].adjChildren.first;
            var Arr = [];
            Arr.push(first);
            Arr.push(second); 
	      for(var v in Arr){ 
                  //console.log(Adj(G));
	            if(G.V[v].color === "white"){
	                  G.V[v].pred = G.V[u].u;
	                  DFSVisit(G, v, dist);
	            }
	      }
	      u.color = "black";
	      dist = dist + G.V[u].d;
	      G.V[u].fin = dist;
          return G;
	}

      function Adj(G){	                        
            for(var u = 0; u < 104; u++){ // while we still have children left    
                  for(var y = 1 ; y < 15; y++){
                        if(G.V[u].u === 0 || Number(TRIANGLE[y][y+2]) === 0){ break;}
                        for(var x = 0 ; x < 15; x++){
                              if(G.V[u].u === 0 || Number(TRIANGLE[y][x+1]) === 0){ break;}
                              //console.log(G.V[u].u,Number(TRIANGLE[y][x]),Number(TRIANGLE[y][x+1]));

                              G.V[u].adjChildren.first = Number(TRIANGLE[y][x]);
                              G.V[u].adjChildren.second = Number(TRIANGLE[y][x+1]);   
                              //var Arr = [];
                              //Arr.push(Number(TRIANGLE[y][x]));
                              //Arr.push(Number(TRIANGLE[y][x+1]));                  
                              //console.log(Number(TRIANGLE[y][x]) + " " + Number(TRIANGLE[y][x+1]) + " " + " ARE THE CHILDREN OF: " + G.V[u].u);   
                              u++;                              
                        }
                  }                  
            }
            return /*Arr*/;
      }

DFS(G);