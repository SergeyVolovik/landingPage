autoSlider();
var left  = 0;
var	timer = 0;

function autoSlider() {
	timer = setTimeout(function (){
		var item = document.getElementById('container__item');
			left = left - 100;
			if (left < -200) {
				left = 0;
				clearTimeout(timer);
			}
			container__item.style.left = left + '%';
			autoSlider();	
		}, 4500);
}