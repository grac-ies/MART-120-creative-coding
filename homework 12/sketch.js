//the characters
var bubbleX = 250;
var bubbleY = 100;
var bubbleDirection = 1;
var width = 500;
var height = 600;

var obX = 200;
var obY = 185;
var obDirection = 3

var characterX = 250;
var characterY = 300;

var x = 100;
var y = 100;
var xStep = 3;
var yStep = 2;

var count = 0;
var sizeDirection = 2;

// my guy movin
var up = 38;
var down = 40;
var left = 37;
var right = 39;

//my character
var mousex = 0;
var mousey = 0;



//ColorPicker...duh
let colorPicker;


function setup(){
createCanvas(500, 600);
sweepx = width / -15;
sweepy = height;
colorPicker = createColorPicker("pink");
 // position color picker
colorPicker.position(250, 300);
 // size color picker
colorPicker.size(50, 50);
}
//Obstacles
function obstacles()
{function draw(){
fill (190,130,140)
square(20,20,70)
triangle(20,40,)}}
function myguy(x,y){
fill(190,130,140);
circle(x,y,70);

}
function killer1(){
stroke(0);
fill(259, 209, 300);
rect(sweepx, sweepy, 550, 10);
sweepy = sweepy - 8;
if (sweepy < 5) {
sweepy = height;
               }}
function killer2(){
   stroke(0)
   fill(259, 204, 300);
   circle(bubbleX,bubbleY,20);
   bubbleX+=bubbleDirection;
   count++;
   if(count > 30)
   {
       bubbleDirection *=+-1;
       count = 2;
   }}
function killer3(){
   fill(0);
   ellipse(250,obY,50,124);
   obY = obY - 1;
   if(obY < 0 )
   {
       obY = height;
   }}
function keys(){
   if(keyIsDown(up))
   {
      characterY -= 25;
   }
   if(keyIsDown(down))
   {
      characterY += 25;
   }
   if(keyIsDown(left))
   {
     characterX -= 25;
   }
   if(keyIsDown(right))
   {
      characterX += 25;
   }}
function winner(){
fill(45,75,86);
rect(200,380,10,250);
rect(290,380,10,250);
//walls
rect(0,0,500,10);
rect(0,0,10,600);
rect(490,-5,20,600)
rect(10,580,200,300)
rect(300,580,600,300)
textSize(15);
text("ESCAPE HERE", 200,350) }
function clickshape(){

fill(200,150,140);
square(mousex, mousey,50);}
function mouseClicked()
{
mousex = mouseX;
mousey = mouseY;}
function victory(){ if(characterX > width  || characterY > width)
         {
             fill(0);
             stroke(5);
             textSize(26);
             text("Be Free!", 200, 300);
         }
  }
function draw(){
background(colorPicker.color());
myguy( characterX, characterY)
clickshape()
keys()
killer1()
killer2()
killer3() //black hole!
winner() // winner tunnel
//create the shape based on the mouse click
victory()
}
  
