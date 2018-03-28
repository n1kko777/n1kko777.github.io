let budget,
		shopName,
		time,
		price;

let mainList = {
	money: budget,
	shop: shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
};

function start() {
	budget = prompt('Ваш бюджет?', '');

	while (isNaN(budget) || budget == '' || budget ==  null ) {
		budget = prompt('Ваш бюджет?', '');
	}
	shopName = prompt('Название вашего магазина?', '').toUpperCase();
}

start();

function chooseGoods(callback) {
	for (var i = 0; i < 5; i++) {
		let a = prompt('Какой тип товаров будем продавать?', '');

		if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) 
			{
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
				callback(i);
			} else {
				alert('Неверный формат данных! Повторите ввод');
				i = i - 1;
			}			
	}
}

chooseGoods(makeDiscount);

function makeDiscount(pos) {
	price = prompt ( 'Введите стоимость ' + mainList.shopGoods[pos], '' );
	while (isNaN(price) || price == '' || price ==  null ) {
		price = prompt( 'Введите стоимость ' + mainList.shopGoods[pos], '' );
	}
	let disc = confirm('Сделать скидку на товар?', '');
	if ( disc ) {
		mainList.discount = true;
		price = price - (price*0.2);
		alert('Товар: ' + mainList.shopGoods[pos] + '\n' + 'Цена: ' + price + ' (80%)');
	} else {mainList.discount = false;}

}

function workTime(time) {
	// body...
	if ( time < 0 ) {
		console.log('Такого не может быть!');
	} else if ( time > 8 && time < 19 ) {
		console.log('Время работать!');
		} else if ( time < 24  ) {
			console.log('Уже слишком поздно');
			} else {
				console.log('В сутках тоьлко 24 часа');
		}
}

workTime(18);

function nameOfEmployer() {
	mainList.employers.name = prompt('Введите имя сотрудника ', '');
	console.log(mainList);
}

nameOfEmployer();

for (var i = 1; i < 5; i++) {
	mainList.employers[i] = prompt('Введите имя сотрудника ', '');
	console.log(mainList);
}

function cashOnDay(cash) {
	alert('Ваш бюджет на день равен ' + cash/30);
}

cashOnDay(mainList.money);
