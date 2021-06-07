video="";
objects=[];

function preload(){
video=createVideo("video.mp4");
video.hide();
}

function setup(){
canvas=createCanvas(480,380);
canvas.center();
canvas.position(500,300);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded(){
  console.log("Model Loaded!");
  status=true;
  video.loop();
  video.speed(1);
  video.volume(0);
}

function stop(){
    video.stop();
}

function draw(){
    image(video,0,0,480,380);
    if(status!=""){
    objectDetector.detect(video,gotresult);
    for(i=0; i<=object.length; i++){
    document.getElementById("number_of_objects").innerHTML="Number of objects are",object.length;

    fill("#FFFFFF")
   var percentage=floor(object[i].confidence*100);
   nofill();
   text(object[i].label+"%", object[i].x,object[i].y);
   stroke("#FF0000");
   rect(object[i].x,object[i].y,object[i].width,object[i].height)
    }
}
}

function gotresult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    objects=results;
}
}
//var synth = window.speechSynthesis; speak_data = objects[i].label;
//var utterThis = new SpeechSynthesisUtterance(speak_data); synth.speak(utterThis);