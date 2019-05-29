//Definición de las clases

//Clase Persona
//Constructor de la clase Persona
function Persona () {
	
	// Métodos de la clase Persona
	this.cargarNombre = cargarNombre;
	this.cargarEdad = cargarEdad;

	function cargarNombre () {
		this.nombre = prompt('Registra tu nombre: ');
	}

	function cargarEdad () {
		this.edad = prompt('Registra tu edad');
	}
}


//Clase Empresa
//Constructor de la clase Empresa

function Empresa () {
	// Atributos de la clase
	this.edad = edad;
	
	this.analizarEdad = analizarEdad;

	//Método de la clase Empresa
	function analizarEdad (edadmaxima) {
		this.contador = 0;

		if (edad >= 60) {
			this.contador = this.contador + 1;
		}
	}

}

//Instancia de la clase Persona
var persona1 = new Persona();
persona1.cargarNombre();
persona1.cargarEdad();

var nombre = persona1.nombre;
var edad = persona1.edad;

//Instancia de la clase Empresa
var edadLaboral = new Empresa();

document.write('Persona 1: <br>Nombre: ' + nombre + '<br>Edad: ' + edad +'<br>');
edadLaboral.analizarEdad(persona1.edad);

document.write('========================================<br>')



var persona2 = new Persona();
persona2.cargarNombre();
persona2.cargarEdad();

var nombre = persona2.nombre;
var edad = persona2.edad;

//Instancia de la clase Empresa
var edadLaboral = new Empresa();

document.write('Persona 2: <br>Nombre: ' + nombre + '<br>Edad: ' + edad +'<br>');
edadLaboral.analizarEdad(persona2.edad);

document.write('========================================<br>')

var persona3 = new Persona();
persona3.cargarNombre();
persona3.cargarEdad();

var nombre = persona3.nombre;
var edad = persona3.edad;

//Instancia de la clase Empresa
var edadLaboral = new Empresa();

document.write('Persona 3: <br>Nombre: ' + nombre + '<br>Edad: ' + edad +'<br>');
edadLaboral.analizarEdad(persona3.edad);

document.write('Personas mayores de 60 años: ' + edadLaboral.contador);
