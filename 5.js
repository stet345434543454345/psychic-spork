img = "";
status = "";
objectdetector = "";

function preload() {
    img = loadImage("fruit.jpg");
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
    text("fwoots", 0, 20);
    noFill();
    stroke("FF0000");
    rect(10, 20, 620, 400);

    
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