

var next_y_pos_car=0;
var height=500;
var mini=height / 8;
var maxi=(4 / 6) * height;
class enemy_car
{
	constructor(diff) {
    this.spacing = 100;
    
    this.top = Math.round(this.getRandomArbitrary(mini,maxi ));
    this.bottom = height - (this.top + this.spacing);
    //console.log(this.top);
    //console.log('init');
    this.y = next_y_pos_car;
    next_y_pos_car+=diff;
    this.w = 5;
    this.x=this.top
    this.speed = 6;
  }



show() {

      fill(0,255,0);
      //rectMode(CORNER);
      rect(0, this.y, this.top, this.w);
      rect(height-this.bottom,this.y, this.bottom, this.w);
    
  }
getx()
{
  return this.x;
}
gety()
{
  return this.y;
}
update()
{
	var enem_pos_y1=this.y;
	if (enem_pos_y1 +2>= 670) 
	{
          enem_pos_y1=0;
          //enem1.style.top = enem_pos_y1 + "px"; 
          this.top = Math.round(this.getRandomArbitrary(mini,maxi));
          //console.log(this.top);
          this.bottom = height - (this.top + this.spacing);
	
          this.y=0;
          return 1;
          
    } 
    else 
    {
            enem_pos_y1=enem_pos_y1+2; 
            //enem1.style.top = enem_pos_y1 + "px"; 
    }
    this.y=enem_pos_y1;
    return 0;
}

hit(x,y)
{
	var posx_pc=x;
	var posy_pc=y;

//                   var posy_pc=this.population[i].getY();
  	
	// var posx_e1=this.x;
	// var posy_e1=this.y;
 //  	if(Math.abs(posx_e1 - posx_pc)<25 && Math.abs(posy_e1 - posy_pc)<40)
 //  	{
 //    	return 1;
 //    //plsdontfuckupjppppppppppppp=1
 //  	}
 //  	return 0;
    console.log('hit called');

    if (posx_pc< this.top || posx_pc+25 > height - this.bottom) {
      if ((this.y - posy_pc)>0) {
        
        console.log('hit');
        return 1;
      }
    }
    return 0;
	
}

getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
}

