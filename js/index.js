/*--- LE CONSULTO AL USUARIO SU EDAD PARA INGRESAR AL SITIO WEB ---*/

function verificarEdad(){
let edad = parseInt( prompt ("Ingrese su edad para verificacion")); 

if (edad >= 18){
    console.log ("Aceptada la verificacion")
    alert("Edad ingresada: " + edad)
}else {
    console.log ("No puedes ingresar al sitio web")
}
}

verificarEdad();


/*--- AL MOMENTO DE DARLE CLICK A "MAS INFORMACION", ME LLEVA A OTRO FORMULARIO PARA COMPLETAR QUE TRATA SOBRE LOS HABITOS DE CADA PERSONA ---*/

let codigo;

let intentos = 0;
const MAXIMOS_INTENTOS = 3;

    do{
        codigo = prompt ("Ingrese el codigo que le fue enviado");
        intentos ++;

        if(codigo === "Habitos"){
            console.log("codigo correcto")
            break;
        }

        if(intentos >= MAXIMOS_INTENTOS){
            console.log ("linea de codigos incorrectos, sus intentos se agotaron")
            break;
        }


    }while(true)


/*--- A TRAVES DEL FORMULARIO DE CONTACTO, LE CONSULTO NOMBRE COMPLETO, NRO DE DOCUMENTO Y EMAIL AL USUARIO (OPERADOR LOGICO AND & OR) ---*/

function completarDatos(){
let nombreCompleto = "Lautaro Benitez";
let email = "gmail";
let documento = 42;

if (nombreCompleto === "Lautaro Benitez"  &&  email === "gmail"   ||  documento <=47){
    console.log ("La persona cumple con los criterios y puede ingresar a la mentoria");
}else {
    console.log ("La persona no cumple con los criterios, lo cual no tiene permitido ingresar a la mentoria");
} 
}

completarDatos();


/*--- DESBLOQUEA DECADAS DE PROGRESO DE PERSONAL EN SOLO 12 SEMANAS. EN ESTE PUNTO, TENGO PENSADO ARMAR UN CUESTIONARIO INICIAL EN DONDE REALIZO EL CALCULO DE CALORIAS (EXACTAS) NECESARIAS QUE NECESITA EL SER HUMANO PARA VIVIR. ES UNA PREGUNTA FRECUENTE QUE TIENE LA GENTE (SABER EL CALCULO DE SU INGESTA CALORICA DIARIA) ---*/

function calculoCalorias(){

let peso = parseInt( prompt("Ingresa tu peso corporal"));
const NUMERO_OBLIGATORIO = 22;

let aproximacionCalorias = peso * NUMERO_OBLIGATORIO;

let actividad = prompt ("Selecciona tu nivel de actividad: sedentario / activo / muy activo").toLowerCase();
let factorActividad;

switch (actividad){
    case "sedentario":
        factorActividad = 1.35;
        break;

    case "activo":
        factorActividad = 1.55;
        break;

    case "muy activo":
        factorActividad = 1.75;
        break;
        
        default:
        alert("Nivel de actividad no reconocido");
        
return;
}

let caloriasTotales = aproximacionCalorias * factorActividad;

console.log("Tus calorias diarias son", +caloriasTotales);
}

calculoCalorias();

/*--- DESBLOQUEA DECADAS DE PROGRESO PERSONAL EN SOLO 12 SEMANAS. NUEVAMENTE, EN ESTE PUNTO MI IDEA ES REALIZAR UN DESCUENTO DEL 10% A ESTUDIANTES UNIVERSITARIOS QUE SE ENCUENTRAN EN ESE ESTANCAMIENTO ADOLESCENTE EN DONDE NO ENCUENTRAN SU PROPOSITO DE VIDA. POR ESO EL DESCUENTO, PARA INCENTIVARLOS A ENTRAR AL PROGRAMA Y PARA QUE PUEDAN CAMBIAR SU MANERA DE VIVIR CUANTO ANTES ---*/

function calcular (montoInicial){
    let descuentoEstudiantil = 0.1;

    function calcularDescuento(){
        return montoInicial * descuentoEstudiantil;

    }

    let descuento = calcularDescuento();
    let totalDescuento = montoInicial - descuento;

    return totalDescuento;
}

console.log(calcular(40000))

/*--- IDEA PENSADA: AL PRESENTARSE 3 TIPOS DE PLANES DISTINTOS, CUANDO UN ESTUDIANTE (EN BUSCA DEL DESCUENTO), INGRESA A LA PAGINA Y QUIERE RECURRIR DIRECTAMENTE A ESE PLAN QUE OFRECE EL DESCUENTO, SE LLEVA A CABO EL METODO FIND - FUNCION DE ORDEN SUPERIOR I. ---*/

const PLANES = [

    {
        nombre:'plan individual (incluye descuento si sos estudiante)'
    },
    {
        nombre:'plan grupal (posibilidad de trabajar con otras personas)'
    },
    {
        nombre:'plan aparte con entrenador personal propio'
    }

]

const PLAN_BUSCADO = "plan individual (incluye descuento si sos estudiante)";

let descuentoEncontrado = PLANES.find(plan => plan.nombre === PLAN_BUSCADO);

if (descuentoEncontrado){
    console.log(`descuento encontrado: ${descuentoEncontrado.nombre}`)
}


/*--- FUNCIONES DE ORDEN SUPERIOR I: ES UNA FUNCION QUE TOMA UNA O MAS FUNCIONES COMO ARGUMENTOS O DEVUELVE UNA FUNCION COMO RESULTADO. EN ESTE EJEMPLO, A TRAVES DE LA PRIMERA EXPLICACION QUE HIZO EL PROFESOR, REALIZO UNA FUNCION DEL PRECIO TOTAL DEL PLAN1 - EL DESCUENTO OTORGADO AL ESTUDIANTE ---*/

function asignarDescuento (operacion){
    if(operacion === 'restar'){
        return(plan1,descuento)=> plan1 - descuento
    }
}

let restar = asignarDescuento('restar');
let planEstudiantil = 40000;
let descuento = 4000;
console.log(restar(planEstudiantil,descuento));

/*--- EN LA PARTE DE SERVICIO, OFRECEMOS 3 TIPOS DE PLANES DISTINTOS PARA QUIENES QUIEREN TRANSFORMAR SUS HABITOS Y LOGRAR NUEVOS OBJETIVOS. AQUI DESCRIBO LOS PLANES QUE SON UTILIZADOS COMO OBJETOS (SON LOS PRODUCTOS A VENDER) ---*/

function Plan(entrenamiento, objetivo, precio){
    this.entrenamiento = entrenamiento;
    this.objetivo = objetivo;
    this.precio = precio;
    
}


let plan1 = new Plan('individual','aprender primeros terminos',40000)
let plan2 = new Plan('grupal','nutricional y fisico',70000)
let plan3 = new Plan('entrenador personal','mental y fisico',105000)
console.log(plan1);
console.log(plan2);
console.log(plan3);

/*--- SIGUIENDO CON EL CASO DE ARRIBA (PARTE DE SERVICIO), ESCRIBO LO MISMO PERO CON ARRAYS ---*/

/*let planUno = ["plan individual", "aprender primeros terminos", 40000];
let planDos = ["plan grupal", "nutricional y grupal", 70000];
let planTres = ["entrenador personal", "mental y fisico", 105000];*/

/*--- Preguntar a Euge como declarar los 3 planes a la vez en la variable (Let pasoAString = (" ")) para que me puedan aparecer en un solo llamado del console.log ---*/

/*let pasoAString = planUno.join(" ");

console.log(pasoAString)*/

/*--- EN LA PARTE DE SERVICIO, EXPRESO LAS CARACTERISTICAS DE CADA PLAN EN ARRAYS. LOS UNO PARA QUE APAREZCAN TODOS Y EL CLIENTE PUEDA VER LA INFORMACION DE CADA UNO ---*/

let planUno = ["individual", "se aprenden primeros terminos", "valor de 40000"]
let planDos = ["grupal", "objetivo nutricional y grupal", "valor de 70000"]
let planTres = ["incluye entrenador personal", "objetivo mental y fisico", "valor de 105000"]

let combinarPlanes = planUno.concat(planDos,planTres)

console.log(combinarPlanes);

/*--- SIGUIENDO CON EL CASO (PARTE DE SERVICIO), EXPLICO A TRAVES DEL METODO CONCAT Y SLICE, LOS 2 PLANES QUE NO SE ENCUENTRAN INCLUIDOS DENTRO DEL DESCUENTO ---*/

let planes = ["plan individual", "plan grupal", "plan con personal incluido"];

let planesNoIncluidos = [].concat(planes.slice(1,2), planes.slice(2,3));

console.log("Los planes que no se encuentran dentro del descuento estudiantil son "+ planesNoIncluidos);

/*--- Preguntar a Euge como puedo hacer para que me aparezca la oracion "Los planes que no se encuentran... son plan grupal y plan con personal incluido". Porque en Consola me aparece "... son plan grupal, plan con personal incluido" ---*/

/*--- IDEA PENSADA: EN CASO DE QUE UN USUARIO QUIERA TENER UNA MENTORIA 1 A 1 Y TIENE PAGADO SU PLAN CORRESPONDIENTE, A TRAVES DEL ULTIMO FORMULARIO (QUE SE INGRESA CON EL CODIGO HABITOS), NOS RELATA SU SITUACION EN UN MENSAJE. SIN EMBARGO, ESTA MENTORIA VIENE CON UN AUMENTO EN EL PLAN YA QUE ES UNA SITUACION MAS INTIMA CON LA PERSONA ---*/

const AUMENTOS = [40000,70000,105000];
const AUMENTO_ESTUDIANTIL = [30000];

let precioConAumento = AUMENTOS.map(precio => precio *1.5);
let precioConAumentoEstudiantil = AUMENTO_ESTUDIANTIL.map(precio => precio *1.5);

console.log(precioConAumento);
console.log(precioConAumentoEstudiantil);

/*--- METODO REDUCE. PARA APLICAR ESTE METODO EN EL PROYECTO, IMAGINO LA SITUACION EN LA QUE UN USUARIO INGRESA Y SE INTERESA DIRECTAMENTE EN ADQUIRIR EL PLAN MAS CARO, INCLUIDA LA MENTORIA 1 A 1 POR LA CONFIANZA QUE LE GENERA ---*/

const PRECIOS_CARRITO = [105000,52500];

let totalCarrito = PRECIOS_CARRITO.reduce((acum,num)=> acum + num);

console.log(totalCarrito);