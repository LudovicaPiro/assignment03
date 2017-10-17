function setup() {createCanvas(500,500);
						background(31, 10, 75);
						angleMode(DEGREES);
						frameRate(3);
  
}

function modulo() {		//translate(width/2, height/2);
						rotate(30); 
						for (var i = 0; i < 360; i+=60)
						{
							push();	
							var colore="#f0ffff";
							if(random()<0.5) {colore="#f69a5f";}
							fill(colore);
							noStroke();
							rotate(i);
							triangle(-8, 0, 8, 0, 0, 16*sin(60)+0 );
							pop();

						}
					}


function draw() { 		for(var x=12; x<width; x+=40)
 								 {
 								 	for(var y=12; y<width; y+=40)
 								 	{
 								 		push();
 								 		translate(x,y);
 								 		modulo();
 								 		pop();

 								 	}
 								}

 								for( x=-12; x<width; x+=40)
 								 {
 								 	for( y=-12; y<width; y+=40)
 								 	{
 								 		push();
 								 		translate(x,y);
 								 		modulo();
 								 		pop();
 								 	}
 								}

  
}