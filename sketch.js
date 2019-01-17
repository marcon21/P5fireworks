var gravity;
var fireworks = [];

var FRAMERATE = 60;

function setup() {
  var fireworksCanvas = createCanvas(window.innerWidth, window.innerHeight);
  gravity = createVector(0, 0.2);
  noStroke();
  for(var i = 0; i < 2; i++) {
    fireworks.push(new Particle());
  }  
  frameRate(FRAMERATE);
}

function mousePressed(){
  fireworks.push(new Particle());
}

function draw() {
  background(0,0,0,15);

  for(var i = 0; i < fireworks.length; i++) {
    fireworks[i].applyForce(gravity);
    fireworks[i].update();
    fireworks[i].show();

    if (!fireworks[i].alive) {
      fireworks.splice(i, 1);
    }
  }
}