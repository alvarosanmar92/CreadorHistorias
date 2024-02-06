const citas =[
    'No hay hombre tan cobarde a quien el amor no haga valiente y transforme en heroe',
    'Hay alguien tan inteligente que aprende de la experiencia de los demas',
    'La vida no se trata de encontrarte a ti mismo, sino de crearte a ti mismo',
    'La felicidad de tu vida depende de la calidad de tus pensamientos',
    'Felicidad no es hacer lo que uno quiere sino querer lo que uno hace',
    'Los hombres geniales empiezan grandes obras, los hombres trabajadores las terminan',
    'Me he dado cuenta que incluso las personas que dicen que todo está predestinado y que no podemos hacer nada para cambiar nuestro destino igual miran antes de cruzar la calle',
    'No malgastes tu tiempo, pues de esa materia esta formada la vida',
    'La vida debe ser comprendida hacia atras. Pero debe ser vivida hacia delante',
    'Todo el que disfruta cree que lo que importa del arbol es el fruto, cuando en realidad es la semilla. He aqui la diferencia entre los que crean y los que disfrutan',
    'Hay tres frases que nos impiden avanzar: tengo que hacerlo bien, me tienes que tratar bien y el mundo debe ser facil',
    'Qué pequeña eres brizna de hierba. Si, pero tengo toda la Tierra a mis pies',
    'Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse',
    'Dar el ejemplo no es la principal manera de influir sobre los demas; es la unica manera',
    'Si das pescado a un hombre hambriento lo nutres durante una jornada. Si le enseñas a pescar, le nutriras toda su vida'
]

let words = [];
let wordIndex = 0;
let startTime = Date.now();
const quoteElement = document.getElementById('cita');
const messageElement = document.getElementById('mensaje');
const typedvalueElement = document.getElementById('valorEscrito');

document.getElementById('comienzo').addEventListener('click', () =>{
    const quoteIndex = Math.floor(Math.random() * citas.length);
    const quote = citas[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className = 'highlight';
    messageElement.innerText = '';
    typedvalueElement.value = '';
    typedvalueElement.focus();
    startTime = new Date().getTime();
});

typedvalueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedvalueElement.value;
    if(typedValue === currentWord && wordIndex === words.length -1) {
        const elapsedTime = new Date().getTime() - startTime;
        const message = `¡Enhorabuena! Has acabado en ${elapsedTime / 1000} seconds`;
        messageElement.innerText = message;
    }else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord){
        typedvalueElement.value = '';
        wordIndex++;
        for(const wordElement of quoteElement.childNodes){
            wordElement.className = '';
        }
        quoteElement.childNodes[wordIndex].className = 'subrayado';
    }else if(currentWord.startsWith(typedValue)){
        typedvalueElement.className = '';
    } else{
        typedvalueElement.className = 'error';
    }
});