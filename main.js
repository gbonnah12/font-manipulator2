function setup() {
    video= createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,500);
    canvas.position(560,150);

    poseNet=m15.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded (){
    console.log('PoseNet is Initialized!');
    
}

function gotPoses(reults)
{
    if(reults.length>0)
    {
        console.log(results);
    }
}