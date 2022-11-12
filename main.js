noseX=0
noseY=0
function preload(){
Filter_mustache = loadImage('https://i.postimg.cc/fbFVPwbJ/pngegg.png')
}
function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600,600);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function draw(){
    image(video, 0, 0, 600, 600);
    image(Filter_mustache, noseX, noseY, 120, 100);
}
function take_snapshot(){
    save('Filtermustache.png');
}
function modelLoaded(){
console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-49;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }}
