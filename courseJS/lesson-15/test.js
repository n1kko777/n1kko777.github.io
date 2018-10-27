describe('Сумма', function () {
	it('Возвращает ли значение true?', function () {
		assert.typeOf(sum(2,2), 'boolean');
	});
});

describe('Значение переменной', function () {
	it('Переменная равна 5?', function () {
		assert.equal(num, 5);
	});
});

describe('Функция each', function () {
	it('Что вернет?', function () {
		assert.typeOf(each(arr, myFunc), 'array');
	});
	it('Какой тип?', function () {
		assert.property(each(arr, myFunc), [1, 2, 3]);
	});
	it('Длина = 3?', function () {
		assert.lengthOf(each(arr, myFunc), 3);
	});
});