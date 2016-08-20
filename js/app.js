$(document).ready(function(){
	$('.js-trigger').on('click',function(){
		$('.js-sliding-panel').toggleClass('is-visible');
		$(this).toggleClass('is-visible');
	});
});