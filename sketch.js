var canvas;
var music;
var block1, block2, block3, block4;
var box;
 var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
block1=createSprite(700,550,150,20);
block2=createSprite(500,550,150,20);
block3=createSprite(300,550,150,20);
block4=createSprite(100,550,150,20) ;  
box=createSprite(random(20,750,20,20));
box.velocityX=3;
box.velocityY=3;



}

function draw() {

    background(rgb(169,169,169));
    block1.shapeColor=("maroon");
    block2.shapeColor=("cyan");
    block3.shapeColor=("pink");
    block4.shapeColor=("yellow");
    box.shapeColor=("white");


   edges=createEdgeSprites();
   box.bounceOff(edges);

if(block1.isTouching(box)){
    box.shapeColor=("maroon");
    box.velocityX=0;
    box.velocityY=0;
    
}

if(block2.isTouching(box)){
    box.shapeColor=("cyan");
    box.velocityX=0;
    box.velocityY=0;
    
}

if(block3.isTouching(box)){
    box.shapeColor=("pink");
    box.velocityX=0;
    box.velocityY=0;
    
}

if(block4.isTouching(box)){
    box.shapeColor=("yellow");
    box.velocityX=0;
    box.velocityY=0;
    
}


    drawSprites();
    

}
