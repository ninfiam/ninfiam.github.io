var video = document.getElementById("playVideo");
var audio = document.getElementById("playAudio");
var videoSource = new Array(5);

for (var i = 0; i < videoSource.length; i++) { 
    videoSource[i] = new Array(5); 
}

for (var i = 0; i < 5; i++) { 
    for (var j = 0; j < 5; j++) { 
        videoSource[i][j] = "video/" + (i+1) + "-" + (j+1) + ".mp4";
    } 
} 

i = 0;
j = 0;

video.addEventListener('ended', handler, false);
playBGM();
playVid();

function handler() {
  nextVid();
  playVid();
}

function playBGM(){
  audio.src = "audio/bgm.mp3"
  audio.load();
  audio.play();
}

function playVid(){
  if((j == 1) || (j == 3) || (j == 4)){
	video.loop = 1;
  } else {
    video.loop = 0;
  }
  video.src = videoSource[i][j];
  video.load();
  video.play();
}

function clickVid(){
  var clickSound = new Audio("audio/click.mp3");
  clickSound.play();
  nextVid();
}

function nextVid() {
  if (j < 4){
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