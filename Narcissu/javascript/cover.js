window.onload = init;
function init() {
	var button = document.getElementById("yes");
	button.onclick = shutdown;
	button.addEventListener("click", playAudio);
	var again = document.getElementByClassName("again");
	again.onclick = again;

}

function shutdown() {
	var close = document.getElementById("instruction");
	close.style.display="none";
		
}

function again() {
	var put = document.getElementById("instruction");
	put.style.display="block";
		
}

function playAudio() {
	var audio = document.getElementById("one");
        audio.play();
	audio.volume = 0.3;
}