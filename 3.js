img = "";
status = "";
objectdetector = "";

function preload() {
    img = loadImage("kich.jpg");
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
    text("grill", 140, 200);
    noFill();
    stroke("FF0000");
    rect(140, 200, 200, 350);

    fill("FF0000");
    text("steam sucker", 320, 120);
    noFill();
    stroke("FF0000");
    rect( 140, 70, 200, 100);
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