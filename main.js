function preload(){

}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(550,180);
    cam = createCapture(VIDEO);
    cam.hide();
}
function draw(){
    image(cam, 0, 0, canvas.width, canvas.height);
}
