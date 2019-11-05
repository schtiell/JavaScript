
function solicitarNombres (arreglo) {
	// body... 
	var nombre;

	for (var i = 0; i < arreglo.length; i++) {
		nombre = prompt('Ingresa un nombre: ', '');
		arreglo[i] = nombre;
		document.write(arreglo[i] + ' ');
	}

	return arreglo;
}

function imprimirNombres(arreglo){

	arreglo.sort();

	for (var i = 0; i < arreglo.length; i++) {
		document.write(arreglo[i]);
	}
}

var arreglo = new Array(5);

solicitarNombres(arreglo);

console.log('Llegué');