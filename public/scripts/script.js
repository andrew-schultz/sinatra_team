$(document).ready(function(){
	$('#jp').fadeIn(2000);
	$('#jsmall').delay(1000).fadeIn(1000);
	$('#jsmall').animate({
		top: '-60px',
	}, 750);

	$('body').on('click', function(){
		$('#jpc').fadeIn(2000);
		$('#jsmallc').delay(1000).fadeIn(500);
		$('#jsmallc').animate({
			top: '-60px',
		}, 750);
	});		

	$('.link').hover(function(){
		$(this).css('color', 'grey');
		}, function(){
		$(this).css('color', 'black');
	});
	
	$("#modal").show();

	$("#modal").on('click', function(){
		$(this).hide();
	});

	$('#wd_one').hover(function(){
		$('#cc_one').animate({
			left: '55px',
			opacity: '1',
		}, 250);
	});

	$('#wd_two').hover(function(){
		$('#cc_two').animate({
			left: '55px',
			opacity: '1',
		}, 250);
	});

	$('#wd_three').hover(function(){
		$('#cc_three').animate({
			left: '55px',
			opacity: '1',
		}, 250);
	});

});