function preload(){
    ""
}

function setup(){
    canvas= createCanvas( 500, 400 );
    canvas.position( 100, 400);
    video= createCapture(VIDEO);
    video.hide();
    tintColor=""
}

function draw(){
    image(video,0,0,500,400);
    tint(tintColor);
}

function take_snapshot(){
    save('filter.png');
}


function add_filter(){
    tintColor = document.getElementById("input").value;
    
}