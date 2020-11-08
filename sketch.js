var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var gameState = "play";
var particle;
var score=0;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  text("score  " + score, width-300, 50)

  for (var j=40, j <=width; j=J+50)
  {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j=15, j <=width-10; j=J+50)
  {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j=40, j <=width-20; j=J+50)
  {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j=15, j <=width-30; j=J+50)
  {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j=0, j < particles.length; j++)
  {
    particles[j].display();
  }

  for (var k=0, j < particles.length; k++)
  {
    particles[k].display();
  }
}

for (var k=0; k<=width; k = k+80){
  divisions.push(new Divisions (k, hieght-divisionHeight/2, 10, divisionHeight));

}

for (var k=0; k<=width; k = k+80){
  plinkos.push(new Plinkos (k, hieght-divisionHeight/2, 10, divisionHeight));
}

for (var k=0; k<=width; k = k+80){
  particles.push(new Particles (k, hieght-divisionHeight/2, 10, divisionHeight));
}

if (frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
}

function mousePressed(){
  if(gameState!="end")
  {
    count++;
    particle=newParticle(mouseX, 10, 10, 10);
  }
}

if(particle!=null){
  particle.display();

  if (particle.body.position.y>760) {
  
    if (particle.body.position.y>300)
    {
      score=score+500
      particle=null;
      if(count>= 5) gameState="end";
    }
  }
}

if(particle!=null){
  particle.display();

  if (particle.body.position.y>301) {
  
    if (particle.body.position.y<600)
    {
      score=score+100
      particle=null;
      if(count>= 5) gameState="end";
    }
  }
}
  
if(particle!=null){
  particle.display();

  if (particle.body.position.y>601) {
  
    if (particle.body.position.y<900)
    {
      score=score+200
      particle=null;
      if(count>= 5) gameState="end";
    }
  }
}

  