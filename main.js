song1="";
song2="";
function preload(){
    song1=loadSound("peterpansong.mp3");
    song2=loadSound("harrypottersong.mp3");
}
function setup(){
canvas=createCanvas(500,350);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video,0,0,500,350);
}
function play(){
    song.play();
}