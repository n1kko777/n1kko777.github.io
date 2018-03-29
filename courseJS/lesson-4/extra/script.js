let arr = [];

function count() {
	let col = prompt('Сколько массивов включить во внутрь arr?', '1');
	let sum = 0;
	for (let i = 0; i < col; i++) {
		arr.push([]);
		for(let j = 0; j < 5; j++) {
			arr[i][j] = Math.floor(Math.random() * 11);
			sum = sum + arr[i][j];
		} 
	}

	console.log(arr);
	console.log('Сумма массива arr = ' + sum);
}

count();
