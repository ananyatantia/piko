var wall1,wall2,wall3,wall4,wall5
var peg1,peg2,peg3,peg4,peg5,peg6,peg7,peg8,peg9
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
 createCanvas(800,400);
 
}

function draw() {
 background(255,255,255);  
  
  wall1 = new Wall(10,100)
  wall2 = new Wall(20,100)
  wall3 = new Wall(30,100)
  wall4 = new Wall(40,100)
  wall5 = new Wall(50,100)

   peg1 = new Peg(10,10)
   peg2 = new Peg(20,20)
   peg3 = new Peg(30,30)
   peg4 = new Peg(40,40)
   peg5 = new Peg(50,50)
   peg6 = new Peg(60,60)
   peg7 = new Peg(70,70)
   peg8 = new Peg(80,80)
   peg9 = new Peg(90,90)
  

   peg1.display()
   peg2.display()
   peg3.display()
   peg4.display()
   peg5.display()
   peg6.display()
   peg7.display()
   peg8.display()
   peg9.display()
  
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  wall5.display()
}