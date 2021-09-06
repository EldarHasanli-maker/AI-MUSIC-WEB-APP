song1="";
song2="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreleftwrist=0;
song1status="";
song2status="";
function preload(){
song1=loadSound("harrypottersong.mp3");
song2=loadSound("peterpansong.mp3");
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
    song1status=song1.isPlaying();
    song2status=song2.isPlaying();
    if(scoreleftwrist>0.2){
        circle(leftwristX,leftwristY,20);
        song1.stop();
        if(song2status==false){
            song2.play();
            document.getElementById("Song").innerHTML="Playing-Peter pan song";
        }
    }
    fill("#d90000");
    stroke("#d90000");
    
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