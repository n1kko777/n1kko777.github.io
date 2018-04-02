let openBtn = document.getElementById('open-btn'),

		 nameValue = document.getElementsByClassName('name-value')[0],
		 budgetValue = document.getElementsByClassName('budget-value')[0],
		 goodsValue = document.getElementsByClassName('goods-value')[0],
		 itemsValue = document.getElementsByClassName('items-value')[0],
		 employersValue = document.getElementsByClassName('employers-value')[0],
		 discountValue = document.getElementsByClassName('discount-value')[0],
		 timeValue = document.getElementsByClassName('time-value')[0],
		 isopenValue = document.getElementsByClassName('isopen-value')[0],
		 countValue = document.getElementsByClassName('count-budget-value')[0],
		 goodsItem = document.getElementsByClassName('goods-item'),
		 chooseItem = document.getElementsByClassName('choose-item')[0],
		 btns = document.getElementsByTagName('button'),
		 goods_btn = btns[1],
		 budget_btn = btns[2],
		 employers_btn = btns[3];

let enterItems = document.querySelector('#items');

let enterTime = document.querySelector('#time');

let enterBudget = document.querySelector('#budget');

let hireEmployers = document.querySelectorAll('.hire-employers-item');

let money,
    price;

for (var i = 0; i < btns.length; i++) {
	btns[i].style.cursor = 'pointer';
}


openBtn.addEventListener('click', () => {
	money = prompt("Ваш бюджет?", '');


	while (isNaN(money) || money == '' || money == null) {
	    money = prompt("Ваш бюджет?", '');
	}

	budgetValue.textContent = money;
	nameValue.textContent = prompt("Название вашего магазина?", '').toUpperCase();
});

goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goodsItem.length; i++) {
	    
	    let a = goodsItem[i].value;

	    if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
	        console.log("Всё верно");
	        mainList.shopGoods[i] = a;
	        goodsValue.textContent = mainList.shopGoods;
	    } else {
	        i = i - 1;
	    }
	}
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;

	if ( isNaN(items) && items != '' ) {
			mainList.shopItems = items.split(',');
			mainList.shopItems.sort();

			itemsValue.textContent = mainList.shopItems;
	}

});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;
	if (time < 0) {
	    console.log('Такого не может быть!');
	    mainList.open = false;
	} else if (time > 8 && time < 20) {
	    mainList.open = true;
	} else if (time < 24) {
	    console.log('Уже слишком поздно!');
	    mainList.open = false;
	} else {
	    console.log('В сутках только 24 часа!');
	    mainList.open = false;
	}

	if (mainList.open == true) {
		isopenValue.style.backgroundColor = 'green';
	} else {
		isopenValue.style.backgroundColor = 'red';
	}
});

budget_btn.addEventListener('click', () => {
	countValue.value = money / 30;

	/*УСЛОЖНЕННОЕ ЗАДАНИЕ - дисконтная система*/
	if ( countValue.value > 500 ) {
		discountValue.style.backgroundColor = 'green';
		discountValue.textContent = 'Скидка на всю продукцию 20%';
		discountValue.style.color = 'white';
	} else {discountValue.style.backgroundColor = 'green';}
});

employers_btn.addEventListener('click', () => {
	for (let i = 0; i < hireEmployers.length; i++) {
	    let name = hireEmployers[i].value;
	    mainList.employers[i] = name + ', ';

	    employersValue.textContent += mainList.employers[i];
	}
});

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    makeDiscount: function makeDiscount() {
        if (mainList.discount == true) {
            price = (price / 100) * 80;
        }
    },
    buyProducts: function buyProducts() {
    	let productItemList = '';
    	mainList.shopItems.forEach(function (item,i) {
    		productItemList = productItemList + '\n' + (i+1) + ')' + item;
    		
    	});
    	alert('У нас вы можете купить: ' + productItemList );
    }
};

// console.log('Наш магазин включает в себя: ');
// for( let shopInfo in mainList ) {
// 	console.log(shopInfo);
// } 