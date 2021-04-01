var hr;
var mn;
var sc;
var hrAngle, mnAngle, scAngle;


function setup() {
  createCanvas(800,400);
  
  angleMode(DEGREES);

}

function draw() {
  background("black");  
  
  translate(200,200);
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12,0,12,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(7)
  line(0,0,50,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(6)
  line(0,0,80,0);
  pop();

  push();
  rotate(scAngle);
  stroke("green");
  strokeWeight(5)
  line(0,0,100,0);
  pop();

  point(0,0);
  noFill();
  stroke("red");
  strokeWeight(7)
  arc(0,0,260,260,0,hrAngle);

  stroke("blue");
  strokeWeight(6)
  arc(0,0,280,280,0,mnAngle);

  stroke("green");
  strokeWeight(5)
  arc(0,0,300,300,0,scAngle);
  
}