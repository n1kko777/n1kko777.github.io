function getFriendlyNumbers(start, end) {
	
	let startSum = getDivisorsSum(start);
	let endSum = getDivisorsSum(end);

	return startSum == end && start == endSum;
}

/*Передаем делители для подсчета суммы*/
function getDivisorsSum(num) {
	return getSum(getDivisors(num));
}

/*Определяем делители числа*/
function getDivisors(num) {
	let arr = [];
	for (var i = 1; i < num; i++) {
		if ( num % i == 0 ) {
			arr.push(i);
		}
	}
	return arr;
}

/*Подсчитываем сумму делителей*/
function getSum(arr) {
	
	let summa = 0;
	
	for (var i = 0; i < arr.length; i++) {
		summa += arr[i];
	}
	return summa;
}

let start = prompt('Введите начальное значение', '');
let end = prompt('Введите конечное значение', '');
console.log();

let res = [];
if ( !isNaN( start ) && !isNaN( end ) && start < end && start > 0 && end > 0 ) {

	for (var i = start; i <= end; i++) {
		for (var j = end; j >= start; j--) {
			
			if ( getFriendlyNumbers(i, j) ) {
				if (i != j && j > i ) {
					res.push( '[' + [i, j] + ']' );
				}
			}

		}
	}

} else {
	res.push(false);
}

alert( '[' + res + ']' );