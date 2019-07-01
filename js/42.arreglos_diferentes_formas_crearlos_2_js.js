console.log('Llegué al script');

var day = new Array('Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado');

var month = [];
month = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Ostubre','Noviembre','Diciembre'];

document.write('Los elementos del arreglo de los dias de la semana son: ' + '<br>');
for (var i = 0; i < day.length; i++) {
	document.write(day[i] + '<br>');
}
document.write('<br>');

document.write('Los elementos del arreglo de los meses del año son: ' + '<br>');
for (var i = 0; i < month.length; i++) {
	document.write(month[i] + '<br>');
}