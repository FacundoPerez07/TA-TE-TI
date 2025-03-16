// Cambiar colores de pagina entre claro y oscuro
var body = document.getElementById("body");
var botonColores = document.getElementById("botonColores");
var posicionBoton = document.getElementById("contBoton");
var botonesColor = document.getElementsByClassName("botonJuego");
var textoBoton = document.getElementsByClassName("marca");
var color = false;
var guia = document.getElementById("guia");
var colorContPlayer = document.getElementById("player");

function colorFondo(){
    if(color == true){
        // Cambiar color del texto del turno
        guia.style.color = "white";
        // Cambiar color de fondo
        body.style.backgroundColor = "#1a577b";
        // Cambiar posicion de boton
        botonColores.style.backgroundColor = "#eaf8aa";
        botonColores.style.transform = 'translate(0px) rotate(0deg)';
        color = false;
    }else{
        // Cambiar color de texto del turno
        guia.style.color = "black";
        // Cambiar color de fondo
        body.style.backgroundColor = "#eaf8aa";
        // Cambiar posicion de boton
        botonColores.style.backgroundColor = "#1a577b";
        botonColores.style.transform = 'translate(30px) rotate(180deg)';
        color = true;
    }
}

posicionBoton.addEventListener("click", colorFondo);


// Codigo necesario para el juego //

// Obtener botones
var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");

var boton4 = document.getElementById("boton4");
var boton5 = document.getElementById("boton5");
var boton6 = document.getElementById("boton6");

var boton7 = document.getElementById("boton7");
var boton8 = document.getElementById("boton8");
var boton9 = document.getElementById("boton9");

// Seguimiento de jugador
var jugador = true; // True == X y false == O
var espacio = [false, false, false, false, false, false, false, false, false, false]; //True ocupado, false vacio
var puntuacion = []; // Guardar valores: true = X y false = O;
var alguienGano = false;
var ganoX = []; // True significa que gano Player 1, false lo contrario

//Informacion necesaria para mostrar las partidas ganadas de cada jugador
var mostrarPlayer1 = document.getElementById("puntuacionPlayer1");
var mostrarPlayer2 = document.getElementById("puntuacionPlayer2");
var puntuacionPlayer1 = 0;
var puntuacionPlayer2 = 0;
//Obtener textos de los botones
var marca1 = document.getElementById("marca1");
var marca2 = document.getElementById("marca2");
var marca3 = document.getElementById("marca3");

var marca4 = document.getElementById("marca4");
var marca5 = document.getElementById("marca5");
var marca6 = document.getElementById("marca6");

var marca7 = document.getElementById("marca7");
var marca8 = document.getElementById("marca8");
var marca9 = document.getElementById("marca9");


//Funciones
function primero(){
    if((jugador == true && espacio[1] == false) && alguienGano == false){
        marca1.innerHTML = "X";
        puntuacion[0] = true;
        espacio[1] = true;
        jugador = false;
    }else{
        if(espacio[1] == false && alguienGano == false){
            marca1.innerHTML = "O";
            puntuacion[0] = false;
            espacio[1] = true;
            jugador = true;
        }
    }

    turno();
}
function segundo(){
    if((jugador == true && espacio[2] == false) && alguienGano == false){
        marca2.innerHTML = "X";
        puntuacion[1] = true;
        espacio[2] = true;
        jugador = false;
    }else{
        if(espacio[2] == false && alguienGano == false){
            marca2.innerHTML = "O";
            puntuacion[1] = false;
            espacio[2] = true;
            jugador = true;
        }
    }

    turno();
}
function tercero(){
    if((jugador == true && espacio[3] == false) && alguienGano == false){
        marca3.innerHTML = "X";
        puntuacion[2] = true;
        espacio[3] = true;
        jugador = false;
    }else{
        if(espacio[3] == false && alguienGano == false){
            marca3.innerHTML = "O";
            puntuacion[2] = false;
            espacio[3] = true;
            jugador = true;
        }
    }

    turno();
}
function cuarto(){
    if((jugador == true && espacio[4] == false) && alguienGano == false){
        marca4.innerHTML = "X";
        puntuacion[3] = true;
        espacio[4] = true;
        jugador = false;
    }else{
        if(espacio[4] == false && alguienGano == false){
            marca4.innerHTML = "O";
            puntuacion[3] = false;
            espacio[4] = true;
            jugador = true;
        }
    }

    turno();
}
function quinto(){
    if((jugador == true && espacio[5] == false) && alguienGano == false){
        marca5.innerHTML = "X";
        puntuacion[4] = true;
        espacio[5] = true;
        jugador = false;
    }else{
        if(espacio[5] == false && alguienGano == false){
            marca5.innerHTML = "O";
            puntuacion[4] = false;
            espacio[5] = true;
            jugador = true;
        }
    }

    turno();
}
function sexto(){
    if((jugador == true && espacio[6] == false) && alguienGano == false){
        marca6.innerHTML = "X";
        puntuacion[5] = true;
        espacio[6] = true;
        jugador = false;
    }else{
        if(espacio[6] == false && alguienGano == false){
            marca6.innerHTML = "O";
            puntuacion[5] = false;
            espacio[6] = true;
            jugador = true;
        }
    }

    turno();
}
function septimo(){
    if((jugador == true && espacio[7] == false) && alguienGano == false){
        marca7.innerHTML = "X";
        puntuacion[6] = true;
        espacio[7] = true;
        jugador = false;
    }else{
        if(espacio[7] == false && alguienGano == false){
            marca7.innerHTML = "O";
            puntuacion[6] = false;
            espacio[7] = true;
            jugador = true;
        }
    }

    turno();
}
function octavo(){
    if((jugador == true && espacio[8] == false) && alguienGano == false){
        marca8.innerHTML = "X";
        puntuacion[7] = true;
        espacio[8] = true;
        jugador = false;
    }else{
        if(espacio[8] == false && alguienGano == false){
            marca8.innerHTML = "O";
            puntuacion[7] = false;
            espacio[8] = true;
            jugador = true;
        }
    }

    turno();
}
function noveno(){
    if((jugador == true && espacio[9] == false) && alguienGano == false){
        marca9.innerHTML = "X";
        puntuacion[8] = true;
        espacio[9] = true;
        jugador = false;
    }else{
        if(espacio[9] == false && alguienGano == false){
            marca9.innerHTML = "O";
            puntuacion[8] = false;
            espacio[9] = true;
            jugador = true;
        }
    }

    turno();
}

function ganador(){
    // Revisar si X gano
    if(puntuacion[0] == true && puntuacion[1] == true && puntuacion[2] == true){
        guia.innerHTML = "¡" + player1.value + " just won!";
        alguienGano = true;
        ganoX = [true];
        puntuacionPlayer1 ++;
        if(puntuacionPlayer1 != 0 && puntuacionPlayer1%5 != 0){
            mostrarPlayer1.innerHTML += "|";
        }else if(puntuacionPlayer1 != 0){
            mostrarPlayer1.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[0] == true && puntuacion[3] == true && puntuacion[6] == true){
        guia.innerHTML = "¡" + player1.value + " just won!";
        alguienGano = true;
        ganoX = [true];
        puntuacionPlayer1 ++;
        if(puntuacionPlayer1 != 0 && puntuacionPlayer1%5 != 0){
            mostrarPlayer1.innerHTML += "|";
        }else if(puntuacionPlayer1 != 0){
            mostrarPlayer1.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[0] == true && puntuacion[4] == true && puntuacion[8] == true){
        guia.innerHTML = "¡" + player1.value + " just won!";
        alguienGano = true;
        ganoX = [true];
        puntuacionPlayer1 ++;
        if(puntuacionPlayer1 != 0 && puntuacionPlayer1%5 != 0){
            mostrarPlayer1.innerHTML += "|";
        }else if(puntuacionPlayer1 != 0){
            mostrarPlayer1.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[6] == true && puntuacion[7] == true && puntuacion[8] == true){
        guia.innerHTML = "¡" + player1.value + " just won!";
        alguienGano = true;
        ganoX = [true];
        puntuacionPlayer1 ++;
        if(puntuacionPlayer1 != 0 && puntuacionPlayer1%5 != 0){
            mostrarPlayer1.innerHTML += "|";
        }else if(puntuacionPlayer1 != 0){
            mostrarPlayer1.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[2] == true && puntuacion[5] == true && puntuacion[8] == true){
        guia.innerHTML = "¡" + player1.value + " just won!";
        alguienGano = true;
        ganoX = [true];
        puntuacionPlayer1 ++;
        if(puntuacionPlayer1 != 0 && puntuacionPlayer1%5 != 0){
            mostrarPlayer1.innerHTML += "|";
        }else if(puntuacionPlayer1 != 0){
            mostrarPlayer1.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[6] == true && puntuacion[4] == true && puntuacion[2] == true){
        guia.innerHTML = "¡" + player1.value + " just won!";
        alguienGano = true;
        ganoX = [true];
        puntuacionPlayer1 ++;
        if(puntuacionPlayer1 != 0 && puntuacionPlayer1%5 != 0){
            mostrarPlayer1.innerHTML += "|";
        }else if(puntuacionPlayer1 != 0){
            mostrarPlayer1.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[1] == true && puntuacion[4] == true && puntuacion[7] == true){
        guia.innerHTML = "¡" + player1.value + " just won!";
        alguienGano = true;
        ganoX = [true];
        puntuacionPlayer1 ++;
        if(puntuacionPlayer1 != 0 && puntuacionPlayer1%5 != 0){
            mostrarPlayer1.innerHTML += "|";
        }else if(puntuacionPlayer1 != 0){
            mostrarPlayer1.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[3] == true && puntuacion[4] == true && puntuacion[5] == true){
        guia.innerHTML = "¡" + player1.value + " just won!";
        alguienGano = true;
        ganoX = [true];
        puntuacionPlayer1 ++;
        if(puntuacionPlayer1 != 0 && puntuacionPlayer1%5 != 0){
            mostrarPlayer1.innerHTML += "|";
        }else if(puntuacionPlayer1 != 0){
            mostrarPlayer1.innerHTML += "|<br>"
        }
        reset.style.display = "block";
        // revisar si O gano
    }else if(puntuacion[0] == false && puntuacion[1] == false && puntuacion[2] == false){
        guia.innerHTML = "¡" + player2.value + " just won!";
        alguienGano = true;
        ganoX = [false];
        puntuacionPlayer2 ++;
        if(puntuacionPlayer2 != 0 && puntuacionPlayer2%5 != 0){
            mostrarPlayer2.innerHTML += "|";
        }else if(puntuacionPlayer2 != 0){
            mostrarPlayer2.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[0] == false && puntuacion[3] == false && puntuacion[6] == false){
        guia.innerHTML = "¡" + player2.value + " just won!";
        alguienGano = true;
        ganoX = [false];
        puntuacionPlayer2 ++;
        if(puntuacionPlayer2 != 0 && puntuacionPlayer2%5 != 0){
            mostrarPlayer2.innerHTML += "|";
        }else if(puntuacionPlayer2 != 0){
            mostrarPlayer2.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[0] == false && puntuacion[4] == false && puntuacion[8] == false){
        guia.innerHTML = "¡" + player2.value + " just won!";
        alguienGano = true;
        ganoX = [false];
        puntuacionPlayer2 ++;
        if(puntuacionPlayer2 != 0 && puntuacionPlayer2%5 != 0){
            mostrarPlayer2.innerHTML += "|";
        }else if(puntuacionPlayer2 != 0){
            mostrarPlayer2.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[6] == false && puntuacion[7] == false && puntuacion[8] == false){
        guia.innerHTML = "¡" + player2.value + " just won!";
        alguienGano = true;
        ganoX = [false];
        puntuacionPlayer2 ++;
        if(puntuacionPlayer2 != 0 && puntuacionPlayer2%5 != 0){
            mostrarPlayer2.innerHTML += "|";
        }else if(puntuacionPlayer2 != 0){
            mostrarPlayer2.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[2] == false && puntuacion[5] == false && puntuacion[8] == false){
        guia.innerHTML = "¡" + player2.value + " just won!";
        alguienGano = true;
        ganoX = [false];
        puntuacionPlayer2 ++;
        if(puntuacionPlayer2 != 0 && puntuacionPlayer2%5 != 0){
            mostrarPlayer2.innerHTML += "|";
        }else if(puntuacionPlayer2 != 0){
            mostrarPlayer2.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[6] == false && puntuacion[4] == false && puntuacion[2] == false){
        guia.innerHTML = "¡" + player2.value + " just won!";
        alguienGano = true;
        ganoX = [false];
        puntuacionPlayer2 ++;
        if(puntuacionPlayer2 != 0 && puntuacionPlayer2%5 != 0){
            mostrarPlayer2.innerHTML += "|";
        }else if(puntuacionPlayer2 != 0){
            mostrarPlayer2.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[1] == false && puntuacion[4] == false && puntuacion[7] == false){
        guia.innerHTML = "¡" + player2.value + " just won!";
        alguienGano = true;
        ganoX = [false];
        puntuacionPlayer2 ++;
        if(puntuacionPlayer2 != 0 && puntuacionPlayer2%5 != 0){
            mostrarPlayer2.innerHTML += "|";
        }else if(puntuacionPlayer2 != 0){
            mostrarPlayer2.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }else if(puntuacion[3] == false && puntuacion[4] == false && puntuacion[5] == false){
        guia.innerHTML = "¡" + player2.value + " just won!";
        alguienGano = true;
        ganoX = [false];
        puntuacionPlayer2 ++;
        if(puntuacionPlayer2 != 0 && puntuacionPlayer2%5 != 0){
            mostrarPlayer2.innerHTML += "|";
        }else if(puntuacionPlayer2 != 0){
            mostrarPlayer2.innerHTML += "|<br>"
        }
        reset.style.display = "block";
    }
}
function turno(){

    if(alguienGano == false){
        var verificacion = 0;

        if(jugador == true){
            guia.innerHTML = "Player to play: " + player1.value;
        }else{
            guia.innerHTML = "Player to play: " + player2.value;
        }

        for(i = 1; i <= 9; i++){
            if(espacio[i] == true){
                verificacion++;
            }
        }

        if(verificacion == 9){
            guia.innerHTML = "Ups, nobody won!";
            reset.style.display = "block";
        }
        
        ganador();
    }
}

// Obtener clicks del usuario
boton1.addEventListener("click", primero);
boton2.addEventListener("click", segundo);
boton3.addEventListener("click", tercero);
boton4.addEventListener("click", cuarto);
boton5.addEventListener("click", quinto);
boton6.addEventListener("click", sexto);
boton7.addEventListener("click", septimo);
boton8.addEventListener("click", octavo);
boton9.addEventListener("click", noveno);


// Resetear el juego //
var reset = document.getElementById("reset");

function resetear(){
    marca1.innerHTML = "";
    marca2.innerHTML = "";
    marca3.innerHTML = "";
    marca4.innerHTML = "";
    marca5.innerHTML = "";
    marca6.innerHTML = "";
    marca7.innerHTML = "";
    marca8.innerHTML = "";
    marca9.innerHTML = "";

    if(alguienGano == false){
        guia.innerHTML = "Player to play: " + player1.value;
        jugador = true;
    }else if(ganoX[0] == true){
        guia.innerHTML = "Player to play: " + player2.value;
        jugador = false;
    }else{
        guia.innerHTML = "Player to play: " + player1.value;
        jugador = true;
    }

    espacio = [false, false, false, false, false, false, false, false, false, false]; //True ocupado, false vacio
    puntuacion = []; // Guardar valores: true = X y false = O;
    alguienGano = false;

    reset.style.display = "none";
}

reset.addEventListener("click", resetear);

// Informacion de jugadores //
var labelPlayer1 = document.getElementById("labelPlayer1"); // Label que muestra el nombre del jugador
var player1 = document.getElementById("player1"); // Input que permite cambiar el nombre del jugador 1

var labelPlayer2 = document.getElementById("labelPlayer2");
var player2 = document.getElementById("player2");

var contPlayer1 = document.getElementById("contNombre1");
var contPlayer2 = document.getElementById("contNombre2");

var nombreDefinitivo1 = document.getElementById("nombreDefinitivo1");
var nombreDefinitivo2 = document.getElementById("nombreDefinitivo2");

function obtenerPlayer1(){
    var nombrePlayer1 = document.getElementById("player1").value;

    if(nombrePlayer1 == ""){
        labelPlayer1.style.color = "lightgray";
        labelPlayer1.style.zIndex = "1";
    }else{
        labelPlayer1.style.color = "white";
        labelPlayer1.style.zIndex = "-1";
    }
}
function obtenerPlayer2(){
    var nombrePlayer2 = document.getElementById("player2").value;

    if(nombrePlayer2 == ""){
        labelPlayer2.style.color = "lightgray";
        labelPlayer2.style.zIndex = "1";
    }else{
        labelPlayer2.style.color = "white";
        labelPlayer2.style.zIndex = "-1";
    }
}

player1.addEventListener("input", obtenerPlayer1);
player2.addEventListener("input", obtenerPlayer2);

// Parte importante de los nombres
var botonNombres = document.getElementById("nombres");

function cambiarNombres(){
    botonNombres.style.display = "none";
    player1.style.display = "none";
    player2.style.display = "none";
    contPlayer1.style.display = "none";
    contPlayer2.style.display = "none";
    nombreDefinitivo1.style.display = "block";
    nombreDefinitivo2.style.display = "block";
    nombreDefinitivo1.style.fontSize = "25px";
    nombreDefinitivo2.style.fontSize = "25px";

    if(player1.value ==  ""){
        nombreDefinitivo1.innerHTML = "Player 1";
        player1.value = "Player 1";
    }else{
        nombreDefinitivo1.innerHTML = player1.value;
    }
    if(player2.value == ""){
        nombreDefinitivo2.innerHTML = "Player 2";
        player2.value = "Player 2";
    }else{
        nombreDefinitivo2.innerHTML = player2.value;
    }

    boton1.style.display = "block";
    boton2.style.display = "block";
    boton3.style.display = "block";
    boton4.style.display = "block";
    boton5.style.display = "block";
    boton6.style.display = "block";
    boton7.style.display = "block";
    boton8.style.display = "block";
    boton9.style.display = "block";
    
    guia.innerHTML = "Player to play: " + player1.value;
}

botonNombres.addEventListener("click", cambiarNombres);