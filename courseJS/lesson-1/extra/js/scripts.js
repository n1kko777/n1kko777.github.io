/*Урок 1 усложненное задание*/
let num = 33721;
let value = 1;

while (num != 0) {
	console.log(num);
	value = value * (num%10);
	num = parseInt(num/10);

}
	console.log(value);
alert(value**3);