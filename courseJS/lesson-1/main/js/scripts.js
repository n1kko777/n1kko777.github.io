let budget = prompt('Ваш бюджет?', '');
let shopName = prompt('Название вашего магазина?', '');

let mainList = {
	money: budget,
	shop: shopName,
	shopGoods: [],
	employers: {},
	open: false
};
for (var i = 0; i < 3; i++) {
	mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?', '');
}

console.log(mainList);
alert('Ваш бюджет на день равен ' + mainList.money/30);