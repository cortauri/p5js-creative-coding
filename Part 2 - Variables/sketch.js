//1.Variable für Farbe definieren
let farbe = 0;
//2. Hier Setup was zum Anfang einmal ausgeführt wird
function setup() {
  //Leinwand erstellen 400x400px
  createCanvas(400,400);
  //Hintergrundfarbe der Leinwand setzen
  background(200); //200 ist die Kurzform für background(200,200,200);
}

//3. Zeichnen
function draw() {
    
  //1. Zeichenwerkzeuge setzen
    //Wähle die Füllfarbe Wert 0 aus Variable farbe
    fill(farbe);

    //Keinen Rand zeichnen
    noStroke();
  
    //Wenn Maustaste gedrückt wird
    if(mouseIsPressed){
      //Zeichne einen Kreis an der Position der Maus mit Radius von 20px
      //mouseX und mouseY sind fertige Variablen aus der P5js Library
      circle(mouseX,mouseY,20);
    }
  
} // Ende der Funktion draw (Ende der Schleife in der gezeichnet wird)


// ändern der Werte der Variable farbe durch druck der Pfeiltasten links oder rechts
function keyPressed() {
  //Wenn linke Pfeiltaste LEFT_ARROW ist eine Konstante aus P5js
  if (keyCode === LEFT_ARROW) {
    //setze Farbe auf Wert 255
    farbe = 255;
  //oder wenn rechte Pfeiltaste RIGHT_ARROW gedrückt wird
  } else if (keyCode === RIGHT_ARROW) {
    //setze Farbe auf Wert 0
    farbe = 0;
  }
}