class Particle {
    constructor(x = random(width / 4, window.innerWidth * 3 / 4), y = height, isChild=false) {
        this.pos = createVector(x, y);
        this.acc = createVector(0, 0);
        this.alive = true;
        this.isChild = isChild;
        this.col = color(random(25, 255), random(25, 255), random(25, 255), 255);
        if (this.isChild){
            this.vel = createVector(random(-4, 4), random(-6, 0.5));
        } else {
            this.vel = createVector(random(-1, 1), -random(11, 19));
        }
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        
        if (!this.isChild && this.vel.y >= 0) {
            for(var i = 0; i < random(8, 14); i++) {
                fireworks.push(new Particle(this.pos.x, this.pos.y, true));
            }
            this.alive = false;
            fireworks.push(new Particle());    
            // background(random()*255, random()*255, random()*255, 20);
        } else if (this.pos.y > height + 10){
            this.alive = false;
        }
    }

    show() {
        if (this.isChild){
            fill(this.col);
        } else {
            fill(255,0,0);
        }
        ellipse(this.pos.x, this.pos.y, 10);
    }
}