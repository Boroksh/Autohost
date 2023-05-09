var actividadArg = "";
var horasArg = "";
var comentarioArg = "";

chrome.storage.local.get(['actividad', 'horas', 'comentario'], function(result) {
  actividadArg = result.actividad;
  horasArg = result.horas;
  comentarioArg = result.comentario;

  console.log(actividadArg);
  console.log(horasArg);
  console.log(comentarioArg);

  // Realizar operaciones adicionales después de obtener los datos
  // ...

  // Verificar si se han obtenido todos los datos
  if (actividadArg !== "" && horasArg !== "" && comentarioArg !== "") {
    console.log("Se han obtenido todos los datos del almacenamiento local");
    // Aquí puedes continuar con las operaciones después de obtener todos los datos
    llenar(actividadArg,horasArg,comentarioArg);
  }
});


function llenar( actividadArg2,horasArg2,comentarioArg2  ){

var  evento = new MouseEvent('click', {
  'view': window,
  'bubbles': true,
  'cancelable': true
});
// document.querySelector("#calendario > div > table > tbody > tr:nth-child(1) > td:nth-child(5) > a").dispatchEvent(evento);



for(var y=0;y<=6;y++){
for(var x=0;x<=7;x++){
var dia = document.querySelector("#calendario > div > table > tbody > tr:nth-child("+y+") > td:nth-child("+x+") > a");

if (dia) {
  var texto = dia.textContent;
  //console.log("y: "+y+"x: "+x+"  "+texto);
 document.querySelector("#calendario > div > table > tbody > tr:nth-child("+y+") > td:nth-child("+x+") > a").dispatchEvent(evento);


// Obtén todos los elementos <a> con la clase "ui-state-default"
var elementos = document.querySelectorAll("#calendario > div > table > tbody > tr:nth-child("+y+") > td:nth-child("+x+") > a")

// Verifica si se encontraron elementos
if (elementos.length > 0) {
// Itera sobre los elementos para encontrar el elemento deseado
for (var i = 0; i < elementos.length; i++) {
var elemento = elementos[i];

// Verifica si el elemento tiene la clase "ui-state-default"

if (elemento.classList.contains("ui-state-default")) {
  
  //console.log(elemento.classList );
  // Actividad
  var actividad = document.querySelector("#cmbActividades");
  actividad.value= actividadArg2;
  //Horas
  var horas=document.querySelector("#HorasCapturadas");
  horas.value=horasArg2;
  //Comentario
  var cajaDeTexto = document.querySelector("#Comentario")
  cajaDeTexto.value = comentarioArg2;
  document.querySelector("#btnOk").dispatchEvent(evento);// esta linea se encarga de guardar 
  break; // Termina el bucle después de encontrar el elemento deseado
}
}
} else {
//console.log("No se encontraron elementos .");
}


} else {
 // console.log("x: "+x+"y: "+y+"  No se encontró ningún elemento con el selector especificado");
}    

}

}

}
