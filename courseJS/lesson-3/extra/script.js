let str = 'урок-3-был слишком легким';
str = str.charAt( 0 ).toUpperCase() + str.slice( 1, str.length ) ;
console.log(str);
for (var i = 0; i < str.length; i++) {
	
	if ( str.charAt( i ) == '-' ) {
		str = str.replace('-', ' ');
	console.log(str);
	}
}

str = str.replace(' легким', '');
console.log(str);

for (var i = 0; i < str.length; i++) {
	
	if ( i == str.length - 1 || i == str.length - 2 ) {
		str = str.replace(str.charAt( i ), 'о');
	}
}
alert(str);

let arr =  [20, 33, 1, 'Человек', 2, 3];
let newArr = [];
let j = 0;
let res = 0;
for(var i = 0; i < arr.length; i++) {
	if (typeof(arr[i]) === 'number') {
		newArr[j] = arr[i] ** 3;
		res = res + newArr[j];
		j++;
		console.log(res); 
	} 
}

alert(Math.sqrt(res));

