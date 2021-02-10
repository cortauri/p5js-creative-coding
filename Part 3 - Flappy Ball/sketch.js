
//Objekte
var ball;
var hindernis = [];

//Constructor Function Ball
function Ball(){
  //Eigenschaften Ball und Physik
  this.size = 30;
  this.x = width/4;
  this.y = height/2;
  this.gravity = .4;
  this.velocity = 0;
  this.lift = 10;
  
  //Zeichne den Ball
  this.show = function(){
    fill (255);
    noStroke();
    circle(this.x, this.y, this.size);
  }
  
  //Lass die Schwerkraft wirken + Grenzen
  this.update = function(){
    this.velocity += this.gravity;
    this.velocity * .9;
    this.y += this.velocity;
    
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
 
  }
  
  //Ball nach oben bewegen
  this.up = function(){
    this.velocity -= this.lift;
  }
  
}

//Constructor Function Hindernis
function Hindernis() {

  this.top = random(height/2);
  this.bottom = random(height/2.3);
  this.x = width;
  this.w = 40;
  this.speed = 8;
  this.warning = false;
  
  //Erkenne Treffer
  this.hit = function(ball) {
    if (ball.y < this.top || ball.y > height - this.bottom){
      if (ball.x > this.x && ball.x < this.x + this.w) {
        this.warning = true;
        return true;
      }
    }
    this.warning = false;
    return false;

  };
  
  //Zeichne das Hindernis
  this.show = function() {
    fill(255);
    if (this.warning) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  };
  
  //Bewege das Hindernis
  this.update = function(){
    this.x -= this.speed;
  };
  
  //Erkenne ob Objekt noch im Anzeigebereich
  this.offscreen = function(){
    if (this.x < -this.w) {
      return true; } else {return false;}
  };
}

//Setze Leinwand und definiere Objekte
function setup() {
  createCanvas(600, 600);
  ball = new Ball();
  hindernis.push(new Hindernis());
}

function draw() {
  background(200);
  
  //nach je 80 Frames Hindernis zu Array hinzufügen
  if (frameCount % 20 == 0) {
    hindernis.push(new Hindernis());
  }
  
  //Rückwärts durch das Array
  for (i=hindernis.length-1; i >= 0; i--) {
    hindernis[i].update();
    hindernis[i].show();
    //Lösche Hindernis wenn aus der Anzeige
    if (hindernis[i].offscreen()) {
      hindernis.splice(i, 1);
    }
    //Ausgabe in Console zum testen
    if(hindernis[i].hit(ball)){
      console.log("hit");
    }
  }
  
  //Zeichne Ball
  ball.show();
  //Lass den Ball nach unten fallen
  ball.update();
  

}

// Bei Maustaste gedrückt Ball nach oben
function mousePressed() {
  ball.up();
}