$('document').ready(function(){
   
});

//Make a button that pauses a background video
var vid = document.getElementById("bgvid");
var pauseButton = document.getElementById("vidpause");
function vidFade() {
vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});
//Add an event listner that pauses the video by clicking
pauseButton.addEventListener("click", function() {
vid.classList.toggle("stopfade");
//If you click the button again when video is paused, play the video
if (vid.paused) {
vid.play();
//When video is playing button says 'Pause'
pauseButton.innerHTML = "Pause";
} else {
vid.pause();
//When video is paused buttons says 'Paused'
pauseButton.innerHTML = "Paused";
}
});
