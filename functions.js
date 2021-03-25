function exercise1() {
       alert('Acabas de Presionar el ejercicio #1');
       alert('Bienvenido!');
    var nombre = prompt('Cual es su nombre?');
    var apellido = prompt('Cual es su apellido?');
    var edad = prompt('Cual es edad?');
    var ciudad = prompt('En que ciudad vives?');
    var texto = document.createTextNode("Su nombre es " + nombre + ", su apellido es " + apellido+ ", y tienes " + edad + " años y vives en " + ciudad);
    document.getElementById("exercise").appendChild(texto);
     } 
function exercise2(){
	alert('Acabas de Presionar el ejercicio #2')
	alert('Bienvenido!')
	var numero=[];
	suma = 0;
	for (let step = 0; step < 5; step ++){
		 numero[step] = Number(prompt('Digitar un digito por favor (SOLO NUMEROS)'));
         suma = suma + numero[step];
	}
     var texto = document.createTextNode('El resultado de la suma de los digitos ingresados es ' + suma);

	document.getElementById("exercise").appendChild(texto);

}
function exercise3() {
	alert('Acabas de Presionar el ejercicio #3');
    alert('Bienvenido!');
    var nombre = prompt('Cual es su nombre?');
    var apellido = prompt('Cual es su apellido?');
     var edad = prompt('Cual es edad?');

    var persona ={
    	nombre : nombre,
    	apellido : apellido,
    	edad : edad
    };
    var nombreCompleto = persona.nombre + " " + persona.apellido 	
    var texto = document.createTextNode('Gracias por usar nuestra aplicacion ' + nombreCompleto);

	document.getElementById("exercise").appendChild(texto);// body...
}
function exercise4() {
	alert('Acabas de Presionar el ejercicio #4');
    alert('Bienvenido!');
    var person = [];
    correos =[];
    for (let step = 0; step < 5; step ++){
		 var nombre = prompt('Cual es su nombre?');
         var email = prompt('Cual es su correo?');
         var edad = prompt('Cual es edad?');
         person.push({nombre: nombre , email: email, edad : edad})
         correos.push(email)
	} 
	 for (let step = 0; step < 5; step ++){
	  var texto = document.createTextNode('nombre: '+  person[step].nombre + ' email ' + person[step].email + ' edad: ' + 
	  	person[step].edad);
      document.getElementById("exercise").appendChild(texto);
	} 
	console.log(correos)
	// body...
}