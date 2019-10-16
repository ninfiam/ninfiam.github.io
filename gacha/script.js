var video = document.getElementById("playVideo");
var audio = document.getElementById("playAudio");
var videoSource = new Array(5);

for (var i = 0; i < videoSource.length; i++) { 
    videoSource[i] = new Array(6); 
}

for (var i = 0; i < 5; i++) { 
    for (var j = 0; j < 6; j++) { 
        videoSource[i][j] = "video/" + (i+1) + "-" + (j+1) + ".mp4";
    } 
} 

i = 0;
j = 0;

video.addEventListener('ended', videoHandler, false);
audio.addEventListener('ended', audiohandler, false);
playBGM();
playVid();

function videoHandler() {
  nextVid();
  playVid();
}

function audioHandler(){
  audio.src = "audio/gacha2.wav";
  audio.loop = 1;
  audio.load();
  audio.play();
}

function playBGM(){
  audio.src = "audio/gacha1.wav";
  audio.load();
  audio.play();
}

function playVid(){
  if((j == 2) || (j == 5)){
	video.loop = 1;
  } else {
    video.loop = 0;
  }
  video.src = videoSource[i][j];
  video.load();
  video.play();
}

function clickVid(){
  var clickSound = new Audio("audio/click.wav");
  clickSound.play();
  nextVid();
}

function nextVid() {
  if (j < 5){
    j++;
  } else {
	j = 0;
	if (i < 4){
	  i++;
    } else {
	  i = 0;
    }
  }
  playVid();
}
