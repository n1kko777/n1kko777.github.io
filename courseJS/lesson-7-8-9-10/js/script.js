window.addEventListener('DOMContentLoaded', function () {
	
	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
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

	function animate(draw, duration) {
	    let start = performance.now(); //возвращаем временную метку
	   requestAnimationFrame(function animate(time) {
	   // при помощи requestAnimationFrame мы занимаемся анимацией
	       let timePassed = time - start;
	       if (timePassed > duration) {
	           timePassed = duration;
	       }
	       draw(timePassed);
	       if (timePassed < duration) {
	           requestAnimationFrame(animate);
	       }
	   })
	};
	let menu = document.getElementsByTagName('nav')[0];
	menu.addEventListener('click', (event) => {
	   event.preventDefault();
	   animate(function(timePassed) {
	       let target = event.target;
	     if (target.tagName = 'li') {
	       let section = document.getElementById(target.getAttribute('href').slice(1));
	       window.scrollBy(0, section.getBoundingClientRect().top / 20);
	     }  
	   }, 1500)
	   
	});

	/*Урок 9*/

	// Modal Window

	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close'),
			descrBtn = document.querySelectorAll('.description-btn');

	overlay.classList.remove('fade');
	overlay.classList.add('rollIn');

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	for (let i = 0; i < descrBtn.length; i++) {
		descrBtn[i].addEventListener('click', function () {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	}

	close.addEventListener('click', () => {
		more.classList.remove('more-splash');
			overlay.style.display = 'none';
		document.body.style.overflow = '';
	});
	
});