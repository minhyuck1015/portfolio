
$(document).ready(function(){ 
	 $('#header img.b').hide();
  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
	  $('#header img.a').fadeOut(0);
	  $('#header img.b').fadeIn(0);
    } else {
      $('#header').removeClass('header-scrolled');
	   $('#header img.b').fadeOut(0);
	  $('#header img.a').fadeIn(0);
    }
  })

 });
 var slideIndex = 1;
 showSlides(slideIndex);
 
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
   var captionText = document.getElementById("caption");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   captionText.innerHTML = dots[slideIndex-1].alt;
 }