

var timer;
var videoPlay = false;

function mouseStopped(){
	var closeVid = document.getElementById('close-video');
    closeVid.classList.remove("fade-in");
    closeVid.classList.add("fade-out");
}

function videoMouseMove(e){

	if(videoPlay){
		clearTimeout(timer);
		timer=setTimeout(mouseStopped,300);
		var closeVid = document.getElementById('close-video');
		closeVid.classList.add("fade-in");
		closeVid.classList.remove("fade-out");
 	}
}

function videoStop(){
	var video = document.getElementById("video");

	video.style.visibility = "hidden";
	banner.classList.add("fade-in");
	banner.classList.remove("fade-out");

	var desc = document.getElementById('banner-description');
	desc.style.backgroundImage = "linear-gradient(rgba(114,119,223,0.23), rgba(114,119,223,0))";
	var navbar = document.getElementById('navbar');
	navbar.style.backgroundImage = "none";
	document.getElementById('navbar-logo').src = "assets/PlumeLogo1x.png";
	var navbarText = document.getElementsByClassName('navbar-text');

	var i;

	videoPlay = false;

	for (i = 0; i < navbarText.length; i++) {
	  navbarText[i].style.color = "white";
	  if(navbarText[i].style.borderBottomColor != "none"){
	  	navbarText[i].style.borderBottomColor = "white";
	  }
	}

	var iframe = document.getElementById('video');
	var player = new Vimeo.Player(iframe);

	player.unload();
}

function videoClick(){
	var video = document.getElementById("video");
	var banner = document.getElementById("banner");

	video.style.visibility = "visible";
	banner.classList.add("fade-out");
	banner.classList.remove("fade-in");

	var desc = document.getElementById('banner-description');
	desc.style.backgroundImage = "none";
	var navbar = document.getElementById('navbar');
	navbar.style.backgroundImage = "linear-gradient(rgba(255,255,255,1), rgba(0,0,0,0))";
	document.getElementById('navbar-logo').src = "assets/PlumeLogoPurple1x.png";

	var navbarText = document.getElementsByClassName('navbar-text');
	var i;
	videoPlay = true;

	for (i = 0; i < navbarText.length; i++) {
	  navbarText[i].style.color = "#7277DF";
	  if(navbarText[i].style.borderBottomColor != "none"){
	  	navbarText[i].style.borderBottomColor = "#7277DF";
	  }
	}


	var iframe = document.getElementById('video');
	var player = new Vimeo.Player(iframe);
	player.play().then(function() {
		// the video was played
	}).catch(function(error) {
	    switch (error.name) {
	        case 'PasswordError':
	            // the video is password-protected and the viewer needs to enter the
	            // password first
	            break;

	        case 'PrivacyError':
	            // the video is private
	            break;

	        default:
	            // some other error occurred
	            break;
	    }
	});

}

//Collapsible text box
var coll = document.getElementsByClassName("collapsible");
var i;
var expand = false;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    expand = !expand;
    this.children[0].innerHTML = expand ? "expand_less" : "expand_more" 

    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });

  // // coll[i].addEventListener("click", function() {
  //   coll[i].classList.toggle("active");
  //   var content = coll[i].nextElementSibling;
  //   if (content.style.maxHeight){
  //     content.style.maxHeight = null;
  //   } else {
  //     content.style.maxHeight = (content.scrollHeight) + "px";
  //   } 
  // // });
}

//Video functionalities

var videoButton = document.getElementById("video-button");
videoButton.addEventListener("click", videoClick)

var videoStopButton = document.getElementById('close-video');
videoStopButton.addEventListener("click", videoStop)