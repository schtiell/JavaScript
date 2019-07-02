
//Objetos literales 
var cliente = {
	
	//Atributos
	deposito:[],
	no_cliente: parseInt(prompt('Cual es tu numero de cliente')),
	monto_deposito: parseInt(prompt('Cual es el monto a depositar?')),

	//Metodos
	imprimir: function () {
		// body... 
		if (no_cliente =! 0) {
		this.deposito[this.no_cliente]= this.monto_deposito,
		document.write('<br>'+ 'Numero de cuenta: ' + this.no_cliente + ' = '+ this.deposito[this.no_cliente])
		}
	}
};

// Mensaje en cosola
console.log('Lelgue al script');

//Objeto
cliente.imprimir();


