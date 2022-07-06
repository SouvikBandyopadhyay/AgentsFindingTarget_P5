var path=[];
var targetX;
var targetY;
var startX;
var startY;
var index=0;
var popu=[];
var lenOfPath=200;
var matingpool=[];
var flag=1;
var currx;
var curry;
var changetarget=false;
var nFactorMatingPool=1000;

function setup() {
  createCanvas(windowWidth,windowHeight);
  targetX=windowWidth/2;
  targetY=windowHeight/2;
  currx=targetX;
  curry=targetY;
  background(255,100,200);
  console.log(dist(targetX,targetY,20,20));
  // agent code will go below
  makePopulation();
}

function draw() {
  background(255);
  drawTarget();
  // Agent code below
  fill(20);
  if(index<popu[1].path.length){
    makeMove();
  }
  else {
    index=-1;
    // breed in helper
    if(changetarget){
      changetarget=!changetarget;
      targetX=currx;
      targetY=curry;
      makePopulation();
    }
    else{
      makeMatingPool();  
      makeBabies();  
    }
    
  }
  textSize(24);
  text("Click anywhere to set Target",width/4,height/2);
  index++;
 
}
function mouseClicked(){
  currx=mouseX;
  curry=mouseY;
  changetarget=true;
}


