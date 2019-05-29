//Funciones para e l ejercicio


//Clase Numeroquiniela
//Constructor de la clase Numeroquiniela
function Numeroquiniela(nom) {
	
	// atributos de la clase
	this.nombre = nom;

	//definiciónd de los métodos de la clase
	this.cargarnumero = cargarnumero;
	this.verificarsigano = verificarsigano;

	//Metodo
	function cargarnumero() {
		this.numero = prompt(this.nombre +', indica el numero de la quiniela');
	} 

	//Metodo
	function verificarsigano (num) {
		if (this.numero == num) {
			return true;
		}else {
			return false;
		}
	}
}


//Clase Sorteo
//Constructor de la clase Sorteo
function Sorteo () {
	// Atributo de la clase Sorteo
	this.numero = -1;

	//Definición del metodo sortear
	this.sortear = sortear;

	function sortear () {
		this.numero = parseInt(Math.random()*10)+1;
	}


}


//Creación del objeto o instancia de la clase Numeroquiniela
var jugador1 = new Numeroquiniela("Joaquin");
jugador1.cargarnumero();

//Creación del objeto o instancia de la clase Sorteo
var sorteo1 = new Sorteo();
sorteo1.sortear();

document.write(jugador1.nombre + ' eligio el número: ' + jugador1.numero);

if (jugador1.verificarsigano(sorteo1.numero)) {
	document.write('<br>'+ jugador1.nombre + ' ha ganado <br>');
}else {
	document.write('<br>'+ jugador1.nombre +  ' perdio pues el numero de quiniela es: ' + sorteo1.numero + '<br>');
}


var jugador2 = new Numeroquiniela('Alexa');
jugador2.cargarnumero();

var sorteo2 = new Sorteo();
sorteo2.sortear();

document.write('<br>'+jugador2.nombre + ' eligio el número: ' + jugador2.numero);

if (jugador2.verificarsigano(sorteo2.numero)) {
	document.write('<br>'+ jugador2.nombre + ' ha ganado <br>');
}else {
	document.write('<br>'+ jugador2.nombre +  ' perdio pues el numero de quiniela es: ' + sorteo2.numero + '<br>');
}