	$(function() {
		$(".scroll").click(function(event){		
			event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},900);
		});
	});
	$(function () {
		$("#slider4").responsiveSlides({
		auto: true,
		pager: true,
		nav:false,
		speed: 500,
		namespace: "callbacks"
		});
	});
	$(document).ready(function() {
		$().UItoTop({ easingType: 'easeOutQuart' });
	});