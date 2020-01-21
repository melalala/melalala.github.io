// JavaScript Document

$(document).ready(function(){
	$('.dropdown').click(function(){
		$('.dropdown-content').toggleClass('expand');
	});
});

function hover(prm) {
  document.getElementById(prm).src = "images/Arrow-black.png";
}

function unhover(prm) {
  document.getElementById(prm).src = "images/Arrow.png";
}

function scrollFunction() {
  //Get the button
  var mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

