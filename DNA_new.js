// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Genetic Algorithm, Evolving Shakespeare

// A class to describe a pseudo-DNA, i.e. genotype
//   Here, a virtual organism's DNA is an array of character.
//   Functionality:
//      -- convert DNA into a string
//      -- calculate DNA's "fitness"
//      -- mate DNA with another set of DNA
//      -- mutate DNA

function newChar() {
  let c = floor(random(63, 122));
  if (c === 63) c = 32;
  if (c === 64) c = 46;

  return String.fromCharCode(c);
}

// Constructor (makes a random DNA)
class DNA {
  constructor(num) {
    // The genetic sequence
    this.genes = [];
    this.fitness = 0;
    for (let i = 0; i < num; i++) {
      this.genes[i] = newChar(); // Pick from range of chars
    }
  }

  // Converts character array to a String
  getPhrase() {
    return this.genes.join("");
  }


  // Fitness function (returns floating point % of "correct" characters)
  calcFitness(target) 
  {
    let score = 0;
    for (let i = 0; i < this.genes.length; i++) {
      if (this.genes[i] == target.charAt(i)) {
        score++;
      }
    }
     
    this.fitness=score/target.length

    var flag_game_running;
    flag_game_running=1;

    var elem1 = document.getElementById("animate1");   
    var pos1 = 0;
    
    var elem2 = document.getElementById("animate2");   
    var pos2 = 210;
    
    var elem3 = document.getElementById("animate3");   
    var pos3 = 420;
    
    var enem1 = document.getElementById("enemy_car1");   
    var enem_pos_y1 = 0;
    
    var enem2 = document.getElementById("enemy_car2");   
    var enem_pos_y2 = 110;
    
    var enem3 = document.getElementById("enemy_car3");   
    var enem_pos_y3 = 215;
    
    var enem4 = document.getElementById("enemy_car4");   
    var enem_pos_y4 = 320;
    
    enem1.style.left= Math.random()*475+"px";
    enem2.style.left= Math.random()*475+"px";
    enem3.style.left= Math.random()*475+"px";
    enem4.style.left= Math.random()*475+"px";
    enem1.style.top= enem_pos_y1+"px";
    enem2.style.top= enem_pos_y2+"px";
    enem3.style.top= enem_pos_y3+"px";
    enem4.style.top= enem_pos_y4+"px";
    enem1.style.height="40px";
    enem2.style.height="40px";
    enem3.style.height="40px";
    enem4.style.height="40px";
    
    var player_score=0;
    var curr_x_pos=250;
    var curr_y_pos=640;
    var player_car=document.getElementById("car");
    player_car.style.left = curr_x_pos + "px"; 
    player_car.style.top = curr_y_pos+"px";
    player_car.style.height="40px";
     var str = 'No key pressed'; 
    document.onkeydown = function(e) { 
              switch (e.keyCode) { 
                  case 37: 
                      str = 'Left Key pressed!'; 
                      if(flag_game_running==0)
                        break;
                      if(curr_x_pos-10>0)
                      {
                        curr_x_pos-=10;
                        player_car.style.left = curr_x_pos + "px"; 
                      }
                      break; 
                  case 38: 
                      str = 'Up Key pressed!'; 
                      if(flag_game_running==0)
                        break;
                      if(curr_y_pos-10>0)
                      {
                        curr_y_pos-=10;
                        player_car.style.top = curr_y_pos + "px"; 
                      }
                      break; 
                  case 39: 
                      str = 'Right Key pressed!'; 
                      if(flag_game_running==0)
                        break;
                      if(curr_x_pos+10<475)
                      {
                        curr_x_pos+=10;
                        player_car.style.left = curr_x_pos+"px";
                      }
                      break; 
                  case 40: 
                      str = 'Down Key pressed!'; 
                      if(flag_game_running==0)
                        break;
                      if(curr_y_pos+10<640)
                      {
                        curr_y_pos+=10;
                        player_car.style.top = curr_y_pos+"px";
                      }
                      break; 
              } 
        
    };
    
    var id1 = setInterval(frame1, 5);
    function frame1() 
    {
      //window.alert(5+100);
        if (pos1 == 630) {
          pos1=0;
        elem1.style.top = pos1 + "px"; 
        } else {
          pos1++; 
          elem1.style.top = pos1 + "px"; 
           
        }
      if (pos2 == 630) {
          pos2=0;
        elem2.style.top = pos2 + "px"; 
        } else {
          pos2++; 
          elem2.style.top = pos2 + "px"; 
           
        }
      if (pos3 == 630) {
          pos3=0;
        elem3.style.top = pos3 + "px"; 
        } else {
          pos3++; 
          elem3.style.top = pos3 + "px"; 
           
        }
      
      
      
      if (enem_pos_y1 +2>= 630) {
          enem_pos_y1=0;
        enem1.style.top = enem_pos_y1 + "px"; 
        enem1.style.left= Math.random()*475+"px";
        player_score++;
        
        } else {
          enem_pos_y1=enem_pos_y1+2; 
          enem1.style.top = enem_pos_y1 + "px"; 
           
        }
      if (enem_pos_y2 +2>= 630) {
          enem_pos_y2=0;
        enem2.style.top = enem_pos_y2 + "px"; 
        enem2.style.left= Math.random()*475+"px";
        player_score++;
        } else {
          enem_pos_y2=enem_pos_y2+2; 
          enem2.style.top = enem_pos_y2 + "px"; 
           
        }
      if (enem_pos_y3 +2>= 630) {
          enem_pos_y3=0;
        enem3.style.top = enem_pos_y3 + "px"; 
        enem3.style.left= Math.random()*475+"px";
        player_score++;
        } else {
          enem_pos_y3=enem_pos_y3+2; 
          enem3.style.top = enem_pos_y3 + "px"; 
           
        }
      if (enem_pos_y4 +2>= 630) {
          enem_pos_y4=0;
        enem4.style.top = enem_pos_y4 + "px"; 
        enem4.style.left= Math.random()*475+"px";
        player_score++;
        } else {
          enem_pos_y4=enem_pos_y4+2; 
          enem4.style.top = enem_pos_y4 + "px"; 
           
        }
      document.getElementById("sc").innerHTML=player_score;
      var player_car=document.getElementById("car");
      
      var posx_pc=parseInt(player_car.style.left, 10);
      var posx_e1=parseInt(enem1.style.left, 10);
      var posx_e2=parseInt(enem2.style.left, 10);
      var posx_e3=parseInt(enem3.style.left, 10);
      var posx_e4=parseInt(enem4.style.left, 10);
      
      var posy_pc=parseInt(player_car.style.top, 10);
      var posy_e1=parseInt(enem1.style.top, 10);
      var posy_e2=parseInt(enem2.style.top, 10);
      var posy_e3=parseInt(enem3.style.top, 10);
      var posy_e4=parseInt(enem4.style.top, 10);
      
      //window.alert(Math.abs(posx_e1 - posx_pc));
      if(Math.abs(posx_e1 - posx_pc)<25 && Math.abs(posy_e1 - posy_pc)<40)
      {
        //window.alert(posx_e1 - posx_pc);
        clearInterval(id1);
        flag_game_running=0;
      }
      if(Math.abs(posx_e2 - posx_pc)<25 && Math.abs(posy_e2 - posy_pc)<40)
      {
        //window.alert(posx_e1 - posx_pc);
        clearInterval(id1);
        flag_game_running=0;
      }
      if(Math.abs(posx_e3 - posx_pc)<25 && Math.abs(posy_e3 - posy_pc)<40)
      {
        //window.alert(posx_e1 - posx_pc);
        clearInterval(id1);
        flag_game_running=0;
      }
      if(Math.abs(posx_e4 - posx_pc)<25 && Math.abs(posy_e4 - posy_pc)<40)
      {
        //window.alert(posx_e1 - posx_pc);
        clearInterval(id1);
        flag_game_running=0;
      }
      
    
    }
        
      
  }

  // Crossover
  crossover(partner) {
    // A new child
    let child = new DNA(this.genes.length);

    let midpoint = floor(random(this.genes.length)); // Pick a midpoint

    // Half from one, half from the other
    for (let i = 0; i < this.genes.length; i++) {
      if (i > midpoint) child.genes[i] = this.genes[i];
      else child.genes[i] = partner.genes[i];
    }
    return child;
  }

  // Based on a mutation probability, picks a new random character
  mutate(mutationRate) {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < mutationRate) {
        this.genes[i] = newChar();
      }
    }
  }
}