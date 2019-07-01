
function arreglo_denso (arreglo) {
	// body... 
	var contador = 0;
	var numero;
	var acumulador = 0;

	do{
		numero = parseInt(prompt('Ingresa un valor diferente de cero: '));
		
		if (numero != 0) {
			arreglo[contador] = numero;
			contador += 1;
		}
		
	}while (numero != 0);
	
	for (var i = 0; i < arreglo.length; i++) {
		acumulador = acumulador + arreglo[i];
	}
	
	document.write('Se ingresaron: ' + arreglo.length + ' datos' + '<br>');
	document.write('La sumatoria de los valores del arreglo es: ' + acumulador);

}


console.log('Llegué al script');
var arreglo = new Array();

arreglo_denso(arreglo);