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
class car {
  constructor(brain) {
    this.y = 640;
    this.x = 250;
    this.active=1;
    this.score = 0;
    this.fitness = 0;
    if (brain) {
      this.brain = brain.copy();
    } else {
      var input_layer_node=4;
      var output_layer_node=2;
      var hidden_layer_node=7;
      //console.log(input_layer_node);
      //console.log(hidden_layer_node);
      //console.log(output_layer_node);
      this.brain = new NeuralNetwork(input_layer_node, hidden_layer_node, output_layer_node);
    }
  }



  show() {


      //stroke(255);
      //background('lightgrey');
      fill(255,0,0);
      rect(this.x,this.y, 25, 40);


    // let sketch = function(p) {
    // p.setup = function(){
    //   p.createCanvas(1000, 1000);
    //   //p.background(0);
    //   p.fill(255,0,0);
    //   p.rect(this.x, this.y, 25, 40);
    // }
    // };
    // new p5(sketch, window.document.getElementById('road'));

    
  }
  mutate() {
    this.brain.mutate(0.1);
  }
  // predict()
  // {
  //   let inputs = [];
  //   inputs[0] = this.y / height;
  //   inputs[1] = closest.top / height;
  //   inputs[2] = closest.bottom / height;
  //   inputs[3] = closest.x / width;
  //   inputs[4] = this.velocity / 10;
  //   let output = this.brain.predict(inputs);
  //   //if (output[0] > output[1] && this.velocity >= 0) {
  //   if (output[0] > output[1]) {
  //     this.up();
  //   }
  //     let tmp= Math.round(Math.random()*3);
  //     if(tmp==1)
  //     {
  //       if(this.x>0)
  //       {
  //         this.x-=10;
  //       }

  //     }
  //     if(tmp==2)
  //     {
  //       if(this.x<500)
  //       {
  //         this.x+=10;
  //       }
  //     }

  //     //let output = this.brain.predict(inputs);
  // }
  think(pipes) {
    // Find the closest pipe
    let closest = null;
    let closestD = Infinity;
    for (let i = 0; i < pipes.length; i++) {
      let d = pipes[i].x + pipes[i].w - this.x;
      if (d < closestD && d > 0) {
        closest = pipes[i];
        closestD = d;
      }
    }

    let inputs = [];
    inputs[0] = this.y / height;
    inputs[1] = closest.top / height;
    inputs[2] = closest.bottom / height;
    inputs[3] = closest.x / width;
    inputs[4] = this.velocity / 10;
    let output = this.brain.predict(inputs);
    //if (output[0] > output[1] && this.velocity >= 0) {
    if (output[0] > output[1]) {
      this.up();
    }
  }

  alive()
  {
    return this.active;
  }

  incscore()
  {
    this.score++;
  }

  getX()
  {
    return this.x;
  }

  getY()
  {
    return this.y;
  }
  goleft()
  {
    //console.log('left');
    if(this.x-10>0)
    {
          this.x-=10;
          return 0;
    }
    else
      return 1;
  }
  goright()
  {
    //console.log('right');
    if(this.x+35<500)
    {
          this.x+=10;
          return 0;
    }
    else
      return 1;
  }
  notactive()
  {
    this.active=0;
   // Converts character array to a String
  }
 


}