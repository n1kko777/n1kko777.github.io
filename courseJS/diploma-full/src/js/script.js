window.addEventListener('DOMContentLoaded', function() {

    let color, hair, clothes, valStart, valEnd;

    let overlay = document.querySelector('.overlay'),
        popupBtn = document.querySelector('#popup-btn'),
        main = document.querySelector('.main'),
        custom = document.querySelector('.custom'),
        customInfo = document.querySelector('.custom-info'),
        customChar = document.querySelector('.custom-char'),
        customStyle = document.querySelector('.custom-style');

    function disappear(elem) {
        elem.style.transition = 'all 1s ease';
        elem.style.opacity = 0;
        setTimeout(() => {
            elem.style.display = 'none';
        }, 1000);
    }

    function appear(elem) {
        elem.style.transition = 'all 1s ease';
        elem.style.opacity = 1;
        setTimeout(() => {
            elem.style.display = 'block';
        }, 1000);
    }

    popupBtn.addEventListener('click', (e) => {

        disappear(overlay);
        disappear(main);

        custom.style.display = 'flex';

        appear(customInfo);
        appear(customChar);
        appear(customStyle);


        defaultMale();

    });


    let personSkin = document.querySelector('.person-skin'),
        personClothes = document.querySelector('.person-clothes'),
        personHair = document.querySelector('.person-hair'),
        personShoes = document.querySelector('.person-shoes'),
        sex = document.querySelectorAll('input[type=radio]'),
        skinColor = document.querySelectorAll('.skin-color'),
        hairStyle = document.querySelectorAll('.hair-style'),
        clothesStyle = document.querySelectorAll('.clothes-style');

        personShoes.style.backgroundImage = 'url(../img/clothes/construct/shoes.png)';
    function defaultMale() {
        color = 1;
        hair = 1;
        clothes = 1;
        valStart = 1;
        valEnd = 2;
        personSkin.style.backgroundImage = 'url(../img/skin/skin-' + valStart + '.png)';
        personClothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-' + clothes + '.png)';
        personHair.style.backgroundImage = 'url(../img/hair/construct/hair-' + hair + '.png)';

        for (let i = 0; i < hairStyle.length; i++) {
            hairStyle[i].style.display = 'none';
            clothesStyle[i].style.display = 'none';
        }

        hairStyle[0].style.display = 'block';
        clothesStyle[0].style.display = 'block';
    }

    function defaultFemale() {
        color = 1;
        hair = 4;
        clothes = 4;
        valStart = 4;
        valEnd = 5;
        personSkin.style.backgroundImage = 'url(../img/skin/skin-' + valStart + '.png)';
        personClothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-' + clothes + '.png)';
        personHair.style.backgroundImage = 'url(../img/hair/construct/hair-' + hair + '.png)';

        for (let i = 0; i < hairStyle.length; i++) {
            hairStyle[i].style.display = 'none';
            clothesStyle[i].style.display = 'none';
        }

        hairStyle[3].style.display = 'block';
        clothesStyle[3].style.display = 'block';
    }

    sex[0].addEventListener('click', () => {
        for (let i = 0; i < skinColor.length; i++) {
            skinColor[i].style.display = 'none';
        }
        skinColor[0].style.display = 'block';
        if (sex[0].checked) {
            defaultMale();
        }
    });
    sex[1].addEventListener('click', () => {
        for (let i = 0; i < skinColor.length; i++) {
            skinColor[i].style.display = 'none';
        }
        skinColor[0].style.display = 'block';
        if (sex[1].checked) {
            defaultFemale();
        }
    });


    let next = document.querySelectorAll('.next'),
        prev = document.querySelectorAll('.prev');


    function addItems(parent, pos) {
        parent.children[pos].style.display = 'none';
        parent.children[pos + 1].style.display = 'block';
        pos++;
    }
    for (let i = 0; i < next.length; i++) {
        next[i].addEventListener('click', function() {
            let parent = document.querySelector('.' + this.parentElement.getAttribute('class'));

            switch (i) {
                case 0:
                    if (color <= 2) {
                        addItems(parent, color);
                        color++;
                        if (valEnd == 5) {
                            personSkin.style.backgroundImage = 'url(../img/skin/skin-' + (color + 3) + '.png)';
                        } else {
                            personSkin.style.backgroundImage = 'url(../img/skin/skin-' + color + '.png)';
                        }


                    }
                    break;
                case 1:
                    if (hair <= valEnd) {
                        addItems(parent, hair);
                        hair++;
                        personHair.style.backgroundImage = 'url(../img/hair/construct/hair-' + hair + '.png)';
                    }
                    break;
                case 2:
                    if (clothes <= valEnd) {
                        addItems(parent, clothes);
                        clothes++;
                        personClothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-' + clothes + '.png)';
                    }
                    break;
                default:

                    break;
            }
        });
    }


    function removeItem(parent, pos) {
        parent.children[pos].style.display = 'none';
        parent.children[pos - 1].style.display = 'block';
        pos--;
    }
    for (let i = 0; i < prev.length; i++) {
        prev[i].addEventListener('click', function() {
            let parent = document.querySelector('.' + this.parentElement.getAttribute('class'));
            switch (i) {
                case 0:
                    if (color > 1) {
                        removeItem(parent, color);
                        color--;
                        if (valEnd == 5) {
                            personSkin.style.backgroundImage = 'url(../img/skin/skin-' + (color + 3) + '.png)';
                        } else {
                            personSkin.style.backgroundImage = 'url(../img/skin/skin-' + color + '.png)';
                        }

                    }
                    break;
                case 1:
                    if (hair > valStart) {
                        removeItem(parent, hair);
                        hair--;
                        personHair.style.backgroundImage = 'url(../img/hair/construct/hair-' + hair + '.png)';
                    }
                    break;
                case 2:
                    if (clothes > valStart) {
                        removeItem(parent, clothes);
                        clothes--;
                        personClothes.style.backgroundImage = 'url(../img/clothes/construct/clothes-' + clothes + '.png)';
                    }
                    break;
                default:

                    break;
            }
        });
    }



    let ready = document.querySelector('#ready'),
        name = document.querySelector('#name'),
        age = document.querySelector('#age'),
        select = document.querySelector('#select'),
        bio = document.querySelector('#bio'),
        condidateInfo = {
        	gender: '',
        	name: '',
            age: '',
            select: '',
            bio: '',
            skinColor: '',
            skinHair: '',
            skinClothes: '',
            skinShoes: '' 
        };

    function showError(elem) {
        elem.style.cssText = "border: 1px solid red;";
        elem.setAttribute('placeholder', 'Заполните данное поле!!!');
    }

    ready.addEventListener('click', function() {


    	if (name.value != '') {
            condidateInfo.name = name.value;
        } else {
            showError(name);
        }
        if (age.value != '') {
            condidateInfo.age = age.value;
        } else {
            showError(age);
        }
        condidateInfo.select = select.value;
        if (bio.value != '') {
            condidateInfo.bio = bio.value;
        } else {
            showError(bio);
        }
        

        condidateInfo.gender = document.querySelector('input[type=radio]:checked').value;
        
        condidateInfo.skinColor = personSkin.style.backgroundImage;
        condidateInfo.skinColor = condidateInfo.skinColor.replace(/"/g, '');

        condidateInfo.skinHair = personHair.style.backgroundImage;
        condidateInfo.skinHair = condidateInfo.skinHair.replace(/"/g, '');

        condidateInfo.skinClothes = personClothes.style.backgroundImage;
        condidateInfo.skinClothes = condidateInfo.skinClothes.replace(/"/g, '');
        
        condidateInfo.skinShoes = personShoes.style.backgroundImage;
        condidateInfo.skinShoes = condidateInfo.skinShoes.replace(/"/g, '');

        if (name.value != '' && age.value != '' && bio.value != '') {
        	
        	disappear(custom);
        	appear(main);

        	let newCondidate = document.createElement('div');
        	newCondidate.classList.add('main-cards-item');
        	newCondidate.classList.add('rollIn');
        	document.querySelector('.main-cards').appendChild(newCondidate);

        	let candidateBlock = document.createElement('div');
        	candidateBlock.classList.add('candidate-block');
	        	let candidatePhoto = document.createElement('div');
	        	candidatePhoto.classList.add('photo');
	        	candidatePhoto.style.position = 'relative';
	        	candidatePhoto.innerHTML = '<div style="background: ' +
	        			condidateInfo.skinColor + 'center no-repeat; background-size: cover; '+ 
	        			'width: 90px; height: 195px; position: absolute; left: 50%; '+
	        			'transform: translateX(-50%);"></div>'+ 
	        			'<div style="background: ' +
	        			condidateInfo.skinHair + 'center no-repeat; background-size: cover; '+ 
	        			'width: 90px; height: 195px; position: absolute; left: 50%; '+
	        			'transform: translateX(-50%);"></div>' +
	        			'<div style="background: ' +
	        			condidateInfo.skinClothes + 'center no-repeat; background-size: cover; '+ 
	        			'width: 90px; height: 195px; position: absolute; left: 50%; '+
	        			'transform: translateX(-50%);"></div>' +
	        			'<div style="background: ' +
	        			condidateInfo.skinShoes + 'center no-repeat; background-size: cover; '+ 
	        			'width: 90px; height: 195px; position: absolute; left: 50%; '+
	        			'transform: translateX(-50%);"></div>';
	        	let condidateResult = document.createElement('div');
	        	condidateResult.classList.add('result');
	        		
	        		let condidateResultCount = document.createElement('div');
	        		condidateResultCount.classList.add('result-count');
	        		condidateResultCount.textContent = '0%';
	        		let condidateResultProgress = document.createElement('div');
	        		condidateResultProgress.classList.add('progress');
	        		condidateResultProgress.innerHTML = '<div class="progress-bar progress-bar-3"></div>';
	        		
	        		condidateResult.appendChild(condidateResultCount);
	        		condidateResult.appendChild(condidateResultProgress);
	        	

	        	candidateBlock.appendChild(candidatePhoto);
	        	candidateBlock.appendChild(condidateResult);


			let name = document.createElement('div');
			name.classList.add('name');
			name.textContent = condidateInfo.name;	        
			let age = document.createElement('div');
			age.classList.add('age');
			age.textContent = condidateInfo.age + ' лет';
			let sex = document.createElement('div');
			sex.classList.add('sex');
			sex.textContent = condidateInfo.gender;
			let views = document.createElement('div');
			views.classList.add('views');
			views.textContent = condidateInfo.select;
			let bio = document.createElement('div');
			bio.classList.add('bio');
			bio.textContent = condidateInfo.bio;

        	newCondidate.appendChild(candidateBlock);

        	newCondidate.appendChild(name);
        	newCondidate.appendChild(age);
        	newCondidate.appendChild(document.createTextNode('Пол:'));
        	newCondidate.appendChild(sex);
        	newCondidate.appendChild(document.createTextNode('Полит. взгляды:'));
        	newCondidate.appendChild(views);
        	newCondidate.appendChild(document.createTextNode('Биография'));
        	newCondidate.appendChild(bio);
        }

    });




});