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
            0: {
                  u: "" ,
                  color: "white",
                  pred: "", 
                  d: "75",
                  fin: "" ,
                  adjChildren: { 
                        0: {                                          
                              leftchild: {value: "", index: "", color: "white"},                                    
                              rightchild: {value: "", index: "", color: "white"},                        
                        }
                  }
            }      
  }

  //populate the object!
      var count = 0;
      for( i in arrOfDigits ){
        G[count] = {
                        u: Number(arrOfDigits[i]),
                        color: "white",
                        pred: "nil",
                        d : Number(arrOfDigits[i]),
                        fin: "nil",
                        adjChildren: {}
                        }       
       count++;            
      }
      console.log(G);      
  function DFS(G){            
            var max = 0;
            var dist = 0;
            Adj(G);            
            for(var u in G){                            
                  if (G[u].color === "white"){
                        var dist = 0;
                        console.log("DFS call color is white for: " + G[u].u);
                        DFSVisit(G, u, max, dist);
                  }
            }
            console.log(G, "finished");
            return G;            
      }

      function DFSVisit(G, u, max, dist){          
        //G[u].color = "gray";   
            //console.log("set " + G[u].u + " to " + G[u].color);
            
            if(G[u].adjChildren.leftchild !== null && G[u].adjChildren.leftchild !== null){
                  console.log("Visit u: " + G[u].u);
                  //console.log("first and second childred: " + G..adjChildren.leftchild, G..adjChildren.rightchild);
                  for(var v = 0; v<=1; v++){   
                        console.log(G[u].adjChildren[v]);
                        console.log("v.index: " + G[u].adjChildren[v].index)
                        console.log(dist);
                        console.log("check to see if " + G[u].adjChildren[v].value + " is white!?!?!?" + G[u].adjChildren[v].color);
                        if(G[u].adjChildren[v].color === "white"){
                              console.log("white: call DFSVISIT with v: " + G[u].adjChildren[v].value);
                              //console.log(G[v].u);                                                
                              //G[u].pred = G[u].u; 
                              console.log("v: " + v);
                              DFSVisit(G, v, max, dist);
                        }
                        //G[u].adjChildren[v].color = "black";
                        //console.log(G[u].u,G[v].adjChildren.first);
                        //G[v].d += G[u].d
                        //G[u].fin = dist;
                        //findMax                              
                  }  
            }
    console.log("return from DFSVISIT");          
          return G;
  }

      function Adj(G){        
            var i = 0;
            var count = 0;
            for(var u = 0; u < 104; u++){ // while we still have children left    
                  for(var y = 1 ; y < 15; y++){
                        if(G[u].u === 0 || Number(TRIANGLE[y][y+2]) === 0){ break;}
                        for(var x = 0 ; x < 15; x++){
                              if(G[u].u === 0 || Number(TRIANGLE[y][x+1]) === 0){ break;}
                              //console.log(G[u].u,Number(TRIANGLE[y][x]),Number(TRIANGLE[y][x+1]));  
                              G[count].adjChildren = {                                          
                                  leftchild: {value: "", index: "", color: "white"},                                    
                                  rightchild: {value: "", index: "", color: "white"},
                              }
                              G[u].adjChildren.leftchild.value = Number(TRIANGLE[y][x]);
                              G[u].adjChildren.rightchild.value = Number(TRIANGLE[y][x+1]);   
                              G[u].adjChildren.leftchild.index = i+1; // set the indexes for reference
                              G[u].adjChildren.rightchild.index = i+2; 
                              var Arr = [];
                              Arr.push(Number(TRIANGLE[y][x]));
                              Arr.push(Number(TRIANGLE[y][x+1]));                  
                              //console.log(Number(TRIANGLE[y][x]) + " " + Number(TRIANGLE[y][x+1]) + " " + " ARE THE CHILDREN OF: " + G[u].u);          
                              u++;                              
                              i++; 
                              count++
                        }
                        i++;
                  }
                  
                  console.log(G);
            }
            return ;
      }


DFS(G);