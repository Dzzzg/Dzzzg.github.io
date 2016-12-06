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
	//计时器
	$(fuc=function(){
	var t;
	var d = new Date();
	var hour = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	document.getElementById("bac").style.background="rgba("+(hour+Math.round(Math.random()*230))+","+(min+Math.round(Math.random()*230))+","+(sec+Math.round(Math.random()*230))+","+0.2+")";
	document.getElementById("bac").style.color="rgb("+(hour+Math.round(Math.random()*230))+","+(min+Math.round(Math.random()*230))+","+(sec+Math.round(Math.random()*230))+")";
	if (hour<10){
		hour='0'+hour;
	}
	if (min<10){
		min='0'+min;
	}
	if (sec<10){
		sec='0'+sec;
	}
	document.getElementById("bac").innerHTML=hour+":"+min+":"+sec;
	t=setTimeout("fuc()",1000);//调到1有奇效
});
	