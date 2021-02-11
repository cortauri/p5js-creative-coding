//1.Erstelle Leinwand
function setup() {
createCanvas(400,600)
}


//2. Zeichne auf Leinwand
function draw() {
  
  //Jetzt Zeichenwerkzeuge setzen also...
  //Wähle die Farbe
  background(200); //Hintergrund der Leinwand ist grau
  fill(255); //Füllfarbe ist weiß
  stroke(255,0,0); //Linie aussen ist rot stroke(100% Rot, 0% Grün, 0% Blau)
  
  //Wähle die Pinselbreite
  strokeWeight(5);
  
  //Zeichnen der verschiedenen Formen mit Funktionen
  rect(0,0,200,200) //rect(x1,y1,x2,y2)
  circle(200,200,40) //circle(x,y,r)
  ellipse(240,240,50,100) //ellipse(x,y,w,h)
  line(400,400,200,200) //line(x1,y1,x2,y2)
  point(150,300) //Erstellt einen Punkt mit Pinselbreite strokeWeight(5)

  
}
