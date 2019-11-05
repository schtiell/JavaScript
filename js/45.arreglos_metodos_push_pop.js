function capturarSueldos (arreglo) {

	// body...
	var monto

	do{

	monto = parseInt(prompt('Captura el valor del monto, (0 para salir)',''));
		if(monto != 0)	{
		arreglo.push(monto);
		}
	}while (monto != 0);

	return arreglo;
}


function calcularSueldos (arreglo) {
	
	// body...
	var total = 0;

	for (var i = 0; i < arreglo.length; i++) {
	total = total + arreglo[i];
	}

	return total;
}


console.log('Llegué');

var arreglo = [];
var totalsalarios;

arreglo = capturarSueldos(arreglo);
totalsalarios = calcularSueldos(arreglo);

document.write('Los sueldos capturados son: ' + arreglo + '<br>');
document.write('El total del sueldo es: ' + totalsalarios + '<br>');
document.write('La longitud del arreglo es: ' + arreglo.length + '<br>');
document.write('El ultimo salario capturado es: ' + arreglo.pop() + '<br>');
document.write('El arreglo ahora es: ' + arreglo + '<br>');
document.write('La longitud de la cadena eliminando el ultimo valor es: ' + arreglo.length);


