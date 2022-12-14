//snow
let circleG = [];

var x = 400;
var y = 400;
var xStep = 3;
var yStep = 2;

//do not touch!!
text(mouseX + "," + mouseY, 30,30)

function setup() {
createCanvas(1000, 500);
for (let i = 0; i < 25; i++) {
circleG[i] = random(height);
}
}

function draw() {
background("black");
createBorders(5);

//do not touch!!
text(mouseX + "," + mouseY, 30,30)

function createBorders(thickness) {
// top
fill('red');
rect(0, 0, width, thickness);
// left
fill('red')
rect(0, 0, thickness, height);
// both sides of winner tunnel
fill('green')
rect(0, height - thickness, width, thickness);
// right
fill('green')
rect(width - thickness, 0, thickness, height);
}

//snow
strokeWeight(0);
fill('white')
for (let i = 0; i < circleG.length; i++) {
let circleS = width * i / circleG.length;
circle(circleS, circleG[i], 5);
circleG[i]++;

if (circleG[i] > height) {
circleG[i] = 0;
      }
}

//cat head
strokeWeight(2);
fill('tan')
circle(500,250,300)
//cat ears
triangle(358, 73, 430, 120, 369, 178);
triangle(629,62,553,114,619,157 )
strokeWeight(0);
fill('pink')
triangle(377,166,426,124,363,86)
triangle(560,114,623,74,610,149)
//cat nose
fill('black')
triangle(498,253,479,289,522,287)
//cat eyes
fill('white')
circle(433,221,100)
circle(577,222,100)
fill('black')
circle(433,221,80)
circle(577,222,80)
//cat mouth
strokeWeight(8);
line(501,291,501,316)
line(467,324,499,315)
line(499,315,530,324)
//whiskers
line(440,284,410,272)
line(440,299,400,300)
line(440,310,410,334)
//right whiskers
line(544,285,573,280)
line(544,300,582,300)
line(544,315,573,336)
//cat hat
strokeWeight(0)
fill('white')
rect(427,105,130,20)
fill('red')
triangle(427,105,556,105,489,44)
fill('white')
circle(490,34,35)
//catbody
fill('tan');
ellipse(500,480,190,190);
//paws
strokeWeight(2)
fill('tan')
circle(416,497,10)
circle(421,497,10)
circle(426,497,10)
circle(567,497,10)
circle(572,497,10)
circle(577,497,10)
//tail
strokeWeight(0)
fill('tan')
ellipse(587,450,15,100)
//collar
fill('red')
rect(452,394,100,10)
fill('green');
ellipse(497, 399, 15, 15);
ellipse(505, 399, 15, 15);
triangle(511, 404,502, 418, 491, 404);
//he loves you
fill('white')
textSize(30);
text("Happy Holidays", x, y);

x += xStep;
y += yStep;

// bounce along the width
if (x > width || x < 0) {
xStep = xStep * -1;
}
// bounce along the height
if (y > height || y < 0) {
yStep = yStep * -1;
}

}
