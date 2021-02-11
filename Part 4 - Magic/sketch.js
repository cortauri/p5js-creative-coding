//1.Erstelle Leinwand
function setup() {

  createCanvas(500, 500)
  background(0) //Hintergrund Schwarz
  
}

//2. Zeichne auf Leinwand
function draw() {
  
  //Position der Maus von 0 bis Breite der Leinwand übersetzen in 0 bis 255
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, width, 0, 255);
  let b = map(mouseX-mouseY, 0, 1000, 0, 255);
 
  //Farbe RGB ändern sich mit Position der Maus
  stroke(r,g,b);
  
  //Linie Zeichnen von Maus Position bis Mittelpunkt der Leinwand
  line(mouseX, mouseY, height/2, width/2)

}