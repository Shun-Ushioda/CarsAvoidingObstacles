let posY = new Array(3);
let speedY = new Array(3);
let oImage = new Array(3);
let oWait = new Array(3);
let pipo;
let score;
let hp;
let gseq;
let mcnt;
let myX = 300;
let myCar;
let obstacle = new Array(20);
let jiko;

function preload()
{
  myCar = loadImage("data/car_side.png");
  jiko = loadImage("data/koutsu_jiko_car_man.png");
  for ( let i = 0; i < 20; i++)
  {
    obstacle[i] = loadImage("data/obstacle" + i + ".png");
  }
  pipo = loadSound("data/pipo.mp3");
}

function setup()
{
  createCanvas(600, 800);
  imageMode(CENTER);
  noStroke();
  gameInit();
}

function draw()
{
  background(255);
  noStroke();
  fill(90, 88, 100);
  rect(0, 0, width, height);
  fill(255, 255, 0);
  circle(100, 700, 90);
  circle(300, 700, 90);
  circle(500, 700, 90);
  fill(255);
  rect(0, 0, 10, height);
  rect(193, 0, 14, height);
  rect(393, 0, 14, height);
  rect(590, 0, 10, height);
  image(myCar, myX, 700);

  if (gseq == 0) gamePlay();
  else if (gseq == 1) gameOver();
}

function objDisp()
{
  for (let i = 0; i < 3; i++)
  {
    if (oImage[i] == 0) image(obstacle[0], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 0) image(obstacle[0], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 1) image(obstacle[1], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 2) image(obstacle[2], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 3) image(obstacle[3], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 4) image(obstacle[4], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 5) image(obstacle[5], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 6) image(obstacle[6], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 7) image(obstacle[7], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 8) image(obstacle[8], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 9) image(obstacle[9], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 10) image(obstacle[10], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 11) image(obstacle[11], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 12) image(obstacle[12], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 13) image(obstacle[13], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 14) image(obstacle[14], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 15) image(obstacle[15], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 16) image(obstacle[16], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 17) image(obstacle[17], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 18) image(obstacle[18], (2*i+1)*100, posY[i]);
    else if (oImage[i] == 19) image(obstacle[19], (2*i+1)*100, posY[i]);
  }
}

function objMove()
{
  for (let i = 0; i < 3; i++)
  {
    posY[i] += speedY[i];
    if (posY[i] > height) {
      objInit(i);
    }
  }
}

function objInit(no) {
  posY[no] = int(random(300));
  speedY[no] = int(random(1, 4));
  oImage[no] = int(random(20));
  oWait[no] = int(random(60, 240));
}

function hitCheck()
{
  if (myX==100) {
    if ((650<posY[0])&&(posY[0]<750)) {
      hp--;
      objInit(0);
    }
  }
  if (myX==300) {
    if ((650<posY[1])&&(posY[1]<750)) {
      hp--;
      objInit(1);
    }
  }
  if (myX==500) {
    if ((650<posY[2])&&(posY[2]<750)) {
      hp--;
      objInit(2);
    }
  }
}

function hpDisp()
{
  textSize(24);
  fill(255);
  textAlign(CENTER);
  text("HP:"+hp, width/2, 25);
}

function gamePlay() 
{
  objMove();
  objDisp();
  hitCheck();
  hpDisp();
  if (hp < 1) gseq = 1;
}

function gameOver()
{
  fill(255, 0, 0);
  rect(0, 0, width, height);
  hpDisp();
  textAlign(CENTER);
  textSize(50);
  fill(255, 255, 0);
  text("GAME OVER", width/2, 200);
  image(jiko, 300, 500);
  mcnt++;
  if ((mcnt%60) < 40)
  {
    textSize(26);
    fill(255);
    text("Click to retry!", width/2, 270);
  }
}

function gameInit()
{
  for (let i = 0; i < 3; i++) objInit(i);
  hp = 3;
  gseq = 0;
  mcnt = 0;
}

function mousePressed()
{
  if (gseq == 1) 
  {
    gameInit();
     if (dist(mouseX, mouseY, 300, 500)<100) pipo.play();
  }
  if (dist(mouseX, mouseY, 100, 700)<60) myX = 100;
  if (dist(mouseX, mouseY, 300, 700)<60) myX = 300;
  if (dist(mouseX, mouseY, 500, 700)<60) myX = 500;
}
