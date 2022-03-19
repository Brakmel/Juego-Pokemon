// Mi videojuego volvio en forma de fichas =) (humor)

class Picaro {
    constructor(){
        this.hp = 2600;
        this.imagen_atk1 = "Picaro_P1/Golpe_perfecto_1.PNG";
        this.imagen_atk2 = "Picaro_P1/Apuñalada_Doble1.PNG"; 
    }
    atk1(enemigo){
         enemigo.hp = enemigo.hp - 500;
    }
    atk2(enemigo){
        enemigo.hp = enemigo.hp - 1000;
    }
}
class Sacerdote {
    constructor(){
        this.hp = 2100;
        this.imagen_atk1 = "Sacerdote_P2/Golpe_Sagrado1.PNG";
        this.imagen_atk2 = "Sacerdote_P2/Cura_Sagrada1.PNG"; 
    }
    atk1(enemigo){
        enemigo.hp = enemigo.hp - 300;
    }
    atk2(aliado){
        aliado.hp = aliado.hp + 900;
    }
}
class Guerrero {
    constructor() {
        this.hp = 4000;
        this.imagen_atk1 = "Guerrero_P1/Grito1.PNG";
        this.imagen_atk2 = "Guerrero_P1/Salto_Heroico2.PNG";
    }
    atk1(enemigo){
        enemigo.hp = enemigo.hp -350;
    }
    atk2(enemigo){
        enemigo.hp = enemigo.hp -700;
    }
}
var player_1;
var player_2;
var player_3;
var player_4;

// Seleccion player 1 

function seleccionar_picaro_p1(){
    player_1 = new Picaro();
    document.getElementById("vida_p1").innerHTML = player_1.hp;
    document.getElementById("imagen_atk1_p1").src = "Cartas/Picaro.PNG";
    document.getElementById("boton_atk1_p1").innerHTML = "Embestida";
    document.getElementById("imagen_atk2_p1").src = "Cartas/Asesina.PNG";
    document.getElementById("boton_atk2_p1").innerHTML = "Llamarada";
}

function seleccionar_sacerdote_p1(){
    player_1 = new Sacerdote();
    document.getElementById("vida_p1").innerHTML = player_1.hp;
    document.getElementById("imagen_atk1_p1").src = "Cartas/Heler.PNG";
    document.getElementById("boton_atk1_p1").innerHTML = "¡charchazo!";
    document.getElementById("imagen_atk2_p1").src = "Cartas/Sacer.PNG";
    document.getElementById("boton_atk2_p1").innerHTML = "Pulso cura";
}

function seleccionar_guerrero_p1(){
    player_1 = new Guerrero();
    document.getElementById("vida_p1").innerHTML = player_1.hp;
    document.getElementById("imagen_atk1_p1").src = "Cartas/Warrior.PNG";
    document.getElementById("boton_atk1_p1").innerHTML = "Hiperrayo"
    document.getElementById("imagen_atk2_p1").src = "Cartas/Guerrero.PNG";
    document.getElementById("boton_atk2_p1").innerHTML = "Pisotón";
}
// Seleccion player 2 

function seleccionar_picaro_p2(){
    player_2 = new Picaro();
    document.getElementById("vida_p2").innerHTML = player_2.hp;
    document.getElementById("imagen_atk1_p2").src = "Cartas/Picaro.PNG";
    document.getElementById("boton_atk1_p2").innerHTML = "Embestida";
    document.getElementById("imagen_atk2_p2").src = "Cartas/Asesina.PNG";
    document.getElementById("boton_atk2_p2").innerHTML = "Llamarada";
}

function seleccionar_sacerdote_p2(){
    player_2 = new Sacerdote();
    document.getElementById("vida_p2").innerHTML = player_2.hp;
    document.getElementById("imagen_atk1_p2").src = "Cartas/Heler.PNG";
    document.getElementById("boton_atk1_p2").innerHTML = "¡charchazo!";
    document.getElementById("imagen_atk2_p2").src = "Cartas/Sacer.PNG";
    document.getElementById("boton_atk2_p2").innerHTML = "Pulso cura";
}

function seleccionar_guerrero_p2(){
    player_2 = new Guerrero();
    document.getElementById("vida_p2").innerHTML = player_2.hp;
    document.getElementById("imagen_atk1_p2").src = "Cartas/Warrior.PNG";
    document.getElementById("boton_atk1_p2").innerHTML = "Hiperrayo";
    document.getElementById("imagen_atk2_p2").src = "Cartas/Guerrero.PNG";
    document.getElementById("boton_atk2_p2").innerHTML = "Pisotón";
}
// Seleccionar player 3

function seleccionar_picaro_p3(){
    player_3 = new Picaro();
    document.getElementById("vida_p3").innerHTML = player_3.hp;
    document.getElementById("imagen_atk1_p3").src = "Cartas/Picaro.PNG";
    document.getElementById("boton_atk1_p3").innerHTML = "Embestida";
    document.getElementById("imagen_atk2_p3").src = "Cartas/Asesina.PNG";
    document.getElementById("boton_atk2_p3").innerHTML = "Llamarada";
}

function seleccionar_sacerdote_p3(){
    player_3 = new Sacerdote();
    document.getElementById("vida_p3").innerHTML = player_3.hp;
    document.getElementById("imagen_atk1_p3").src = "Cartas/Heler.PNG";
    document.getElementById("boton_atk1_p3").innerHTML = "¡charchazo!";
    document.getElementById("imagen_atk2_p3").src = "Cartas/Sacer.PNG";
    document.getElementById("boton_atk2_p3").innerHTML = "Pulso cura";
}

function seleccionar_guerrero_p3(){
    player_3 = new Guerrero();
    document.getElementById("vida_p3").innerHTML = player_3.hp;
    document.getElementById("imagen_atk1_p3").src = "Cartas/Warrior.PNG";
    document.getElementById("boton_atk1_p3").innerHTML = "Hiperrayo";
    document.getElementById("imagen_atk2_p3").src = "Cartas/Guerrero.PNG";
    document.getElementById("boton_atk2_p3").innerHTML = "Pisotón";
}
// Seleccionar player 4

function seleccionar_picaro_p4(){
    player_4 = new Picaro();
    document.getElementById("vida_p4").innerHTML = player_4.hp;
    document.getElementById("imagen_atk1_p4").src = "Cartas/Picaro.PNG";
    document.getElementById("boton_atk1_p4").innerHTML = "Embestida"
    document.getElementById("imagen_atk2_p4").src = "Cartas/Asesina.PNG";
    document.getElementById("boton_atk2_p4").innerHTML = "Llamarada";
}

function seleccionar_sacerdote_p4(){
    player_4 = new Sacerdote();
    document.getElementById("vida_p4").innerHTML = player_4.hp;
    document.getElementById("imagen_atk1_p4").src = "Cartas/Heler.PNG";
    document.getElementById("boton_atk1_p4").innerHTML = "¡charchazo!"
    document.getElementById("imagen_atk2_p4").src = "Cartas/Sacer.PNG";
    document.getElementById("boton_atk2_p4").innerHTML = "Pulso cura";
}
function seleccionar_guerrero_p4(){
    player_4 = new Guerrero();
    document.getElementById("vida_p4").innerHTML = player_4.hp;
    document.getElementById("imagen_atk1_p4").src = "Cartas/Warrior.PNG";
    document.getElementById("boton_atk1_p4").innerHTML = "Hiperrayo";
    document.getElementById("imagen_atk2_p4").src = "Cartas/Guerrero.PNG";
    document.getElementById("boton_atk2_p4").innerHTML = "Pisotón";
}
// Ataques Player 1 
function boton_atk1_p1(){
    var numero_de_player = prompt("¿a que Pokemon lanzo la habilidad?","3");
    if (numero_de_player == "1"){
        player_1.atk1(player_1);
    }else if(numero_de_player == "2"){
        player_1.atk1(player_2);
    }else if(numero_de_player == "3"){
        player_1.atk1(player_3);
    }else if(numero_de_player == "4"){
        player_1.atk1(player_4);
    }
    actualizar_vidas();
    document.getElementById("r_player_1").innerHTML += `<img src="${player_1.imagen_atk1}"><br>`;
    revisar_victoria();
}

function boton_atk2_p1(){
    var numero_de_player = prompt("¿a que Pokemon lanzo la habilidad?","3");
    if (numero_de_player == "1"){
        player_1.atk2(player_1);
    }else if(numero_de_player == "2"){
        player_1.atk2(player_2);
    }else if(numero_de_player == "3"){
        player_1.atk2(player_3);
    }else if(numero_de_player == "4"){
        player_1.atk2(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_1").innerHTML += `<img src="${player_1.imagen_atk2}"><br>`;
   revisar_victoria();
}
// Ataques Player 2 
function boton_atk1_p2(){
    var numero_de_player = prompt("¿a que Pokemon lanzo la habilidad?","4");
    if (numero_de_player == "1"){
        player_2.atk1(player_1);
    }else if(numero_de_player == "2"){
        player_2.atk1(player_2);
    }else if(numero_de_player == "3"){
        player_2.atk1(player_3);
    }else if(numero_de_player == "4"){
        player_2.atk1(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_1").innerHTML += `<img src="${player_2.imagen_atk1}"><br>`;
   revisar_victoria();
}

function boton_atk2_p2(){
    var numero_de_player = prompt("¿a que Pokemon lanzo la habilidad?","4");
    if (numero_de_player == "1"){
        player_2.atk2(player_1);
    }else if(numero_de_player == "2"){
        player_2.atk2(player_2);
    }else if(numero_de_player == "3"){
        player_2.atk2(player_3);
    }else if(numero_de_player == "4"){
        player_2.atk2(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_1").innerHTML += `<img src="${player_2.imagen_atk2}"><br>`;
   revisar_victoria();
}

// Ataques Player 3 

function boton_atk1_p3(){
    var numero_de_player = prompt("¿a que Pokemon lanzo la habilidad?","1");
    if (numero_de_player == "1"){
        player_3.atk1(player_1);
    }else if(numero_de_player == "2"){
        player_3.atk1(player_2);
    }else if(numero_de_player == "3"){
        player_3.atk1(player_3);
    }else if(numero_de_player == "4"){
        player_3.atk1(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_2").innerHTML += `<img src="${player_3.imagen_atk1}"><br>`;
   revisar_victoria();
}

function boton_atk2_p3(){
    var numero_de_player = prompt("¿a que Pokemon lanzo la habilidad?","1");
    if (numero_de_player == "1"){
        player_3.atk2(player_1);
    }else if(numero_de_player == "2"){
        player_3.atk2(player_2);
    }else if(numero_de_player == "3"){
        player_3.atk2(player_3);
    }else if(numero_de_player == "4"){
        player_3.atk2(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_2").innerHTML += `<img src="${player_3.imagen_atk2}"><br>`;
   revisar_victoria();
}


// Ataques Player 4

function boton_atk1_p4(){
    var numero_de_player = prompt("¿a que Pokemon lanzo la habilidad","2");
    if (numero_de_player == "1"){
        player_4.atk1(player_1);
    }else if(numero_de_player == "2"){
        player_4.atk1(player_2);
    }else if(numero_de_player == "3"){
        player_4.atk1(player_3);
    }else if(numero_de_player == "4"){
        player_4.atk1(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_2").innerHTML += `<img src="${player_4.imagen_atk1}"><br>`;
   revisar_victoria();
}

function boton_atk2_p4(){
    var numero_de_player = prompt("¿a que Pokemon lanzo la habilidad?","2");
    if (numero_de_player == "1"){
        player_4.atk2(player_1);
    }else if(numero_de_player == "2"){
        player_4.atk2(player_2);
    }else if(numero_de_player == "3"){
        player_4.atk2(player_3);
    }else if(numero_de_player == "4"){
        player_4.atk2(player_4);
    }
    actualizar_vidas();
   document.getElementById("r_player_2").innerHTML += `<img src="${player_4.imagen_atk2}"><br>`;
   revisar_victoria();
}

// Actualizar vidas =)

function actualizar_vidas(){
    document.getElementById("vida_p1").innerHTML = player_1.hp;
    document.getElementById("vida_p2").innerHTML = player_2.hp;
    document.getElementById("vida_p3").innerHTML = player_3.hp;
    document.getElementById("vida_p4").innerHTML = player_4.hp;
}

// Sirve para ver quien gano =)

function revisar_victoria(){
    if (player_1.hp <= 0 && player_2.hp <= 0){
        alert("🔵¡GANO EL ENTRENADOR AZUL!🔵")
        mostrar();
    }else if(player_3.hp <= 0 && player_4.hp <=0){
        alert("🔴¡GANO EL ENTRADOR ROJO!🔴")
        mostrar();
    }  
}

// Sirve para hacer funcionar el calendario 

var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

function readFormData() {
    var formData = {};
    formData["NICK"] = document.getElementById("NICK").value;
    formData["CITY"] = document.getElementById("CITY").value;
    formData["DATE"] = document.getElementById("DATE").value;
    formData["DUO"] = document.getElementById("DUO").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("ResultList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.NICK;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.CITY;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.DATE;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.DUO;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Editar Entrenador</button> <button onClick="onDelete(this)">Borrar Entrenador</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("NICK").value = selectedRow.cells[0].innerHTML;
    document.getElementById("CITY").value = selectedRow.cells[1].innerHTML;
    document.getElementById("DATE").value = selectedRow.cells[2].innerHTML;
    document.getElementById("DUO").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.NICK;
    selectedRow.cells[1].innerHTML = formData.CITY;
    selectedRow.cells[2].innerHTML = formData.DATE;
    selectedRow.cells[3].innerHTML = formData.DUO;
}

function onDelete(td) {
    if (confirm(' Quieres borrar este entrenador?')) {
        row = td.parentElement.parentElement;
        document.getElementById('ResultList').deleteRow(row.rowIndex);
        resetForm();
    }
}

