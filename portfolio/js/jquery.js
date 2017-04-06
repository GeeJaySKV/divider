jQuery(document).ready(function($) {
	// logo_animation
	$(".logo").hover(function() {
		$(this).stop(0, 0).animate({opacity: 1}, 500)
	}, function() {
		$(this).stop(0, 0).animate({opacity: 0.7}, 500)
	});

	//header_animation
	$(".header").hover(function() {
		$(this).stop(0, 0).animate({height: "5.5vh", opacity: 1}, 400)
	}, function() {
		$(this).stop(0, 0).animate({height: "3vh", opacity: 1}, 1000)
	});

	//contacts_animation
	$("#logo_vk").hover(function() {
		$(this).attr({
			src: "images/vk_2.png",
		});
	}, function() {
		$(this).attr({
			src: "images/vk_1.png",
		});
	});
	//lines_animation
/*	$("#top_right").animate({height: "100vh", opacity: 1}, 1000);
	$("#top_left").animate({height: "100vh", opacity: 1}, 1000);
	$("#bot_right").animate({height: "100vh", opacity: 1}, 1000);
	$("#bot_left").animate({height: "100vh", opacity: 1}, 1000); */
	$(".header").animate({opacity: 1}, 1000);
	$(".footer").animate({opacity: 1}, 1000);
});

