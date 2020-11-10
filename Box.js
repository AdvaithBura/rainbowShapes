//blueprint
class Box{
  //constructor is a function
  //it is invoked whenever a new object of this class is made  
    constructor(x,y,width,height){
        var options = {
            restitution : 0.7
        }
        this.box = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.box);
    }

    display(NewColor){
        var pos = this.box.position;
        var angle = this.box.angle;
        push();    
        translate(pos.x, pos.y);
        rotate(angle)
        rectMode(CENTER);
        fill(NewColor);
        rect(0,0, this.width, this.height);
        pop();
    }

}