function Particle(x=random(width*1/3, width*2/3), y=height, isChild=false){
    this.pos = createVector(x, y);
    this.acc = createVector(0, 0);
    this.alive = true;
    this.isChild = isChild;
    this.col = color(random(50,255), random(50,255), random(50,255), 255);
    if (this.isChild){
        this.vel = createVector(random(-4, 4), random(-6, 0.5));
    } else {
        this.vel = createVector(random(-1, 1), -random(13, 16));
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        
        if (!this.isChild && this.vel.y >= 0) {
            var children = [];
            for(var i = 0; i < random(8, 14); i++) {
                children.push(new Particle(this.pos.x, this.pos.y, true));
            }
            this.alive = false;
            return children; 

        } else if (this.pos.y > height + 10){
            this.alive = false;
        }

        return [];
    }

    this.show = function() {
        if (this.isChild){
            fill(this.col);
        } else {
            fill(255,0,0);
        }
        ellipse(this.pos.x, this.pos.y, 10);
    }
}