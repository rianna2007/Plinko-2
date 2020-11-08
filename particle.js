class Particle {
    constructor (x, y, r) {
        var options = {
            restitution=0.4
        }
        this.r=r;
        this.body=Bodies.circle (c, y, this.r, options);
        this.color=(random(0, 255)), random (0, 255), random (0, 255);
        this.h=h;
        World.add (world, this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r)

        fill ("white");
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}