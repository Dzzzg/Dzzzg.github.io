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
	document.getElementById("bac").title="北京时间"+hour+":"+min+":"+sec;
	t=setTimeout("fuc()",1000);//调到1有奇效
	});

	$(function(){  //由于要控制相应span的显示隐藏，那么必须获取li的位置，所以使用each（）遍历。
       $(".tab li").each(function(index){
            $(this).click(function(){
            	$(".tab li").removeClass("choosed");
		 		$(this).addClass("choosed");
                $(".tab li p").removeClass("red");
		 		$(this).find("p").addClass("red");
                $(".page span:eq("+index+")").show().siblings().hide();
                $(".picture img:eq("+index+")").show().siblings().hide();

                //给span加div是因为不加的话会把ul也隐藏，因为那样ul跟span是同级元素。
            });
       });
    })
   $(function(){
        $('.tab li:not(:has(*))').html("<p>a</p>");//获取没有子节点的元素
    });