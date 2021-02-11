
//Objekte die wir benötigen Definieren
var ball; // 1 mal Ball
var hindernis = []; //mehrere Hindernisse, deswegen ein Array

//Constructor Function Ball mit seinen Eigenschaften erstellen
function Ball(){
  //Eigenschaften Größe, Lage des Balls und Physik
  this.size = 30; //Ballradius
  this.x = width/4; //Position X
  this.y = height/2; //Position Y
  this.gravity = .4; //Schwerkraft
  this.velocity = 0; //Anfängliche Beschleunigung 0
  this.lift = 10; //Kraft nach oben bei Tastendruck
  
  //Funktion zum zeichnen des Balls erstellen
  this.show = function(){
    fill (255); //er soll weiß sein
    noStroke(); //ohne Rand
    circle(this.x, this.y, this.size); //an/in der oben definierten Stelle und Größe
  }
  
  //Funktion die den Ball nach unten zieht
  this.update = function(){
    this.velocity += this.gravity; //addieren der Gravitation zur Beschleunigung
    this.velocity * .9; //Beschleunigung etwas begrenzen
    this.y += this.velocity; //Y Postion des Balls um Gravitationsbeschleunigung addieren
    
    //Grenzen des Spielbereichs nach oben und unten festlegen
    
    // Y Nicht größer als Höhe (untere Kante) der Leinwand
    if (this.y > height) {
      this.y = height; //Postion fixieren bei height (untere Kante der Leinwand)
      this.velocity = 0; //Beschleunigung auf 0
    }
    // Y nicht kleiner als obere Kante der Leinwand
    if (this.y < 0) {
      this.y = 0; //Position fixieren bei 0
      this.velocity = 0; //Beschleunigung auf 0
    }
    
 
  }
  
  //Ball nach oben bewegen
  this.up = function(){
    this.velocity -= this.lift; //Lift-Kraft wird entgegen der Gravitationsbeschleunigung -= subtrahiert Wert davon
  }
  
}
//Constructor Function Hindernis
function Hindernis() {

  this.top = random(height/2); //Oberer Punkt Rechteck zwischen 0 und halber Höhe der Leinwand
  this.bottom = random(height/2.3); //Unterer Punkt Rechteck zwischen und 0 etwas wenige als die Hälfte der Leinwand, damit der Freiraum zwischen den Hindernissen nicht zu klein wird
  this.x = width; //Position obere linke Ecke = Leinwandbreite, Hindernis startet ausserhalb der Leinwand
  this.w = 40; //Breite des Hindernis
  this.speed = 8; //Geschwindigkeit des Hindernis
  this.warning = false; //für spätere Treffererkennung
  
  //Erkenne Treffer wenn Ball x,y in Höhe und Breite Hindernis trifft
  this.hit = function(ball) {
    if (ball.y < this.top || ball.y > height - this.bottom){
      if (ball.x > this.x && ball.x < this.x + this.w) {
        this.warning = true; //Wert wird wahr
        return true;
      }
    }
    this.warning = false; //Wert wird falsch
    return false;
  };
  
  //Zeichne das Hindernis
  this.show = function() {
    fill(0);
    if (this.warning) { //wenn warning wert auf "wahr" ist, also bei Treffer
      fill(255, 0, 0); //Färbe das hindernis rot
    }
    rect(this.x, 0, this.w, this.top); //oberes Hindernis zeichnen
    rect(this.x, height-this.bottom, this.w, this.bottom); //unteres Hindernis zeichnen
  };
  
  //Bewege das Hindernis
  this.update = function(){
    this.x -= this.speed; //addiere Geschwindigkeit zu X Wert für Bewegeung des Hindernis
  };
  
  //Funktion um zu erkennen ob Objekt noch im Anzeigebereich ist
  this.offscreen = function(){
    if (this.x < -this.w) {
      return true; } else {return false;} //Wenn Objekt die Leinwand nach links verlässt "wahr" ansonsten "falsch"
  };
}

//Erstelle Leinwand und definiere Objekte
function setup() {
  createCanvas(600, 600); //600x600px Leinwand erstellen
  ball = new Ball(); //Ball erstellen
  hindernis.push(new Hindernis()); //1. Hindernis erstellen .push() fügt Objekt zu Array hinzu
}

//Zeichnen
function draw() {
  background(200); //Hintergundfarbe der Leinwand
  
  
  //1. Hindernisse erstellen und bewegen
  //nach je 20 Frames Hindernis zu Array hinzufügen
  if (frameCount % 20 == 0) { //Mod 20 nach jedem Frame der durch 20 Teilbar ist
    hindernis.push(new Hindernis()); //füge neues Hindernis zu Array hinzu
  }
  
  //Rückwärts durch das Array um später das erste welches die Anzeige verlässt zu löschen
  for (i=hindernis.length-1; i >= 0; i--) {
    hindernis[i].update(); //Update ausführen für Bewegung des Hindernis
    hindernis[i].show(); //Show zeichnet das Hindernis
    
    //Lösche Hindernis wieder aus dem Array wenn aus der Anzeige raus
    if (hindernis[i].offscreen()) {
      hindernis.splice(i, 1);
    }
  }
  
  //2. Zeichne Ball
  ball.show();
  //3. Lass den Ball nach unten fallen
  ball.update();
  

}

// Bei drücken der Maustaste Ball nach oben liften
function mousePressed() {
  ball.up(); //Funktion für lift :)
}