// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Genetic Algorithm, Evolving Shakespeare

// A class to describe a population of virtual organisms
// In this case, each organism is just an instance of a DNA object
var total_enemies=6;
var plsdontfuckupjppppppppppppp=-1;
var flag_game_running=-1;
var split_var=640;
let savedcars=[];

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
class Population {
  constructor(p, m, num) {

    this.enemycar; //Array to holde the enemys
    this.population; // Array to hold the current population
    this.matingPool; // ArrayList which we will use for our "mating pool"
    this.generations = 0; // Number of generations
    this.finished = false; // Are we finished evolving?
    this.target = p; // Target phrase
    this.mutationRate = m; // Mutation rate
    this.perfectScore = 1;
    this.avg_fitness=-1;
    this.interval=0;
    this.best = "";
    this.enemycar=[]
    this.population = [];
    this.maxscore=0;
    for (let i = 0; i < num; i++) {
      this.population[i] = new car();
    }
    this.matingPool = [];
    this.car_left=num;
    this.avg_score=0;
    this.calcFitness();
  }

  // Fill our fitness array with a value for every member of the population
  calcFitness() {
    
      let val;
      
      val=Math.round(split_var/(total_enemies));
      
      var canvas=createCanvas(500, 700);
      canvas.parent('road');
      canvas.position(0, 0, 'fixed');
      next_y_pos_car=0;
      for(let i=0;i<total_enemies;i++)
        this.enemycar[i]=new enemy_car(val);
      
     
      
      this.interval=setInterval(this.frame1.bind(this),   5);
  

  //var id1 = setInterval(this.frame1, 5);
  

}
frame1(){

        background('lightgrey'); 
        // if (pos1 == 630) {
        //     pos1=0;
        //   elem1 .style.top = pos1 + "px"; 
        //   } else {
        //     pos1++; 
        //     elem1.style.top = pos1 + "px"; 
             
        //   }
        // if (pos2 == 630) {
        //     pos2=0;
        //   elem2.style.top = pos2 + "px"; 
        //   } else {
        //     pos2++; 
        //     elem2.style.top = pos2 + "px"; 
             
        //   }
        // if (pos3 == 630) {
        //     pos3=0;
        //   elem3.style.top = pos3 + "px"; 
        //   } else {
        //     pos3++; 
        //     elem3.style.top = pos3 + "px"; 
             
        //   }
        
       
        for(let i=0;i<total_enemies;i++)
        {
          var ret=this.enemycar[i].update();
          if(ret)
          {
              for (let i = 0; i < this.population.length; i++) 
              {
                  if(this.population[i].alive())
                  {
                    this.population[i].incscore();
                    //enem1.style.left,enem2.style.left,enem3.style.left,enem4.style.left,enem1.style.top,enem2.style.top,enem3.style.top,enem4.style.top
                  }
                
              }
          }
          this.enemycar[i].show();
        }
        let cargoneoffscreen=0;
        for (let i = 0; i < this.population.length; i++) 
        {
            if(this.population[i].alive())
            {
              cargoneoffscreen=this.predict(this.population[i].getX(),this.population[i].getY(),i);
              this.maxscore=Math.max(this.population[i].score,this.maxscore)
              if(cargoneoffscreen)
              {
                  this.population[i].notactive();
                  savedcars.push(this.population[i]); 
                  //window.alert('gone');
              }
              //enem1.style.left,enem2.style.left,enem3.style.left,enem4.style.left,enem1.style.top,enem2.style.top,enem3.style.top,enem4.style.top
            }
          
        }


         let flag=0;
        
        for(let i = 0; i < this.population.length; i++)
        {
            if(this.population[i].alive())
            {
              flag=1;
              //console.log(i);
              //console.log("alive");
              this.population[i].show();
            }
        }
        //console.log(this.population[0].alive());
        if(flag==0)
        {
          //window.alert('finished');
          //window.alert(savedcars.length);
          plsdontfuckupjppppppppppppp=1;
          clearInterval(this.interval);
          //displayInfo();
        }
        for(let i=0;i<this.population.length;i++)
        {
            if(this.population[i].alive())
            {
              let al=1;
              for(let j=0;j<total_enemies;j++)
              {

                if(this.enemycar[j].hit(this.population[i].x,this.population[i].y))
                  al=0;
              }
              if(al==0)
              {
                this.population[i].notactive();
                savedcars.push(this.population[i]);
              }
            }
        }


       
    //some code
  }
nextGeneration() {
  plsdontfuckupjppppppppppppp=-1;
  console.log('next generation');
  this.calculateFitness();
  //console.log('maxscore');
  //console.log(savedcars[savedcars.length-1].score);
  for(let i=0;i<this.population.length;i++)
  {
    this.population[i]=this.pickOne();
  }
  // let k=0;
  // for (let i = 0; i < 5; i++) {
  //   for(let j =200;j<250;j++)
  //     {
  //       let child=new car(savedcars[j].brain);
  //     child.mutate();
  //     this.population[k]=child;
  //     k++;
  //     }
  //   //console.log(this.population[i].brain.weights_ho);
  // }
  this.generations++; // Number of generations
    this.finished = false; // Are we finished evolving?
    // this.target = p; // Target phrase
    // this.mutationRate = m; // Mutation rate
    // this.perfectScore = 1;
    this.avg_fitness=-1;
    this.interval=0;
    this.avg_score=0;
    
    
    this.maxscore=0;
  // for (let i = 0; i < this.population.length; i++) {
  //   savedcars[i].dispose();
  // }
  savedcars = [];
  //window.alert(savedcars.length);
}

pickOne() {
  let index = 0;
  let r = random(1);
  while (r > 0) {
    r = r - savedcars[index].fitness;
    index++;
  }
  index--;
  // console.log('index');
  // console.log(index);
  // console.log(savedcars[index].brain.weights_ho);
  // console.log(savedcars[savedcars.length-1].fitness);
  // console.log(savedcars[savedcars.length-2].fitness);
  let newcar = savedcars[index];
  let child = new car(newcar.brain);
  child.mutate();
  //console.log(child.brain.weights_ho);  
  return child;
}

calculateFitness() {
  let sum = 0;
  for (let i=0;i<this.population.length;i++) {
    sum += savedcars[i].score;
  }
  if(sum == 0)
  {

    for (let i=0;i<this.population.length;i++) {
   savedcars[i].fitness= 1/this.population.length;
    }
  }
  else
  {
    for (let i=0;i<this.population.length;i++) {
   savedcars[i].fitness= savedcars[i].score/sum;
  }

  }
  
  //window.alert(savedcars[savedcars.length-1].score);
}
predict(x,y,carindex)
{


      // let tmp_array_for_sorting=[];
      
      // for(let i =0;i<total_enemies;i++)
      // {
      //   let tmp=[];
      //   tmp.push(this.enemycar[i].getx());
      //   tmp.push(this.enemycar[i].gety());
      //   tmp_array_for_sorting.push(tmp);
      //   // inputs[j]=this.enemycar[i].getx();
      //   // j++;
      //   // inputs[j]=this.enemycar[i].gety();
      //   // j++;
      // }
      // tmp_array_for_sorting.sort(function(a, b){return a[1] - b[1]});
      //console.log(tmp_array_for_sorting);
      let closesty=this.enemycar[0].gety();
      let index=0
      for(let i=0;i<total_enemies;i++)
      {
        if(this.enemycar[i].gety()>closesty)
        {
          closesty=this.enemycar[i].gety();
          index=i;
        }
      }
      let inputs = [];
      inputs[0]=x/500;
      inputs[1]=this.enemycar[index].top/500;
      inputs[2]=this.enemycar[index].bottom/500;
      inputs[3]=this.enemycar[index].y/640;
      //console.log(inputs);
      // inputs[3]=tmp_array_for_sorting[total_enemies-2][0];
      // inputs[4]=tmp_array_for_sorting[total_enemies-2][1];
      // if(carindex==0)
      //  {
      // console.log(inputs);
      //  }
      let output = this.population[carindex].brain.predict(inputs);

      //if (output[0] > output[1] && this.velocity >= 0) {
      let maxi=max(output[0],output[1]);
      //maxi=max(maxi,output[2]);
      let flag=0;
      if (output[0] == maxi) {
        flag=this.population[carindex].goleft();
      }
      else if(output[1] == maxi)
      {
        flag=this.population[carindex].goright();
      }
      return flag;
}

  getBest() {
    return this.maxscore;
  }

  // Compute the current "most fit" member of the population
  evaluate() {
    
  }

  isFinished() {
    return this.finished;
  }

  getGenerations() {
    return this.generations;
  }

  // Compute average fitness for the population
  getAverageFitness() {
     let total = 0;
    for (let i = 0; i < this.population.length; i++) {
      total += this.population[i].score;
    }
    if(plsdontfuckupjppppppppppppp!=-1)
    {
      
      this.avg_score= total / (this.population.length);
      return this.avg_score;
    }
    else 
    {

      return -1;
    }
  }

}


