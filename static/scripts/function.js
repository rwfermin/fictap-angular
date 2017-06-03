$(document).ready(function() {
	
	$(".rslides").responsiveSlides({
		auto: true,
		pager: false,
		speed: 500,
		timeout: 3000
	});
	
	$(".featured").owlCarousel({
		itemsCustom: [
			[0, 1],
			[600, 2],
			[1200, 4]
		],
		autoPlay: 3000
	});

	$(".activities").owlCarousel({
		items: 1
	});
});
