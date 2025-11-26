fecha = new Date();
/*
alert(fecha.getDate()); Dia del mes (1 a 31)
alert(fecha.getDay()); Dia de la semana (0 a 6) 
alert(fecha.getMonth()); Mes (0 a 11)
alert(fecha.getFullYear()); Año completo (por ejemplo, 2024)
alert(fecha.toDateString()); Fecha en formato legible
*/
const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

alert("Buenos dias, hoy es " + dias[fecha.getDay()] + " " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear());
