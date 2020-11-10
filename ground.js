class Ground{
    constructor(x,y,width,height){
        var groundOptions = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(x,y,width,height, groundOptions)
        this.width = width;
        this.height = height;
        World.add(world, this.ground)
    }

    Display(){
        var Pos = this.ground.position;
        fill("yellow");
        rect(Pos.x, Pos.y, this.width, this.height);
    }
}