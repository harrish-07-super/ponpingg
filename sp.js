leftX=0;

rightY=0;

status="";

function preload() {

}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}

function gotresult(results){
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function modelLoaded(){
	console.log("Model is loaded!@#");
}

function start(){
    game_status="start";
    document.getElementById("status").innerHTML="Game is loading";
  }

function draw() {
    image(video, 0, 0, 600, 400);

    fill("#FF0000");
   circle()
    stroke("#FF0000");
}