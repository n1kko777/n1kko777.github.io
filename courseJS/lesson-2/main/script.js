let budget = prompt('Ваш бюджет?', '');
let shopName = prompt('Название вашего магазина?', '');
/*let time = 19;*/

/*if ( time < 0 ) {
	console.log('Такого не может быть!');
} else if ( time > 8 && time < 19 ) {
	console.log('Время работать!');
	} else if ( time < 24  ) {
		console.log('Уже слишком поздно');
		} else {
			console.log('В сутках тоьлко 24 часа');
		}*/

let mainList = {
	money: budget,
	shop: shopName,
	shopGoods: [],
	employers: {},
	open: false
};

for (var i = 0; i < 5; i++) {
	let a = prompt('Какой тип товаров будем продавать?', '');

	if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) 
		{
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			alert('Неверный формат данных! Повторите ввод');
			let a = prompt('Какой тип товаров будем продавать?', '');
			if ( ((typeof(a)) === 'string' || (typeof(a)) === null) && a != '' && a.length < 50 ) 
				{
					console.log('Все верно!');
					mainList.shopGoods[i] = a;
				}
		}					
}


// Способ 1;
/*let i = 0;
do {

	let a = prompt('Какой тип товаров будем продавать?', '');
		if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) 
			{
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else {
				alert('Неверный формат данных! Повторите ввод');
				let a = prompt('Какой тип товаров будем продавать?', '');
				if ( ((typeof(a)) === 'string' || (typeof(a)) === null) && a != '' && a.length < 50 ) 
					{
						console.log('Все верно!');
						mainList.shopGoods[i] = a;
					}
			}		
	i++;
}
while ( i < 5 );*/

// Способ 2;
/*let i = 0;
while( i < 5 ) {
	let a = prompt('Какой тип товаров будем продавать?', '');
		if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) 
			{
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else {
				alert('Неверный формат данных! Повторите ввод');
				let a = prompt('Какой тип товаров будем продавать?', '');
				if ( ((typeof(a)) === 'string' || (typeof(a)) === null) && a != '' && a.length < 50 ) 
					{
						console.log('Все верно!');
						mainList.shopGoods[i] = a;
					}
			}		
	i++;
}*/

console.log(mainList);
alert('Ваш бюджет на день равен ' + mainList.money/30);