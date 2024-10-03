/*--- LE PREGUNTO AL USUARIO SU EDAD PARA INGRESAR AL SITIO WEB ---*/

let edad = parseInt( prompt ("Ingrese su edad para verificacion")); 

if (edad >= 18){
    console.log ("Aceptada la verificacion")
}else {
    console.log ("No puedes ingresar al sitio web")
}


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

let nombreCompleto = "Lautaro Benitez";
let email = "gmail";
let documento = 42;

if (nombreCompleto === "Lautaro Benitez"  &&  email === "gmail"   ||  documento <=47){
    console.log ("La persona cumple con los criterios y puede ingresar a la mentoria")
}else {
    console.log ("La persona no cumple con los criterios, lo cual no tiene permitido ingresar a la mentoria")
} 


/*--- DESBLOQUEA DECADAS DE PROGRESO DE PERSONAL EN SOLO 12 SEMANAS. EN ESTE PUNTO, TENGO PENSADO ARMAR UN CUESTIONARIO INICIAL EN DONDE REALIZO EL CALCULO DE CALORIAS (EXACTAS) NECESARIAS QUE NECESITA EL SER HUMANO PARA VIVIR. ES UNA PREGUNTA FRECUENTE QUE TIENE LA GENTE (SABER EL CALCULO DE SU INGESTA CALORICA DIARIA) ---*/

let peso = parseInt( prompt ("Ingresa tu peso corporal"));
const NUMERO_OBLIGATORIO = 22;
let actividad = parseInt ( prompt ("Agrega tu actividad, sedentario / activo / muy activo"));

let sedentario = 1.35;
let activo = 1.55;
let muyActivo = 1.75;

let aproximacionCalorias = peso * NUMERO_OBLIGATORIO;

if (peso == 70){
    console.log ("el resultado es"+ aproximacionCalorias);
}

let resultadoCalorias = aproximacionCalorias * actividad;

if (aproximacionCalorias == 1540){
    console.log ("en total tus calorias diarias son"+ aproximacionCalorias * sedentario);
}
if(aproximacionCalorias == 1540){
    console.log ("en total tus calorias diarias son"+ aproximacionCalorias * activo);
}
if(aproximacionCalorias == 1540){
    console.log ("en total tus calorias diarias son"+ aproximacionCalorias * muyActivo);
}