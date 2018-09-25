import './styles.sass';

const title = 'Test';


$(document).ready(function(){
	$('#1week_open').click(function(){
		if (!($('#1week_item').hasClass('active'))){
			$('#1week_item').addClass('active');
			$('#1week_item').siblings('.plan__item').removeClass('active');
			$('#3week_item').siblings('.plan__item').removeClass('active');
			$('#3week_item').removeClass('active');
		};
		$('#1week').addClass('active');
		$('#1week').siblings().removeClass('active');
	});
	$('#2week_open').click(function(){
		if (!($('#2week_item').hasClass('active'))){
			$('#2week_item').addClass('active');
			$('#2week_item').siblings('.plan__item').removeClass('active');
			$('#3week_item').siblings('.plan__item').removeClass('active');
			$('#3week_item').removeClass('active');
		};
		$('#2week').addClass('active');
		$('#2week').siblings().removeClass('active');
	});
	$('#3week_open').click(function(){
		if (!($('#3week_item').hasClass('active'))){
			$('#3week_item').addClass('active');
			$('#3week_item').siblings('.plan__item').removeClass('active');
			$('#1week_item').siblings('.plan__item').removeClass('active');
			$('#1week_item').removeClass('active');
		};
		$('#3week').addClass('active');
		$('#3week').siblings().removeClass('active');
	});
	$('#4week_open').click(function(){
		if (!($('#4week_item').hasClass('active'))){
			$('#4week_item').addClass('active');
			$('#4week_item').siblings('.plan__item').removeClass('active');
			$('#1week_item').siblings('.plan__item').removeClass('active');
			$('#1week_item').removeClass('active');
		};
		$('#4week').addClass('active');
		$('#4week').siblings().removeClass('active');
	});
	$('.close').click(function(){
		$('.close').parent('.plan__content').removeClass('active');	
	});
});