window.addEventListener('DOMContentLoaded', function () {
	
	let overlay = document.querySelector('.overlay'),
		popup = document.querySelector('.popup'),
		popup_btn = document.querySelector('#popup-btn'),
		main = document.querySelector('.main'),
		custom = document.querySelector('.custom'),
		custom_info = document.querySelector('.custom-info'),
		custom_char = document.querySelector('.custom-char'),
		custom_style = document.querySelector('.custom-style');

		function disappear(elem) {
			elem.style.transition = 'all 1s ease';
			elem.style.opacity = 0;
			setTimeout(() => {
			  elem.style.display = 'none';
			}, 1000);
		}

		function appear(elem) {
			elem.style.transition = 'all 1s ease';
			elem.style.opacity = 1;
			setTimeout(() => {
			  elem.style.display = 'block';
			}, 1000);
		}

		popup_btn.addEventListener('click', (e) => {

		  disappear(overlay);
		  disappear(main);	

		  custom.style.display = 'flex';

		  appear(custom_info);
		  appear(custom_char);
		  appear(custom_style);

		});

});