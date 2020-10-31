function setup() {


//creates the canvas

  createCanvas(1200,800);

//creates the boxes and gives them their initial color

  fixedRect = createSprite(600,400,60,30);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200, 150, 20, 10);
  movingRect.shapeColor = "red";
}

function draw() {

//paints the background black

  background(0);  


  //Makes moving rectangle move along with the cursor

movingRect.x = mouseX;
movingRect.y = mouseY;


//Algorithm for isTouching command, changes the colors of the boxes once they touch each other.

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2   &&
  
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2   &&

  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&

  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2

  ){

fixedRect.shapeColor = "yellow";
movingRect.shapeColor = "blue";



}

//resets the colors back to their initial colors

else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "red";
  
  


}

  drawSprites();


  
}