

const copyButton = document.getElementById('boton');

// Agregar un evento de click al botón
copyButton.addEventListener('click', function() {


const actividad1 = document.getElementById('cmbActividades').value;
const horas1 = document.getElementById('HorasCapturadas').value;
const comentario1 = document.getElementById('Comentario').value;
  
  // Obtener la pestaña activa
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    // Ejecutar el script de contenido en la pestaña activa
    chrome.storage.local.set({
      actividad: actividad1,
      horas: horas1,
      comentario: comentario1
    }, function() {
      // Callback opcional después de guardar los datos
      console.log('Datos guardados en el almacenamiento local');
      
    
    });


    chrome.scripting
    .executeScript({
      target : {tabId : tabs[0].id},
      files : [ "script.js" ]
    }) 
    
    


  });
});



