$(document).ready(function(){
	$('#jp').fadeIn(2000);
	$('#jsmall').delay(1000).fadeIn(1000);
	$('#jsmall').animate({
		top: '-60px',
	}, 750);

	$('#jpc').fadeIn(2000);
	$('#jsmallc').delay(1000).fadeIn(1000);
	$('#jsmallc').animate({
		top: '-60px',
	}, 750);


	$('.link').on('hover', function(){
		$(this).css({
			'color': 'grey'
		});
	});

	$('.link').hover(function(){
		$(this).css('color', 'grey');
		}, function(){
		$(this).css('color', 'black');
	});
});




 // $("p").hover(function(){
 //        $(this).css("background-color", "yellow");
 //        }, function(){
 //        $(this).css("background-color", "pink");
 //    });