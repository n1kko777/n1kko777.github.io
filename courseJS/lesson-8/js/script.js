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

	
/*УСЛОЖНЕННОЕ ЗАДАНИЕ
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
	});*/


	/*Урок 8 + УСЛОЖНЕННОЕ ЗАДАНИЕ*/
	// Таймер

	let deadline = '2018-04-05';
	//new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor( (t/1000) % 60 ),
				minutes = Math.floor( (t/1000/60) % 60 ),
				hours = Math.floor( (t/(1000*60*60)) );

				return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};

	}

	function setClock(id, endtime) {
		
		let timer = document.getElementById(id),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds'); 

		function updateClock() {
			let t = getTimeRemaining(endtime);
			if ( t.total <= 0 ) {

				clearInterval(timeInterval);
				
			} else {
				hours.innerHTML = t.hours;
				minutes.innerHTML = t.minutes;
				seconds.innerHTML = t.seconds;
			}
		}

		if (getTimeRemaining(endtime).total >= 0 ) {
			updateClock();
			let timeInterval = setInterval(updateClock, 1000);
		}
		else {

				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
		}
	}

	setClock('timer', deadline);


	/*Прокрутка до элемента*/

	let step = 0,
			stepSwitch,
			stepTo,
			time,
			menu = document.getElementsByTagName('nav')[0],
			navTab = document.getElementsByTagName('a');

	function scrollToID(id) {
		let pos = document.querySelector(id);
				stepTo = pos.offsetTop - menu.offsetHeight,
				step = document.documentElement.scrollTop;
	}

	function stepGO() {
		if ( step < stepTo ) {
			step += 1;

			window.scrollTo(0, step);
			stepSwitch = requestAnimationFrame(stepGO);

		} else if ( step > stepTo ) {
			step -= 1;

			window.scrollTo(0, step);
			stepSwitch = requestAnimationFrame(stepGO);
			
		} else if ( step == stepTo ) {
		    cancelAnimationFrame(stepSwitch);
				clearInterval(time);
		}
	}

	for (let i = 0; i < navTab.length; i++) {
		navTab[i].addEventListener('click', (event) => {
				event.preventDefault();
				if ( event.target ) {
					scrollToID(event.target.getAttribute("href"));
					time = setInterval(function() {
					  requestAnimationFrame(stepGO);
					}, 100);
					
				}
			});
	}

});