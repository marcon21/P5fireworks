var firework; 
var gravity;
var fireworks = [];
var img;

function setup() {
  createCanvas(800, 800);
  gravity = createVector(0, 0.2);
  background(0);
  noStroke();
  fireworks.push(new Particle());
}

function mousePressed(){
  fireworks.push(new Particle());
}

function draw() {
  background(0,0,0,20);

  if (frameCount % 90 == 0){
    fireworks.push(new Particle());
  }

  for(var i = 0; i < fireworks.length; i++) {
    fireworks[i].applyForce(gravity);
    children = fireworks[i].update();
    fireworks[i].show();

    for(var j = 0; j < children.length; j++){
      fireworks.push(children[j]);
    }

    if (!fireworks[i].alive) {
      fireworks.splice(i, 1);
    }
  }
}