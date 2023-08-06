const titulo = document.querySelector("#miTitulo");
const texto = document.querySelector("#miTexto");
const entrada = document.querySelector("#miEntrada");
const boton = document.querySelector("#miBoton");
const resultado = document.querySelector("#salida");

let estatus = "inicio";
let numero = "";
let miArreglo = [];
let entradaArreglo = [];
entrada.style.display = "none";
boton.style.visibility = "hidden";
resultado.style.visibility = "hidden";

const pokemons = 
[ 'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb' ];

function ejercicio1() {
    resultado.value = "";
    miArreglo = [];
    estatus = "ej1"
    titulo.innerHTML ="Ejercicio 1";
    texto.innerHTML ="Números impares del 1 al 50.";
    entrada.style.display = "none";
    boton.style.visibility = "";
    resultado.style.visibility = "";
}

function ejercicio2() {
    resultado.value = "";
    miArreglo = [];
    estatus = "ej2"
    entrada.value = "";
    titulo.innerHTML ="Ejercicio 2";
    texto.innerHTML ="Ingresa un número del 1 al 100:";
    entrada.style.display = "";
    entrada.placeholder = "Número";
    boton.style.visibility = "";
    resultado.style.visibility = "";
}

function ejercicio3() {
    resultado.value = "";
    miArreglo = [];
    estatus = "ej3"
    titulo.innerHTML ="Ejercicio 3";
    texto.innerHTML ="Del arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] solo se muestran los números:";
    entrada.style.display = "none";
    boton.style.visibility = "";
    resultado.style.visibility = "";
}

boton.addEventListener("click", () => {
    resultado.value = "";
    miArreglo = [];
    if (estatus==="ej1") {
        for (let i=1;i<=50;i++ ) {
            if (i % 2 !== 0) {
                miArreglo.push(i);
            }
        }
        resultado.value = miArreglo;
    } else if (estatus === "ej2") {
        numero = Number(entrada.value);
        if (numero > 100 || numero < 0) {
            texto.innerHTML = "El número debe ser entre 1 y 100. Intenta de nuevo."
            entrada.value = "";
        } else {
            for (let i = 0; i < numero-1; i++) {
                if(i % 5 === 0) {
                    miArreglo.push(" "+pokemons[i]);
                }
            }
            resultado.value = miArreglo;
            entrada.value = "";
        }
    } else if (estatus === "ej3") {
        let myString = [4,"dos",8,"tres",5,9,1,"cero"];
        for (i=0; i<= myString.length-1; i++) {
            if (!isNaN(myString[i])) {
                miArreglo.push(myString[i]);
            }
        } 
        resultado.value = miArreglo;
    } 
})