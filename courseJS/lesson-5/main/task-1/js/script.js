let menu = document.querySelectorAll('.menu-item');

menu[1].innerText = 'Второй пункт';
menu[2].innerText = 'Третий пункт';

let newLi = document.createElement("LI");                
newLi.innerHTML = "Пятый пункт";   
newLi.classList.add('menu-item');

document.querySelector('.menu').appendChild(newLi);

let title = document.querySelector('.title');

title.innerText = 'Мы продаем только подлинную технику Apple';
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

let column = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');

column[1].removeChild(adv);

let prompt = document.querySelector('.prompt');
let ask = document.createElement('P3');
let inp = document.createElement('INPUT');
ask.innerText = 'Как вы относитесь к технике Apple?';
ask.style.fontSize = '22px';
ask.style.paddingBottom = '15px';
ask.style.display = 'block';
inp.innerHTML = 	'type="text"';
inp.style.display = 'block';
inp.style.width = '100%';
inp.style.height = '40px';
inp.style.fontSize = '22px';
prompt.appendChild(ask);
prompt.appendChild(inp);
