function setup() {
  //Erstelle Leinwand
  createCanvas(400, 400)
}

function draw() {
  
  //1. Zeichenwerkzeuge setzen
  //Wähle die Farbe
  background(200)
  fill(255)
  stroke(255,0,0)
  
  //Wähle die Pinselbreite
  strokeWeight(5)
  
  //2. Zeichnen der Formen
  rect(0,0,200,200)
  circle(200,200,40)
  ellipse(240,240,50,100)
  line(400,400,200,200)
  point(150,300)
  
}