

//Constructor de la Clase Persona
function Persona (nombre,edad) {
	// body... 
	this.nombre = nombre;
	this.edad = edad;
	this. imprimirNombre = imprimirNombre;
}

//Metódo para imprimir el nombre y la edad de las personas
function imprimirNombre() {
	//body...
	document.write(this.nombre + ' tiene: ' + this.edad + ' años');
}


//Instancia de la clase array de 4 posiciones
var arreglo = new Array(4);

//Instancia de la clase Persona la cual inicia el constructor de la misma
arreglo[0] = new Persona('juan',85);
arreglo[1] = new Persona('andrea',85);
arreglo[2] = new Persona('pedro',45);
arreglo[3] = new Persona('luis',70);

//Variable iniciada en cero la cual tomara la mayor edad
var personaMayorEdad = 0;
var contador = 0;

//Este for compara la posicion actual del arreglo y el valor contenido en la variable personaMayorEdad, la cuel debe tener la edad más alta de las personas
for (var i = 0; i < arreglo.length; i++) {
	if (arreglo[i].edad >= arreglo[personaMayorEdad].edad) {
		//Si el valor de i es mayor a personaMayorEdad, esta toma el valor de i
		personaMayorEdad = i;
		contador = contador + 1;

	}
}

document.write('Personas con mayor edad son: '+contador+'<br>');

//Este for compara si la posición en i es igual a la personaMayorEdad, si cumple la condición llama al metodo de la clase para imprimir sus datos
for (var i = 0; i < arreglo.length; i++) {
	if(arreglo[i].edad == arreglo[personaMayorEdad].edad){
		arreglo[i].imprimirNombre();
		document.write('<br>');
	}
}

