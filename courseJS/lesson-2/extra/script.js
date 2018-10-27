let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let calender = document.getElementById('week');
let date = new Date();

for ( var i = 0; i < week.length; i++ ) {

	calender.getElementsByTagName('li')[i].innerHTML = week[i];
	if ( i == 0 || i == 6 ) {
		calender.getElementsByTagName('li')[i].style.fontWeight = 'bold';
	}
	if (i == date.getDay() ) {
		calender.getElementsByTagName('li')[i].style.fontStyle = 'italic';
	}
}

let arr = [];

for (var i = 0; i < 7; i++) {
	arr[i] = prompt('Введите чесло','');
	if ( arr[i].charAt(0) == '3' || arr[i].charAt(0) == '7' ) {console.log(arr[i]);}
}