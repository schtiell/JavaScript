var cliente1 = {
	
	nombre: 'joaquin sayago',
	no_cuenta: '14432352',
	ahorro: 0,
	
	imprimir: function (){
		document.write(this.nombre+'<br>');
		document.write(this.no_cuenta +'<br>');
	},

	depositar: function (cantidad_depositar){

		this.ahorro = this.ahorro + cantidad_depositar;

	},

	extraer: function (cantidad_extraer){

		if(cantidad_extraer > this.ahorro){
			document.write('<strong>No cuentas con suficientes fondos en tu cuenta de ahorro</strong>');
			document.write('<br>' + 'Solo dispones de: '+this.ahorro);
		}else{

			this.ahorro = this.ahorro - cantidad_extraer;
			this.imprimir();
		}

		
	}
};

cliente1.imprimir();
cliente1.depositar(1500);
cliente1.imprimir();
cliente1.depositar(350);
cliente1.imprimir();
cliente1.extraer(750);
cliente1.extraer(1200);

