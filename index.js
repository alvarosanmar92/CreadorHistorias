// Mensaje inicial para explicar que es lo que tiene que hacer el usuario
alert("¡Bienvenido! Estás a punto de construir tu propia historia de superhéroes. Te pediremos tres números del 1 al 3 para determinar cómo comienza, continúa y termina la historia. ¡Vamos a empezar!");


// Aquí vamos a solicitar al usuario un número del 1 al 3 que condicionará el inicio de la historia
var opcionIntroduccion = parseInt(prompt("Introduce un número del 1 al 3 para saber cómo empieza tu historia de superhéroes:"));
var introduccion = "";

// Opciones de la historia, con un default por si introduce un error no válido
switch (opcionIntroduccion) {
    case 1:
        introduccion = "En la bulliciosa ciudad de Metrópolis, ";
        break;
    case 2:
        introduccion = "En un futuro donde los superpoderes eran comunes, ";
        break;
    case 3:
        introduccion = "En la tranquila ciudad de Sunshineville, ";
        break;
    default:
        alert("Por favor, ingrese un número válido del 1 al 3.");
}

// Vamos a solicitar un segundo input para continuar con la historia
var opcionNudo = parseInt(prompt("Introduce un número del 1 al 3 para continuar con tu historia de superhéroes:"));
var nudo = "";

// Opciones de continuación, con opción default para corroborar que es un número válido
switch (opcionNudo) {
    case 1:
        nudo = "un nuevo héroe emergió para enfrentar una amenaza inminente ";
        break;
    case 2:
        nudo = "un grupo de superhéroes se unió para detener un villano poderoso ";
        break;
    case 3:
        nudo = "un antiguo enemigo regresó, poniendo a prueba la fortaleza de los héroes ";
        break;
    default:
        alert("Por favor, ingrese un número válido del 1 al 3.");
}

// Último input para selccionar el cierre de la historia
var opcionDesenlace = parseInt(prompt("Introduce un número del 1 al 3 para saber cómo termina la historia de superhéroes:"));
var desenlace = "";

// Opciones de desenlace y default para evitar errores
switch (opcionDesenlace) {
    case 1:
        desenlace = "y la ciudad celebró a su nuevo protector.";
        break;
    case 2:
        desenlace = "que cambió el destino de la humanidad para siempre.";
        break;
    case 3:
        desenlace = "y los superhéroes juraron proteger la ciudad contra cualquier amenaza futura.";
        break;
    default:
        alert("Por favor, ingrese un número válido del 1 al 3.");
}

// Alert final con la historia creada por el usuario en base a sus decisiones
if (introduccion && nudo && desenlace) {
    var historiaCompleta = introduccion + nudo + desenlace;
    alert("Historia de Superhéroes:\n" + historiaCompleta);
}

        typedvalueElement.className = 'error';
    }
});
