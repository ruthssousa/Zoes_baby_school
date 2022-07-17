//This was made last summer and was never used, love it and I'm aware how distracting the animation is - I lost it but there was a design with a fixed flat header for non-splash (literally) pages.



////tabs
function openTab(evt, tab) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("content__inner");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tab");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tab).style.display = "block";
	evt.currentTarget.className += " active";
}

//Horizontal scroll for the tabs on mousewheel. If tabs are longer than the content section, there's a scroll bar but it's hidden to retain the design.
if (window.innerWidth > 800) {
	const scrollContainer = document.querySelector(".tabs");

	scrollContainer.addEventListener("wheel", (evt) => {
		evt.preventDefault();
		scrollContainer.scrollLeft += evt.deltaY;
	});
}





///carrosel sobre
$(function(){
	$('.carousel-item').eq(0).addClass('active');
	var total = $('.carousel-item').length;
	var current = 0;
	$('#moveRight').on('click', function(){
	  var next=current;
	  current= current+1;
	  setSlide(next, current);
	});
	$('#moveLeft').on('click', function(){
	  var prev=current;
	  current = current- 1;
	  setSlide(prev, current);
	});
	function setSlide(prev, next){
	  var slide= current;
	  if(next>total-1){
	   slide=0;
		current=0;
	  }
	  if(next<0){
		slide=total - 1;
		current=total - 1;
	  }
			 $('.carousel-item').eq(prev).removeClass('active');
			 $('.carousel-item').eq(slide).addClass('active');
		setTimeout(function(){
  
		},800);
	  
  
	  
	  console.log('current '+current);
	  console.log('prev '+prev);
	}
  });
  ///
  $(document).ready(function() {
	// Create two variables with names of months and days of the week in the array
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
	
	// Create an object newDate()
	var newDate = new Date();
	// Retrieve the current date from the Date object
	newDate.setDate(newDate.getDate());
	// At the output of the day, date, month and year    
	$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
	
	setInterval( function() {
		// Create an object newDate () and extract the second of the current time
		var seconds = new Date().getSeconds();
		// Add a leading zero to the value of seconds
		$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
		},1000);
		
	setInterval( function() {
		// Create an object newDate () and extract the minutes of the current time
		var minutes = new Date().getMinutes();
		// Add a leading zero to the minutes
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
		},1000);
		
	setInterval( function() {
		// Create an object newDate () and extract the clock from the current time
		var hours = new Date().getHours();
		// Add a leading zero to the value of hours
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
		}, 1000);
		
	}); 