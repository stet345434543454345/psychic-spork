img = "";
status = "";
objectdetector = "";

function preload() {
    img = loadImage("mebed.jpg");
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd' ,modelLoaded);
    document.getElementById("status").innerHTML = "status = detecting objects";
}
function draw() {
    image(img, 0, 0, 640, 420);
    fill("FF0000");
    text("closet", 45, 75);
    noFill();
    stroke("FF0000");
    rect(30, 10, 200, 400);

    fill("FF0000");
    text("bed", 320, 120);
    noFill();
    stroke("FF0000");
    rect( 170, 90, 260, 320);
}
function modelLoaded() {
    console.log("modaloaded");
    status = true;
    objectdetector.detect(img, gotResult);
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    console.log(results);
}