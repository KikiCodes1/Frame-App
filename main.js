function preload(){

}

function setup(){
    canvas = createCanvas(700, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 100, 50, 500, 400);
    fill("green");
    stroke("purple");
    circle(50, 50, 100);
    circle(650, 50, 100);
    circle(50, 450, 100);
    circle(650, 450, 100);
    fill("orange");
    stroke("blue");
    rect(100, 10, 500, 30);
    rect(100, 460, 500, 30);
    rect(30, 100, 30, 300);
    rect(640, 100, 30, 300);
}
