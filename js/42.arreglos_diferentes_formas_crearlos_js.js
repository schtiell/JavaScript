console.log('Llegue al script');

var arreglo1 = new Array();
arreglo1[0] = 1;

var arreglo2 = [];
arreglo2[0] = 2;

var arreglo3 = new Array(5);
for (var i = 0; i < arreglo3.length; i++) {
	arreglo3[i] = i+1;
}

var arreglo4 = [1,'joaquin',8.65,true];



document.write('El valor del arreglo1 en la posición 0 es: ' + arreglo1);
document.write('<br>');
document.write('<br>');
document.write('El varlos del arreglo2 en la posición 0 es: ' + arreglo2);
document.write('<br>');
document.write('<br>');
document.write('Los valores en el arreglo3 son: ' + '<br>');

for (var i = 0; i < arreglo3.length; i++) {
	document.write('Areglo3 posiscion: ' + i + ' valor ' + arreglo3[i] + '<br>');
}
document.write('<br>');

document.write('Los valores del arreglo4 son: ' + '<br>');
for (var i = 0; i < arreglo4.length; i++) {
	document.write('Arreglo4 posicion: ' + i + ' valor ' + arreglo4[i] + '<br>' );
}

