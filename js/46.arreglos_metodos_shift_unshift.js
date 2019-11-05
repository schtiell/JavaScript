function llenarArray () {
	// body... 
	var valor;
	var arreglo = new Array();

	do{

		valor = parseInt(prompt('Inserta el valor',''));

		if (valor < 100){

			arreglo.unshift(valor);

		}else if (valor >= 100){
			
			arreglo.push(valor);

		}

	}while (valor != 0);

	arreglo.shift();

	return arreglo;

}


function imprimirArreglo (arreglo) {
	// body... 
	for (var i = 0; i < arreglo.length; i++) {
		document.write('<strong>' + arreglo[i] + ' ' + '</strong>');
	}
}

//Mensaje en consola
console.log('Llegué');

//Variable de 
var arreglo;

arreglo = llenarArray();
document.write('El resultado es: ' + '<br>');
imprimirArreglo(arreglo);


