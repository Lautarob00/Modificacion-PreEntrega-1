/*--- LE CONSULTO AL USUARIO SU EDAD PARA INGRESAR AL SITIO WEB ---*/

/*function verificarEdad(){
let edad = parseInt( prompt ("Ingrese su edad para verificacion")); 

if (edad >= 18){
    console.log ("Aceptada la verificacion")
    alert("Edad ingresada: " + edad)
}else {
    console.log ("No puedes ingresar al sitio web")
}
}

verificarEdad();*/


/*--- AL MOMENTO DE DARLE CLICK A "MAS INFORMACION", ME LLEVA A OTRO FORMULARIO PARA COMPLETAR QUE TRATA SOBRE LOS HABITOS DE CADA PERSONA ---*/

/*let codigo;

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


    }while(true)*/


/*--- A TRAVES DEL FORMULARIO DE CONTACTO, LE CONSULTO NOMBRE COMPLETO, NRO DE DOCUMENTO Y EMAIL AL USUARIO (OPERADOR LOGICO AND & OR) ---*/

/*function completarDatos(){
let nombreCompleto = "Lautaro Benitez";
let email = "gmail";
let documento = 42;

if (nombreCompleto === "Lautaro Benitez"  &&  email === "gmail"   ||  documento <=47){
    console.log ("La persona cumple con los criterios y puede ingresar a la mentoria");
}else {
    console.log ("La persona no cumple con los criterios, lo cual no tiene permitido ingresar a la mentoria");
} 
}

completarDatos();*/


/*--- DESBLOQUEA DECADAS DE PROGRESO DE PERSONAL EN SOLO 12 SEMANAS. EN ESTE PUNTO, TENGO PENSADO ARMAR UN CUESTIONARIO INICIAL EN DONDE REALIZO EL CALCULO DE CALORIAS (EXACTAS) NECESARIAS QUE NECESITA EL SER HUMANO PARA VIVIR. ES UNA PREGUNTA FRECUENTE QUE TIENE LA GENTE (SABER EL CALCULO DE SU INGESTA CALORICA DIARIA) ---*/

/*function calculoCalorias(){

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

calculoCalorias();*/

/*--- DESBLOQUEA DECADAS DE PROGRESO PERSONAL EN SOLO 12 SEMANAS. NUEVAMENTE, EN ESTE PUNTO MI IDEA ES REALIZAR UN DESCUENTO DEL 10% A ESTUDIANTES UNIVERSITARIOS QUE SE ENCUENTRAN EN ESE ESTANCAMIENTO ADOLESCENTE EN DONDE NO ENCUENTRAN SU PROPOSITO DE VIDA. POR ESO EL DESCUENTO, PARA INCENTIVARLOS A ENTRAR AL PROGRAMA Y PARA QUE PUEDAN CAMBIAR SU MANERA DE VIVIR CUANTO ANTES ---*/

/*function calcular (montoInicial){
    let descuentoEstudiantil = 0.1;

    function calcularDescuento(){
        return montoInicial * descuentoEstudiantil;

    }

    let descuento = calcularDescuento();
    let totalDescuento = montoInicial - descuento;

    return totalDescuento;
}

console.log(calcular(10000))*/


/*--- EN LA PARTE DE SERVICIO, OFRECEMOS 3 TIPOS DE PLANES DISTINTOS PARA QUIENES QUIEREN TRANSFORMAR SUS HABITOS Y LOGRAR NUEVOS OBJETIVOS. AQUI DESCRIBO LOS PLANES QUE SON UTILIZADOS COMO OBJETOS (SON LOS PRODUCTOS A VENDER) ---*/

/*function Plan(entrenamiento, objetivo, precio){
    this.entrenamiento = entrenamiento;
    this.objetivo = objetivo;
    this.precio = precio;
    }

}

let plan1 = new Plan('individual','aprender primeros terminos',40000)
let plan2 = new Plan('grupal','nutricional y fisico',70000)
let plan3 = new Plan('entrenador personal','mental y fisico',105000)
console.log(plan1.info());
console.log(plan2);
console.log(plan3);*/

/*--- SIGUIENDO CON EL CASO DE ARRIBA, ESCRIBO LO MISMO PERO CON ARRAYS ---*/

let planUno = ["plan individual", "aprender primeros terminos", 40000];
let planDos = ["plan grupal", "nutricional y grupal", 70000];
let planTres = ["entrenador personal", "mental y fisico", 105000];

/*--- Preguntar a Euge como declarar los 3 planes a la vez en la variable (Let pasoAString = (" ")) para que me puedan aparecer en un solo llamado del console.log ---*/

let pasoAString = planUno.join(" ");

console.log(pasoAString)

/*--- EN LA PARTE DE SERVICIO, EXPRESO LAS CARACTERISTICAS DE CADA PLAN EN ARRAYS. LOS UNO PARA QUE APAREZCAN TODOS Y EL CLIENTE PUEDA VER LA INFORMACION DE CADA UNO ---*/

/*let planUno = ["individual", "se aprenden primeros terminos", "valor de 40000"]
let planDos = ["grupal", "objetivo nutricional y grupal", "valor de 70000"]
let planTres = ["incluye entrenador personal", "objetivo mental y fisico", "valor de 105000"]

let combinarPlanes = planUno.concat(planDos,planTres)

console.log(combinarPlanes);*/