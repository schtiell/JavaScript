console.log('Llegue al script');

var array = new Array();
array[5]=100;
array[10]=200;

document.write('La longitud del array es: ' + array.length + '<br>');
for (var i = 0; i < array.length; i++) {
	document.write(array[i]+'<br>');
}
