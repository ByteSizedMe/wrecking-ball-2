class Ball{
    constructor(x,y,radius){
        var options = {
            density: 2,
            friction: 1.0

        }
        this.body = Bodies.circle(x,y,radius,radius,options);
        this.radius = radius;
        this.image = loadImage("sprites/ball.png");
        World.add(world,this.body);

    }
    display(){
        this.image(this.image,0,0,this.radius,this.radius);
        
    }
}