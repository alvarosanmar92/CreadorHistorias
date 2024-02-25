// Mensaje inicial para explicar que es lo que tiene que hacer el usuario
alert("¡Bienvenido! Estás a punto de construir tu propia historia de superhéroes. Te pediremos tres números del 1 al 3 para determinar cómo comienza, continúa y termina la historia. ¡Vamos a empezar!");

// Función para solicitar un número del 1 al 3 y obtener la línea correspondiente
function obtenerOpcion(categoria) {
    let opcion = parseInt(prompt(`Introduce un número del 1 al 3 para ${categoria}:`));

    while (opcion < 1 || opcion > 3) {
        alert("Por favor, ingrese un número válido del 1 al 3.");
        opcion = parseInt(prompt(`Introduce un número del 1 al 3 para ${categoria}:`));
    }

    return opcion;
}

// Solicitar al usuario un número del 1 al 3 para la introducción de la historia
let opcionIntroduccion = obtenerOpcion("saber cómo empieza tu historia de superhéroes");
let introduccion = "";

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
}

// Solicitar al usuario un número del 1 al 3 para el nudo de la historia
let opcionNudo = obtenerOpcion("continuar con tu historia de superhéroes");
let nudo = "";

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
}

// Solicitar al usuario un número del 1 al 3 para el desenlace de la historia
let opcionDesenlace = obtenerOpcion("saber cómo termina la historia de superhéroes");
let desenlace = "";

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
}

// Alert final con la historia creada por el usuario en base a sus decisiones
if (introduccion && nudo && desenlace) {
    let historiaCompleta = introduccion + nudo + desenlace;
    alert("Historia de Superhéroes:\n" + historiaCompleta);
}
