import './styles.scss';
import './slick.css';
import $ from 'jquery';
import 'slick-carousel';

const title = 'Test';


$(function(){
	bannerSlider();
});
function bannerSlider() {
    if($('.main-banner').length >0) {
        $('.main-banner').slick({
	        slidesToShow: 1,
	        infinity: true,
	        arrows: true,
	        dots: true,
	        nextArrow: '<button type="button" class="slick-next"></button>'
        });
    }
}

$('.mobile-menu-btn').click(function(){
    $(this).toggleClass('mobile-menu-btn_close');
    $('.menu-mobile-wrap').toggleClass('show'); 
});