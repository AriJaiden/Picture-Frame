function preload(){

}

function setup() {
    canvas=createCanvas(700, 700);
    video=createCapture(VIDEO);
    video.hide();
  }
  
  function draw() {
    background(220);
    fill(100)
    text("("+mouseX+","+mouseY+")",mouseX, mouseY);
    image(video, 200, 200, 400, 400);
    fill("#ffe6ee");
    stroke("#7fffd4");
    rect(200, 180, 400, 20);
    rect(200, 600, 400, 20);
    rect(200, 180, 20, 420);
    rect(600, 180, 20, 440);
    circle(209, 187, 50);
    circle(609, 185, 50);
    circle(609, 615, 50);
    circle(209, 615, 50);
}

function take_snap() {
  save('framedimg.png');
}