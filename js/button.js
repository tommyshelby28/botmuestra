

// BOTON DE PAGOS
document.getElementById("pagosBoton").addEventListener("click", function() {
    const mensaje = "Felicitaciones por tu premio! Nos pone muy contentos que ganes con nosotros! 🥳\nPara poder retirarlo te pido que lo solicites al siguiente número 📲, muchas gracias. Esperamos tu mensaje.\n\nLINK:\n";
  
    // Abre el enlace en una nueva ventana
    
    // Copia el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)
      .then(function() {
      })
      .catch(function() {
        alert("¡Hubo un error al copiar el mensaje al portapapeles!");
      });
  });

// BOTON DE CARGA
  document.getElementById("cargasBoton").addEventListener("click", function() {
    const mensaje = "💖, este numero se encargara unicamente del area de retiros. Para realizar tu carga te dejamos los siguientes numeros, podes optar por uno y el otro dejarlo de soporte📲\n" +
                    "\nLINK 1: \n\n" +
                    "LINK 2: \n\n" +
                    "Muchas gracias, te esperamos para brindarte la mejor atencion. Mucha suerte☘️\n";
  
    // Copia el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)
      .then(function() {
      })
      .catch(function() {
        alert("¡Hubo un error al copiar el mensaje al portapapeles!");
      });
  });

  document.getElementById("restableContra").addEventListener("click", function() {
    const mensaje = "Usuario restablecido:\n\n" +
                    "Usuario: \n\n" +
                    "Contraseña: casino123\n\n"
                    "Link:";
  
    // Copia el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)
      .then(function() {
      })
      .catch(function() {
        alert("¡Hubo un error al copiar el mensaje al portapapeles!");
      });
  });


  document.getElementById("linkPage").addEventListener("click", function() {
    const mensaje = " Somos: (casino) te dejo el Link: (link) ";
  
    // Copia el mensaje al portapapeles
    navigator.clipboard.writeText(mensaje)
      .then(function() {
      })
      .catch(function() {
        alert("¡Hubo un error al copiar el mensaje al portapapeles!");
      });
  });
  
//

  

// Variable para hacer un seguimiento del índice del mensaje actual
let indiceMensajeActual = 0;

// Lista de mensajes
const mensajes = [
    "Hola, somos (casino) 🫶 Te dejamos el link de nuestros juegos: (link plataforma)  Para poder pasarte la info completa te pedimos un nombre para tu usuario",
    "¡Hola! aca (casino) 🫶. Queríamos compartir nuestro enlace de juegos: (link plataforma) . Para brindarte toda la información, ¿podrías darnos un nombre para crear tu usuario?",
    "¡Hola, somos (casino) 🫶! Nos gustaría compartir contigo el enlace de nuestros juegos: (link plataforma) . Para poder brindarte toda la información, ¿podrías proporcionarnos un nombre para crear tu usuario?",
    "¡Saludos! Somos (casino) 🫶. Queremos compartir contigo el enlace de nuestros juegos: (link plataforma) . Para proporcionarte toda la información, ¿podrías indicarnos un nombre para crear tu usuario que te gustaría utilizar?",
    "¡Hola! Somos (casino)🫶. Queríamos mostrarte nuestros juegos en el siguiente enlace: (link plataforma) . Para poder ofrecerte toda la información, ¿me dirias tu nombre para la creacion de tu usuario?"
];

function copiarSiguienteMensaje() {
    // Seleccionar el siguiente mensaje
    const mensajeSeleccionado = mensajes[indiceMensajeActual];

    // Copiar el mensaje al portapapeles
    navigator.clipboard.writeText(mensajeSeleccionado)
        .then(function() {
            console.log('Mensaje copiado al portapapeles: ' + mensajeSeleccionado);
        })
        .catch(function(err) {
            console.error('Error al copiar el mensaje: ', err);
        });

    // Incrementar el índice del mensaje actual para el próximo clic
    indiceMensajeActual = (indiceMensajeActual + 1) % mensajes.length;
};


let indiceMensaje = 0;

// Lista de mensajes
const mensajesFelicidades = [
    "Felicidades 🥳 Gracias por confiar 🍀! Si nuestra atención te gustó, por favor no olvides recomendarnos con amigos y familiares 🙏🏼♥️ Te dejo el link para que lo reenvíes: \n\n",
    "Hola, tengo un plan de bonificación. Si me recomendas con tus amigos/as y me cargan de tu parte, tenés un 10% en tu próxima carga 🎁🎰 Te paso el link a continuación:\n\n"
];

function copiarMensajeSiguiente() {
    // Seleccionar el siguiente mensaje
    const mensajeSeleccionado = mensajesFelicidades[indiceMensaje];

    // Copiar el mensaje al portapapeles
    navigator.clipboard.writeText(mensajeSeleccionado)
        .then(function() {
            console.log('Mensaje copiado al portapapeles: ' + mensajeSeleccionado);
        })
        .catch(function(err) {
            console.error('Error al copiar el mensaje: ', err);
        });

    // Incrementar el índice del mensaje actual para el próximo clic
    indiceMensaje = (indiceMensaje + 1) % mensajesFelicidades.length;
};