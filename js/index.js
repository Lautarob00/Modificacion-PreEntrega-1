/*--- LE PREGUNTO AL USUARIO SU EDAD PARA INGRESAR AL SITIO WEB ---*/

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
let peso = parseInt( prompt ("Ingresa tu peso corporal"));
const NUMERO_OBLIGATORIO = 22;
let actividad = parseInt ( prompt ("Agrega tu actividad, sedentario / activo / muy activo"));

let aproximacionCalorias = peso * NUMERO_OBLIGATORIO;

if (peso == 70){
    console.log ("el resultado es"+ aproximacionCalorias);
}

let sedentario = 1.35;
let activo = 1.55;
let muyActivo = 1.75;

if (aproximacionCalorias == 1540){
    console.log ("en total tus calorias diarias son"+ aproximacionCalorias * sedentario);
    alert("Al ser una persona sedentaria, tus calorias diarias totales son: "+ aproximacionCalorias * sedentario)
}
if(aproximacionCalorias == 1540){
    console.log ("en total tus calorias diarias son"+ aproximacionCalorias * activo);
    alert("Al ser una persona activa, tus calorias diarias totales son: "+ aproximacionCalorias * activo)
}
if(aproximacionCalorias == 1540){
    console.log ("en total tus calorias diarias son"+ aproximacionCalorias * muyActivo);
    alert("Al ser una persona muy activa, tus calorias diarias totales son: "+ aproximacionCalorias *muyActivo)
}
}

calculoCalorias();


/*--- DESBLOQUEA DECADAS DE PROGRESO PERSONAL EN SOLO 12 SEMANAS. NUEVAMENTE, EN ESTE PUNTO MI IDEA REALIZAR UN DESCUENTO DEL 10% A ESTUDIANTES UNIVERSITARIOS QUE SE ENCUENTRAN EN ESE ESTANCAMIENTO ADOLESCENTE EN DONDE NO ENCUENTRAN SU PROPOSITO DE VIDA. POR ESO EL DESCUENTO, PARA INCENTIVARLOS A ENTRAR AL PROGRAMA Y PARA QUE PUEDAN CAMBIAR SU MANERA DE VIVIR CUANTO ANTES ---*/

function calcular (montoInicial){
    let descuentoEstudiantil = 0.1;

    function calcularDescuento(){
        return montoInicial * descuentoEstudiantil;

    }

    let descuento = calcularDescuento();
    let totalDescuento = montoInicial - descuento;

    return totalDescuento;
}

console.log(calcular(10000))
