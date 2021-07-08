const Pregunta1 = {
    id: 1 , 
    pregunta : "Como se llama Santiago",
    respuestas: ["Santi","Santiago","Raquel"],
    correcta: 1
}
const Pregunta2 = {
    id: 1 , 
    pregunta : "De que color es el sol",
    respuestas: ["Amarillo","Violeta","Azul"],
    correcta: 0
}
const Pregunta3 = {
    id: 1 , 
    pregunta : "Donde queda Argentina",
    respuestas: ["America del Norte","America Central","America del sur","Asia"],
    correcta: 2
}
//
const PreguntaD1 = {
    id: 2 , 
    pregunta : "Quien es  el mejor jugador de futbol",
    respuestas: ["Ronaldo","Messi","Neymar","Del Potro"],
    correcta: 1
}
const PreguntaD2 = {
    id: 2 , 
    pregunta : "Tenista Español",
    respuestas: ["Nadal","Del Potro","Federer"],
    correcta: 0
}
const PreguntaD3 = {
    id: 2 , 
    pregunta : "Donde se juega la copa America 2021",
    respuestas: ["Brasil","Portugal","Chile","Argentina","Peru"],
    correcta: 0
}
//
const PreguntaM1 = {
    id: 3 , 
    pregunta : "el mcd entre dos numeros coprimos",
    respuestas: ["1","7","0"],
    correcta: 0
}
const PreguntaM2 = {
    id: 3 , 
    pregunta : "Que relacion cumple transitividad",
    respuestas: ["a->a","a->b , b->c, a->c","a->b, a->c"],
    correcta: 1
}
const PreguntaM3 = {
    id: 3 , 
    pregunta : "1+5",
    respuestas: ["5","6","7"],
    correcta: 1
}

const pregArray = [Pregunta1,Pregunta2,Pregunta3,PreguntaD1,PreguntaD2,PreguntaD3,PreguntaM1,PreguntaM2,PreguntaM3]
const categoH = {
    nombre : "Historia",
    numCate : 1,
    preguntasH :  pregArray.filter(elemento => elemento.id == 1)
}
const categoD = {
    nombre : "Deportes",
    numCate : 2,
    preguntasD :   pregArray.filter(elemento => elemento.id == 2)
}
const categoM = {
    nombre : "Matematica",
    numCate : 3,
    preguntasM :   pregArray.filter(elemento => elemento.id == 3)
}
// vector con los objetos de categorias
const categorias = [categoD,categoH,categoM]
// tomo el elemento donde voy a insertar botones y texto 
let botonesInicio = document.getElementById("botonesInicio");
let escribirPreg = document.getElementById("preguntas");
let botonesPreg = document.getElementById("botones");

document.getElementById("btnFin").style.display = "none"
let btnFin = document.getElementById("btnFin");
btnFin.addEventListener("click", terminarDeJugar)
function terminarDeJugar(){
    alert(`Tu puntaje fue: ${puntaje}`)
    location.reload(true);
}

// Jugador
let puntaje = 0;
let mostrarPuntaje = document.getElementById("puntaje");
// funcion jugar 
function jugar(vector, preguntaRandom){
    let enunciado = document.createElement("p");
    enunciado.innerHTML = `<p>${vector[preguntaRandom].pregunta}</p>`
    let respuestaArray = vector[preguntaRandom].respuestas;
    escribirPreg.appendChild(enunciado);

    for(let i = 0; i < respuestaArray.length; i++){
        let botones = document.createElement("button");
        botones.innerHTML = `${respuestaArray[i]}`
        botones.setAttribute("value",`${i}`)
        botones.setAttribute("class","botonOpcion")
        botonesPreg.appendChild(botones);
        botones.addEventListener("click", opcionCorrecta)
        function opcionCorrecta(){
            if(botones.value == vector[preguntaRandom].correcta){
                puntaje = puntaje + 1;
                mostrarPuntaje.innerHTML = `Tu puntaje es: ${puntaje}`
                document.getElementById("btnFin").style.display = "block" 
            }else{
                puntaje = puntaje - 1;
                mostrarPuntaje.innerHTML = `Tu puntaje es: ${puntaje}`
                document.getElementById("btnFin").style.display = "block"                
            }
        }
    }
}

function categoUsu(){
    for(const cate of categorias){
        let botonesC = document.createElement("button");
        botonesC.innerHTML = `${cate.nombre}`
        botonesInicio.appendChild(botonesC);
        console.log(botonesC);
        botonesC.addEventListener("click", elegirCatego)
        function elegirCatego(){
            // genero numero random 
            let preguntaNum = Math.floor(Math.random()*3)
            switch(cate.numCate){
                case 1 :
                    jugar(cate.preguntasH,preguntaNum);
                    break;
                case 2 :
                    jugar(cate.preguntasD,preguntaNum);
                    break;
                case 3 :
                    jugar(cate.preguntasM,preguntaNum);
                    break;
            }
        }
    }       
}



let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", crearUsu)
function crearUsu(){
    const user = document.getElementById("usuario").value;
    document.getElementById("msjBienvenida").innerHTML = "¡Bienvenido " + user + "!";
    categoUsu();
}