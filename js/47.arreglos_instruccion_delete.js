//Funcion para llenar el arreglo con datos aleatorios en 1 y 100
function llenarArreglo (arreglo) {
	// body... 

	for (var i = 0; i < arreglo.length; i++) {
		arreglo[i] = parseInt((Math.random()*100)+1);
	}

	return arreglo;
}

//Funcion para imprimir el arreglo
function imprimirArreglo (arreglo) {
	// body... 
	document.write('El arreglo original es: ' + '<br>');
	for (var i = 0; i < arreglo.length; i++) {
		document.write(arreglo[i] + ' ');
	}
}

//Funcion para eleminiar los datos de las posiciones pares del arreglo e imprimir el arreglo modificado
function imprimirArregloModificado (arreglo) {
	// body... 
	for (var i = 0; i < arreglo.length; i=i+2) {
		delete arreglo[i];
	}

	document.write('<br>' + 'El arreglo modificado es: ' + '<br>');

	for (var i = 0; i < arreglo.length; i++) {
		document.write(arreglo[i] + ' ');
	}

}

//Mensaje en consola
console.log('Llegué');

//Se crea un arrelgo de 10 posiciones
var arreglo = new Array(10);

//Llamada a la funcion llenarArreglo enviando el arreglo vacio
arreglo = llenarArreglo(arreglo);

//Llamada a la funcion imprimirArreglo enviando el arreglo con datos
imprimirArreglo(arreglo);

//Llamada a la funcion imprimirArregloModificado enviando el arreglo con datos
imprimirArregloModificado(arreglo);