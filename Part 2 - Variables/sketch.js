let farbe = 0;

function setup() {
  createCanvas(400,400)
  //Hintergrund zu Beginn erstellen
  background(200)
}

function draw() {
  
  //1. Zeichenwerkzeuge setzen
  //Wähle die Farbe
  //background(200);
  fill(farbe);
  stroke(255,0,0);
  
  //Wähle die Pinselbreite
  //strokeWeight(5);
  noStroke();
  
  //2. Zeichnen der Formen
  //circle(200,200,20,20)
    
  if(mouseIsPressed){
    circle(mouseX,mouseY,20,20)
  }
  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    farbe = 255;
  } else if (keyCode === RIGHT_ARROW) {
    farbe = 0;
  }
}