let openBtn = document.getElementById('open-btn');

let main = document.getElementsByClassName('main');
let mainInfo = document.getElementsByClassName('main-info');
let name = document.getElementsByClassName('name');
let nameValue = document.getElementsByClassName('name-value');
let budget = document.getElementsByClassName('budget');
let budgetValue = document.getElementsByClassName('budget-value');
let goods = document.getElementsByClassName('goods');
let goodsValue = document.getElementsByClassName('goods-value');
let items = document.getElementsByClassName('items');
let itemsValue = document.getElementsByClassName('items-value');
let employers = document.getElementsByClassName('employers');
let employersValue = document.getElementsByClassName('employers-value');
let discount = document.getElementsByClassName('discount');
let discountValue = document.getElementsByClassName('discount-value');
let isopen = document.getElementsByClassName('isopen');
let isopenValue = document.getElementsByClassName('isopen-value');

let goodsItem = document.getElementsByClassName('goods-item');

let btns = document.getElementsByTagName('button');

for (var i = 0; i < btns.length; i++) {
	btns[i].style.cursor = 'pointer';
}

let enterItems = document.querySelector('#items');

let enterTime = document.querySelector('#time');

let enterBudget = document.querySelector('#budget');

let hireEmployers = document.querySelectorAll('.hire-employers-item');