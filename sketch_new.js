// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Genetic Algorithm, Evolving Shakespeare

// Demonstration of using a genetic algorithm to perform a search

// setup()
//  # Step 1: The Population
//    # Create an empty population (an array or ArrayList)
//    # Fill it with DNA encoded objects (pick random values to start)

// draw()
//  # Step 1: Selection
//    # Create an empty mating pool (an empty ArrayList)
//    # For every member of the population, evaluate its fitness based on some criteria / function,
//      and add it to the mating pool in a manner consistant with its fitness, i.e. the more fit it
//      is the more times it appears in the mating pool, in order to be more likely picked for reproduction.

//  # Step 2: Reproduction Create a new empty population
//    # Fill the new population by executing the following steps:
//       1. Pick two "parent" objects from the mating pool.
//       2. Crossover -- create a "child" object by mating these two parents.
//       3. Mutation -- mutate the child's DNA based on a given probability.
//       4. Add the child object to the new population.
//    # Replace the old population with the new population
//
//   # Rinse and repeat


let target;
let popmax;
let mutationRate;
let population;

let bestPhrase;
let allPhrases;
let stats;
function keyPressed() {
  if (key === 'S') {
    stop;
  }
}

function setup() {
  //window.alert(5+7);
  // bestPhrase = createP("Best phrase:");
  // bestPhrase.position(10,10);
  // bestPhrase.class("best");

  // allPhrases = createP("All phrases:");
  // allPhrases.position(600, 10);
  // allPhrases.class("all");

  // stats = createP("Stats");
  // stats.position(10,200);
  // stats.class("stats");

  //createCanvas(640, 360);
  target = 1000;
  popmax = 250;
  mutationRate = 0.01;

  // let sketch = function(p) {
  //   p.setup = function(){
  //     p.createCanvas(1000, 1000);
  //     //p.background(0);
  //     p.fill(255,0,0);
  //     p.rect(250, 640, 25, 40);
  //   }
  //   };
  //   new p5(sketch, window.document.getElementById('road'));

  // Create a population with a target phrase, mutation rate, and population max
  population = new Population(target, mutationRate, popmax);
}
var id;
function draw() {
  // Generate mating pool
  id=setInterval(dntfuckup,1);
  noLoop();
}
function dntfuckup()
{
  var flag=population.getAverageFitness();
  if(flag!=-1)
  {
    clearInterval(id);
    checking();
    
  }
}
function checking()
{
  displayInfo();

  //population.naturalSelection();
  //Create next generation
  //population.generate();
  // Calculate fitness
  //window.alert("fun will be called");
  population.nextGeneration();
  population.calcFitness();

 // population.evaluate();
  //window.alert(5+7);
  // If we found the target phrase, stop
  
  if (population.isFinished()==false) {
    //println(millis()/1000.0);
    
    // checking();
    id=setInterval(dntfuckup,1);
  }
  else
  {
    //window.alert(5+7);
    //return ;
    //displayInfo();
    return ;
  }


  
}
function displayInfo() {
  // Display current status of population
  let answer = population.getBest();

  //bestPhrase.html("Best phrase:<br>" + answer);

  let statstext = "total generations:     " + population.getGenerations() + "<br>";
  statstext += "average score:       " + nf(population.getAverageFitness()) + "<br>";
  statstext += "Max score:      " + answer + "<br>";
  statstext += "total population:      " + popmax + "<br>";
  statstext += "mutation rate:         " + floor(mutationRate * 100) + "%";

   // stats.html(statstext);
  document.getElementById("info").innerHTML = statstext;
  // allPhrases.html("All phrases:<br>" + population.allPhrases())
}

