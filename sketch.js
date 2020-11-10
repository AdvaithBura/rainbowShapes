const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
//OOPS = creating blueprints
//blueprints = plan that defines the propertiers/characteristics and functions of something
//create class (blueprint) => with class we create multiple objcts of the class
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    //bounciness == restitution
    var options = {
    restitution: 1.0
    }   
    
    ball = Bodies.circle(200,200,50,options);
    console.log(ground);

    World.add(world,ball);


    //create objects of box class
    box1 = new Box(480,100,70, 70);
    box2 = new Box(400,300,100,100);
    box3 = new Box(450, 40, 70, 100);
    ground1 = new Ground(400,390,800,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode("center");

    ellipseMode(RADIUS);
    fill("orange");
    ellipse(ball.position.x, ball.position.y, 50);

    //call display function of box class to display box1(object of box class)
    
    box1.display("green");
    
    box2.display("red");
    box3.display("yellow");
    ground1.Display();
}