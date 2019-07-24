// Rover Object Goes Here
// ======================

// create moveBackward
// create MATRICE
// create OBSTACLES
// create another ROVER


mars = [
  [null,null,null,null,null,null,null,null,null, null],
  [null,null,null,null,null,null,null,null,null, null],
  [null,null,null,null,null,null,null,null,null, null],
  [null,null,null,null,null,null,null,null,null, null],
  [null,null,null,null,null,null,null,null,null, null],
  [null,null,null,null,null,null,null,null,null, null],
  [null,null,null,null,null,null,null,null,null, null],
  [null,null,null,null,null,null,null,null,null, null],
  [null,null,null,null,null,null,null,null,null, null],
  [null,null,null,null,null,null,null,null,null, null]
  ]
  
  
  function gameRover(){
  
  count_false=0;  
    
  for (x=0;x<10;x++){
    var elements = document.getElementsByClassName("x"+x);
    for (var i in elements) {
    if (elements.hasOwnProperty(i)) {
      elements[i].style.background = 'transparent';
    }
  }
  
  
  
  }
  
  
      console.log("it starts!");
      var rover = {direction:'n', position:{x:0,y:0}, travellog:{}};
      
      
      /*var pos_x = prompt("starting position x axis : ");*/
      
      var pos_x = document.getElementById("val_x").value;
  
      if (pos_x == ""){
        pos_x = 4;
        alert("default value x = 4");
      }
      
      // var pos_y = prompt("starting position y axis : ")
      var pos_y = document.getElementById("val_y").value;
  
      if (pos_y == ""){
        pos_y = 4;
        alert("default value y = 4");
      }
      
      rover.position["x"] = pos_x;
      rover.position["y"] = pos_y;
      start_x=rover.position["x"]
      start_y=rover.position["y"]
      // var choix2 = prompt("Séquence aléatoire : 'a' | Séquence écrite : 'b'");
      
      var commands = document.getElementById("val_z").value;
      
      if (commands == ""){
          commands = randomSequence();
      }
  
      var debut_x = 'x'+rover.position["x"];
      var debut_y = 'y'+rover.position["y"];
  
  
      var html_start = document.getElementById(debut_x+debut_y);
  
     
  
      
      // rover.position["x"] = pos_x;
      // rover.position["y"] = pos_y;
      
      // mars[pos_x][pos_y] = "R";
      // console.log(mars);
      
      console.log("sequence : " + commands);
      console.log("length commands = " + commands.length);
      
      
      
      for (i = 0 ; i < commands.length ; i ++){
        meta(rover, commands[i]);
        console.log(commands[i]);
        rover.travellog[i] = rover.position["x"] + " : " + rover.position["y"];
        var color = "x"+rover.position["x"]+"y"+rover.position["y"];
        var chemin = document.getElementById(color);
        chemin.style.background="blue";
        mars[rover.position["y"]][rover.position["x"]] = "****";
  
      }
      
      console.log(rover.position);
      console.log(rover.travellog);
      var final_x = rover.position["x"];
      var final_y = rover.position["y"];
  
  
      var class1 = 'x'+final_x;
      var class2 = 'y'+final_y;
      var src_final = class1+class2;
  
      var html_final = document.getElementById(src_final);
  
      html_start.style.background="yellow";
  
      html_final.style.background="green";
      
  
      var text = "";
  
      for (var position in rover.travellog){
        text = text + '<p id="p'+position+ '"' + 'style="grid-area:p'+position+';">'+'#' + position + ' action leads to ' + rover.travellog[position] + '</p>';
      }
  
  
      result=document.getElementById("result");
      result.innerHTML=text;
      mars[start_y][start_x] = "INIT";
      mars[rover.position["y"]][rover.position["x"]] = "END";
      console.log(mars);
  
    alert(count_false + " illegal moves ignored ;\)");
      
  
  
      
       
      }
      
      
      
      function meta(rover, order){
        console.log(order);
        switch (order){
          case "r":
            turnRight(rover);
            break;
      
          case "f":
            moveForward(rover);
            break;
      
          case "l":
            turnLeft(rover);
            break;
          
          case "b":
            moveBackward(rover);
            break;
  
          default:
            console.log("ILLEGAL MOVE – IGNORED")
            count_false += 1;
        }
      }
      
      function turnLeft(rover){
        
        switch (rover.direction){
      
          case "n":
            console.log("%c Rover now faces West: ", "background:white; color:black;");
            console.log("   %c| < |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
       
        
            
            rover.direction="w";
            break;
      
          case "w":
            console.log("%c Rover now faces South: ", "background:white; color:black;");
            console.log("   %c| V |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
          
            
            rover.direction="s";
            break;
      
          case "s":
            console.log("%c Rover now faces East: ", "background:white; color:black;");
            console.log("   %c| > |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
        
            
            rover.direction="e";
            break;
      
          case "e":
            console.log("%c Rover now faces North: ", "background:white; color:black;");
            console.log("   %c| ^ |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
          
            
            rover.direction="n";
            break;
        }
        return rover;
      }
      
      function turnRight(rover){
        switch (rover.direction){
          case "n":
            console.log("%c Rover now faces East: ", "background:white; color:black;");
            console.log("   %c| > |","background: #rrr; color: #bada55","\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
         
            
            
            rover.direction="e";
            break;
      
          case "e":
            console.log("%c Rover now faces South : ", "background:white; color:black;");
            console.log("   %c| V |","background: #rrr; color: #bada55","\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
          
            
            rover.direction="s";
            break;
      
          case "s":
            console.log("%c Rover now faces West : ", "background:white; color:black;");
            console.log("   %c| < |","background: #rrr; color: #bada55","\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
           
            
            rover.direction ="w";
            break;
      
          case "w":
            console.log("%c Rover now faces North : ", "background:white; color:black;");
            console.log("   %c| ^ |","background: #rrr; color: #bada55","\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
           
            
            rover.direction = "n";
            break;
        }
        return rover;
      }
      
      function moveForward(rover){
      
        switch (rover.direction){
      
          case "n":
      
            if (rover.position["y"] == 0){
              console.log("%c| ^ |","background: red; color: white;"," : Illegal move, this planet is not round, you're gonna fall!");
         
              
              break;
      
            } else {
      
            console.log("%c Rover moves forward : ", "background:white; color:black;");
            rover.position["y"] --;
            console.log("   %c| ^ |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
            
           
            
            break;
      
            }
            
          case "e":
            if (rover.position["x"]== 9){
              console.log("%c| > |","background: red; color: white;"," : Illegal move, this planet is not round, you're gonna fall!");
        
              
              break;
      
            } else {
      
            console.log("%c Rover moves forward : ", "background:white; color:black;");
            rover.position["x"] ++;
            console.log("   %c| > |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
            
  
            break;
      
            }
      
          case "s":
      
            if (rover.position["y"]==9){
              console.log("%c| v |","background: red; color: white;"," : Illegal move, this planet is not round, you're gonna fall!");
           
              
              break;
            
            } else {
        
            console.log("%c Rover moves forward : ", "background:white; color:black;");
            rover.position["y"] ++;
            console.log("   %c| v |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
            
      
            
            break;
      
            }
            
          case "w":
      
          if (rover.position["x"]== 0){
            console.log("%c| < |","background: red; color: white;"," : Illegal move, this planet is not round, you're gonna fall!");
        
            
            break;
         
          } else {
            console.log("%c Rover moves forward : ", "background:white; color:black;");
            rover.position["x"] --;
            console.log("   %c| < |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
            
           
            
            break;
      
          }
      
        } 
        return rover;
      }
  
      function moveBackward(rover){
      
        switch (rover.direction){
      
          case "n":
      
            if (rover.position["y"] == 9){
              console.log("%c| ^ |","background: red; color: white;"," : Illegal move, this planet is not round, you're gonna fall!");
         
              
              break;
      
            } else {
      
            console.log("%c Rover moves backward : ", "background:white; color:black;");
            rover.position["y"] ++;
            console.log("   %c| ^ |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
            
           
            
            break;
      
            }
            
          case "e":
            if (rover.position["x"]== 0){
              console.log("%c| > |","background: red; color: white;"," : Illegal move, this planet is not round, you're gonna fall!");
        
              
              break;
      
            } else {
      
            console.log("%c Rover moves backward : ", "background:white; color:black;");
            rover.position["x"] --;
            console.log("   %c| > |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
            
  
            break;
      
            }
      
          case "s":
      
            if (rover.position["y"]==0){
              console.log("%c| v |","background: red; color: white;"," : Illegal move, this planet is not round, you're gonna fall!");
           
              
              break;
            
            } else {
        
            console.log("%c Rover moves backward : ", "background:white; color:black;");
            rover.position["y"] --;
            console.log("   %c| v |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
            
      
            
            break;
      
            }
            
          case "w":
      
          if (rover.position["x"]== 9){
            console.log("%c| < |","background: red; color: white;"," : Illegal move, this planet is not round, you're gonna fall!");
        
            
            break;
         
          } else {
            console.log("%c Rover moves backward : ", "background:white; color:black;");
            rover.position["x"] ++;
            console.log("   %c| < |","background: #rrr; color: #bada55", "\n" + "   Position = x : " + rover.position["x"] + ", y : " + rover.position["y"]);
            
           
            
            break;
      
          }
      
        } 
        return rover;
      }
      
      
      function randomSequence(){
        //max = prompt("combien de mouvements ? ");
        max = 17;
        var sq = "";
        for (i = 0 ; i < max ; i ++){
          var nb = Math.floor(Math.random()*3);
          console.log(nb);
          const list = ["l","r","f"];
          sq = sq + (list[nb]);
          }
        console.log(sq);
        return sq;
      }
      
      
  