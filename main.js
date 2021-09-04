song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreleftwrist=0;
function preload(){
song=loadSound("harrypottersong.mp3");
song=loadSound("peterpansong.mp3");
}
function setup(){
canvas=createCanvas(500,450);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,500,450);
    fill("#d90000");
    stroke("#d90000");
    if(scoreleftwrist>0.2){
    circle(leftwristX,leftwristY,20);
    innumberleftwristY=Number(leftwristY);
    remove_decimals=floor(innumberleftwristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="Volume: "+volume;
    song.setVolume(volume);
    }
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
if(results.length >0){
    console.log(results);
    scoreleftwrist=results[0].pose.keypoints[9].score;
    leftwristX=results[0].pose.leftWrist.x;
    leftwristY=results[0].pose.leftWrist.y;
    console.log("left wrist x= "+leftwristX+" left wrist y="+leftwristY);
    rightwristX=results[0].pose.rightWrist.x;
    rightwristY=results[0].pose.rightWrist.y;
    console.log("right wrist x= "+rightwristX+" right wrist y="+rightwristY);
}
}