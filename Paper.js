class Paper{
    constructor(x, y, diameter) {
        var options = {
            'isStatic':false,
            'restitution':0.4,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, diameter/2, options);
        this.diameter=diameter/2;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, 50, 50);
        pop();
      }
}