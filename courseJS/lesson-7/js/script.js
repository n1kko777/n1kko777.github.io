window.addEventListener('DOMContentLoaded', function () {
	
	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (var i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if ( tabContent[b].classList.contains('hide') ) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	
	info.addEventListener('click', (event) => {
		let target = event.target;
		if ( target.className == 'info-header-tab' ) {
			for (let i = 0; i < tab.length; i++) {
				if ( target == tab[i] ) {
					showTabContent(i);
					break;
				}
			}
		}
	});	

	
	/*УСЛОЖНЕННОЕ ЗАДАНИЕ*/
	let floatBtn = document.createElement('BUTTON');
	floatBtn.textContent = 'Запустить анимацию';
	floatBtn.style.width = '200px';
	floatBtn.style.height = '50px';
	floatBtn.style.borderRadius = '50px';
	floatBtn.style.borderColor = 'white';
	floatBtn.style.background = 'white';
	floatBtn.style.position = 'absolute';
	floatBtn.style.top = '50%';
	floatBtn.style.left = '50%';
	floatBtn.style.transform = 'translateX(-50%)';
	floatBtn.style.cursor = 'pointer';
	document.querySelector('.main').appendChild(floatBtn);

	let degFB = 0;
	let rotateSwitch;
	function rotateFB() {
		degFB += 1;
		floatBtn.style.transform = 'translateX(-50%) rotate('+ degFB + 'deg)';

		rotateSwitch = requestAnimationFrame(rotateFB);
	}

	floatBtn.addEventListener('mousedown', () => {
		floatBtn.textContent = 'Остановить анимацию';
		requestAnimationFrame(rotateFB);
	});

	floatBtn.addEventListener('mouseup', () => {
		floatBtn.textContent = 'Запустить анимацию';
		cancelAnimationFrame(rotateSwitch);
	});


});