

function imprimirFecha () {
	
	//C
	var fecha = new Date();

	//Al mes se le suma 1 ya que enumera los meses desde cero, enero = 0, febrero = 1 .....
	fecha = fecha.getDate() + '/'+ (fecha.getMonth()+1) + '/' + fecha.getFullYear();
	document.write('La fecha es: ' + fecha+'<br>');

}

function imprimirHora () {
	
	var hora = new Date();
	hora = hora.getHours() + ':' + hora.getMinutes() + ':' + hora.getSeconds();
	document.write('La hora actual es: ' + hora);

}