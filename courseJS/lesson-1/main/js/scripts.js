let budget = prompt('Ваш бюджет?');
let shopName = prompt('Название вашего магазина?');
let shopGoods = [];
let employers = {};
let open = false;

for (var i = 0; i < 3; i++) {
	shopGoods[i] = prompt('Какой тип товаров будем продавать?');
}

let mainList = {
	"Ваш бюджет": budget,
	"Имя магазина": shopName,
	"Массив товаров": shopGoods,
	"Сотрудники": employers,
	isOpen: open
};

alert('Ваш бюджет на день равен ' + mainList["Ваш бюджет"]/30);