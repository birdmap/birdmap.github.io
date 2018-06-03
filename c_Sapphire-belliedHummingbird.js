var song;
var button;
var amp;
var volhistory = [];

// function togglesong(){
//     if(song.isPlaying()){
//         song.pause();
//     }else{
//         song.play();
//     }
// }

function preload(){
 song = loadSound("sounds/Sapphire-belliedHummingbird.mp3");    
}

function setup(){
    var canvas = createCanvas(175,175);
    canvas.parent('canvasp');
    angleMode(DEGREES);
    // button = createButton('toggle');
    // button.mousePressed(togglesong);
    song.play();
    amp = new p5.Amplitude();
}

function draw(){
    background(255);
    var vol = amp.getLevel();
    volhistory.push(vol);
    stroke(0,105,52);
    noFill();
    translate(width/2, height/2);
    // rect(0,0,50,50);
    // rect(0,0,99,99);
    beginShape();
        for(var i = 0; i < 360; i++){
            var r = map(volhistory[i], 0, 1, 42, 100);
            var b = map(volhistory[i], 0, 1, 50, 300);
            //원의 두께는 4번째 인자끼리의 차이
            var x = r * cos(i);
            var y = r * sin(i);
            var z = b * cos(i);
            var w = b * sin(i);
            
            vertex(x, y);
            vertex(z, w);
        }
    endShape();


if (volhistory.length > 360){
        volhistory.splice(0,1);
    }
    //ellipse(100,100,200,vol*200);
}