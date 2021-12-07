var boingOne = $("#boingyoing")[0];
		$(".onClickTextOverImage")
	.mouseenter(function() {
		boingOne.play();
	});

function StopSound() {
  // Stop sound from playing
  boingyoing.pause();
  boingyoing.currentTime = 0;
}

function keepLocation(oldOffset) {
	if (window.pageYOffset!= null){
	  st=oldOffset;
	}
	if (document.body.scrollWidth!= null){
	  st=oldOffset;
	}
	setTimeout('window.scrollTo(0,st)',5);
  }