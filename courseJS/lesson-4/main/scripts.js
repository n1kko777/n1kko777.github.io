let money,
    name,
    time,
    price;

function start() {
    money = prompt("Ваш бюджет?", '');


    while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет?", '');
    }

    name = prompt("Название вашего магазина?", '').toUpperCase();
    time = 21;
}

start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    chooseGoods: function chooseGoods() {
        for (let i = 0; i < 5; i++) {
            let a = prompt("Какой тип товаров будем продавать?", '');

            if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                console.log("Всё верно");
                mainList.shopGoods[i] = a;
            } else {
                i = i - 1;
            }
        }
    },
    workTime: function workTime(time) {
        if (time < 0) {
            console.log('Такого не может быть!');
        } else if (time > 8 && time < 20) {
            mainList.open = true;
        } else if (time < 24) {
            console.log('Уже слишком поздно!');
        } else {
            console.log('В сутках только 24 часа!');
        }
    },
    dayBudget: function dayBudget() {
        alert("Ежедневный бюджет " + mainList.budget / 30);
    },
    makeDiscount: function makeDiscount() {
        if (mainList.discount == true) {
            price = (price / 100) * 80;
        }
    },
    hireEmployers: function hireEmployers() {
        for (let i = 1; i < 4; i++) {
            let name = prompt("Имя сотрудника", '');
            mainList.employers[i] = name;
        }
    },
    chooseShopItems: function chooseShopItems() {
    	let items = prompt('Перечислите через запятую товары', '');

    	while ( (typeof(items)) !== 'string' || (typeof(items)) == null || items == '' ) {
    			alert('Неверный формат данных! Повторите ввод');
    	    items = prompt('Перечислите через запятую товары', '');    	    
    	}

    	mainList.shopItems = items.split(',');

    	let extra = prompt('Подождите, еще?', '');
    	if ( (typeof(extra)) === 'string' && (typeof(extra)) != null && extra != '' ) {
    		mainList.shopItems.push(extra);
    	}
    	
    	mainList.shopItems.sort();
    },
    buyProducts: function buyProducts() {
    	let productItemList = '';
    	mainList.shopItems.forEach(function (item,i) {
    		productItemList = productItemList + '\n' + (i+1) + ')' + item;
    		
    	});
    	alert('Унас вы можете купить: ' + productItemList );
    }
};

console.log('Наш магазин включает в себя: ');
for( let shopInfo in mainList ) {
	console.log(shopInfo);
} 