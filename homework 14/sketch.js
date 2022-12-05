//smaller circles
      var circleB = [190,200, 210, 220, 230, 240, 250, 260];
//bigger circles
      var circleY = [40,50, 60, 70, 80, 90, 100, 110];

      let circleG = [];
//clickshape
      var mousex = 0;
      var mousey = 0;
//main character arrow keys
      var up = 38;
      var down = 40;
      var left = 37;
      var right = 39;
//actual main charcter
      var characterX = 300;
      var characterY = 300;
//thing (its a snowman)
      var thingX = [];
      var thingY = [];
      var thingdiameter = [];

      function setup() {
      createCanvas(1435, 500);
      for (let i = 0; i < 25; i++) {
      circleG[i] = random(height);
      noStroke();
        thingX[0] = 500;
        thingY[0] = 330;
        thingdiameter[0] = 100;

        thingX[1] = 500;
        thingY[1] = 440;
        thingdiameter[1] = 150;

        thingX[2] = 500;
        thingY[2] = 260;
        thingdiameter[2] = 70;

        thingX[3] = 500;
        thingY[3] = 315;
        thingdiameter[3] = 10;

        thingX[4] = 500;
        thingY[4] = 334;
        thingdiameter[4] =10;

        thingX[5] = 500;
        thingY[5] =355;
        thingdiameter[5] =10;

        thingX[6] = 490;
        thingY[6] = 250;
        thingdiameter[6] =10;

        thingX[7] = 510;
        thingY[7] = 250;
        thingdiameter[7] =10;
  }
  }

      function draw() {
      background(255,200,200);
      createBorders(10);

      function createBorders(thickness) {
// top
      fill('red');
      rect(0, 0, width, thickness);
// left
      rect(0, 0, thickness, height);
// both sides of winner tunnel
      rect(0, height - thickness, 200, thickness);
      rect(300,height - thickness,1300)
// right
      rect(width - thickness, 0, thickness, height);
//winner tunnel
      fill(45,75,86);
      rect(200,380,10,250);
      rect(290,380,10,250);
  }

//character (ordiment)
      fill('red');
      circle(characterX,characterY,55);

// handle keys
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
      }

//snowballs!
      fill('white');
      stroke(1);
      ellipse(mouseX, 150, 33, 33);
      ellipse(mouseX/2, 200, 33, 33);
      ellipse(mouseX*2, 250, 33, 33);

//thing snowman!!!
      fill('lightyellow')
      circle(thingX[0],thingY[0], thingdiameter[0]);
      circle(thingX[1],thingY[1], thingdiameter[1]);
      circle(thingX[2], thingY[2],thingdiameter[2]);
      fill(19);
      circle(thingX[3], thingY[3],thingdiameter[3]);
      circle(thingX[4], thingY[4],thingdiameter[4]);
      circle(thingX[5], thingY[5],thingdiameter[5]);
      circle(thingX[6], thingY[6],thingdiameter[6]);
      circle(thingX[7], thingY[7],thingdiameter[7]);
//nose!
      fill('orange')
      triangle(490, 270, 510, 290, 500, 260);
//snow
      fill(200, 200, 255)
      for (let i = 0; i < circleG.length; i++) {
      let circleS = width * i / circleG.length;
      circle(circleS, circleG[i], 5);

      circleG[i]++;

      if (circleG[i] > height) {
      circleG[i] = 0;
            }
 }

//bigger circles
      fill(255,0,0,191);
      for (let i = 0; i < 8; i++) {
      let circleX = 200 * (i + 1);
      circle(circleX, circleY[i], 20);

      circleY[i]++;

      if (circleY[i] > height) {
      circleY[i] = 0;
      }
}

//smaller circles
     fill(255,0,0, 63);
     for (let i = 0; i < 8; i++) {
     let circleA = 200 * (i + 1);
     circle(circleA, circleB[i], 10);

     circleB[i]++;

     if (circleB[i] > height) {
    circleB[i] = 0;
    }
}

//mouseclick shape

     fill('green');
     square(mousex, mousey,50,87);
//leaving statement
if(characterX > 600 || characterY > 500 )
{
  fill(0);
  stroke(5);
  textSize(26);
  text("happy holidays!", 400, 150);
                                }

}

//da function for mouse duh
     function mouseClicked()
{
     mousex = mouseX;
     mousey = mouseY;
                   }
