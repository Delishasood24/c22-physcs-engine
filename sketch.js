const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, ground, ball;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create(); //to create physics engine
    world = engine.world;
    var Goption = {
        isStatic: true
    }
    ground = Bodies.rectangle(200, 380, 400, 20, Goption);

    World.add(world, ground);

    var Boption = {

        isStatic: false,
        restitution: 0.8
    }
    ball = Bodies.circle(200, 100, 20, Boption);

    World.add(world, ball);
    //console.log(object);
    // console.log(object.position.x);
    //  console.log(object.position.y);
}


function draw() {
    background("lightblue");
    Engine.update(engine);

    fill("lightgreen")
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);
    ellipseMode(RADIUS);
    fill("pink");
    circle(ball.position.x, ball.position.y, 20);
}