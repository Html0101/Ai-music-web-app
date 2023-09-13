aSong = "";
fatRat = "";

function preload()  
{ 
    aSong = loadSound("Joe Valeriano - A Song.mp3");
    fatRat = loadSound("The Fat Rat - Monody.mp3");
}

function setup()  
{ 
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()  
{ 
    image(video, 0, 0, 500, 500)
}