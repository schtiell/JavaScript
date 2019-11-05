
function numeroAleatiorios () {
	// body... 
	var arreglo = new Array();
	var numero;

	for (var i = 0; i < 5; i++) {
		
		numero = (Math.random()* 1000) + 1;
		arreglo.push(parseInt(numero));
	}	

	return arreglo;
}


function ultimosValores (arreglo) {
	// body... 
	var ultimos = arreglo.pop() + arreglo.pop();

	 for (var i = 0; i < arreglo.length; i++) {
	  document.write(arreglo[i] + ',');
	}

	return arreglo.length
}

console.log('Llegué');

arreglo = numeroAleatiorios();

document.write(arreglo + '<br>');

longitud = ultimosValores(arreglo);

document.write('<br>'+'La longitud del arreglo es: ' + longitud);


