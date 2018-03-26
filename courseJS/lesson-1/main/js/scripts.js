let youMoney = prompt('Ваш бюджет?', '');
let namePrice = prompt('Название вашего магазина?', '');

let mainList = {
	money: youMoney,
	price: namePrice,
	shopGoods: [],
	employers: {},
	open: false
};
for (var i = 0; i < 3; i++) {
	mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?', '');
}

console.log(mainList);
alert('Ваш бюджет на день равен ' + mainList.money/30);