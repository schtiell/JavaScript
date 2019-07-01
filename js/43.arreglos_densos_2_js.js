function arreglo (arreglo) {
	// body... 

	var numero;
	var j = 0;
	var k = 0;

	arreglo_menor = new Array();
	arreglo_mayor = new Array();

	for (var i = 0; i < arreglo.length; i++) {
		numero = parseInt(Math.random()*500);
		arreglo[i] = numero;
		document.write(arreglo[i] + '<br>');

		if (numero < 250){
			
			arreglo_menor[j] = numero;
			j += 1;
		}else {
			
			arreglo_mayor[k] = numero;
			k += 1;
		}
	}


	document.write('<br>'+'Los datos menores de 250 son: ' + '<br>');
	document.write('El arreglo tiene ' + arreglo_menor.length + ' datos' + '<br>');
	for (var i = 0; i < arreglo_menor.length; i++) {
		document.write(arreglo_menor[i] + '<br>');
	}

	document.write('<br>'+'Los de datos mayores de 250 son: ' + '<br>');
	document.write('El arreglo tiene ' + arreglo_mayor.length + ' datos' + '<br>');
	for (var i = 0; i < arreglo_mayor.length; i++) {
		document.write(arreglo_mayor[i] + '<br>');
	}
}


console.log('Llegue al script');

var arreglo_denso = new Array(10);

arreglo(arreglo_denso);


