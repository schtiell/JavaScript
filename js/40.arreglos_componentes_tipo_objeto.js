//Clase Hipervinculo que recibe 2 parametros
function Hipervinculo (direccion,titulo) {
	// body... 
	this.direccion = direccion;
	this.titulo = titulo;
	this.retornarLink = retornarLink; 
}

function retornarLink () {
	// body...
	var cadena;
	cadena = '<a href=' + this.direccion + '>' + this.titulo + '</a>';
	return cadena;
}


//Se crea el objeto de la clase array de 3 posiciones
var arreglo = new Array(3);

//Se almacena en los indices del array un objeto de la clase Hipervinculo pasando los parametros al constructor de la clase.
arreglo[0] = new Hipervinculo('http://www.google.com','Google');
arreglo[1] = new Hipervinculo('http://www.facebook.com','Facebook');
arreglo[2] = new Hipervinculo('http://www.twitter.com','twitter');

for (var i = 0; i < arreglo.length; i++) {
	document.write(arreglo[i].retornarLink());
	document.write('<br>');
}



