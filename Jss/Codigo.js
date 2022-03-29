var btn = document.getElementById("btnEdad");
var numcharacters ;
var namee = "";

function countName(name_character){
    namee = name_character.value;
}

function countChars(num_characters){
    numcharacters = num_characters.value;
}

function pres(){
    if(numcharacters  >=18 ){
        console.log(document.getElementById("Resultado").innerHTML = "Hola "+ namee+ ","+ " eres mayor de edad");
    }
    else if(numcharacters  <=0 ) {
        console.log(document.getElementById("Resultado").innerHTML = "No es una edad valida");
    }
    else if(numcharacters  <18  ){
        console.log(document.getElementById("Resultado").innerHTML = "Hola "+ namee+ ","+ " NO eres mayor de edad");
    }
}

var btn = document.getElementById("button_add");
var numcharacters ;
var namee;
var promedio;

function countName(name_character){
    namee =  name_character.value;
}

function countCourse(course_characters){
    coursee =  course_characters.value;
}

function countNote1(note1_characters){
    note1 = parseFloat(note1_characters.value);
}

function countNote2(note2_characters){
    note2 =  parseFloat(note2_characters.value);
}

function countNote3(note3_characters){
    note3 =  parseFloat(note3_characters.value);
}

function press(){
    suma = note1 + note2  + note3 
    promedio = suma/3
    
    if(promedio < 3){
        console.log(document.getElementById("character_num").innerHTML = "Lo siento "+ namee+ ", " + '<span style="color: red"> su nota es </span>' + promedio.toFixed(2)+ ", NO pasaste la materia "+ coursee );
    }
    else if(promedio >= 3) {
        console.log(document.getElementById("character_num").innerHTML = "Felicitaciones "+ namee+ ", " + '<span style="color: green"> su nota es </span>' + promedio.toFixed(2)+ ", Pasaste la materia "+ coursee );
    }
    else{
        console.log(document.getElementById("character_num").innerHTML = "Ingrese valores validos ");
    }
} 

function test(ini) {
    txt1 = ini.value;
    txt2 = ""

    var nopar = txt1.split(",");

    for (var i = 0; i < nopar.length; i++) {
        var num = nopar[i];

    if (Number.isInteger(parseFloat(num))) {

    if (parseInt(num) % 2 == 0) {
                txt2 =
                    txt2 + num + '  es numero par '
    } else {
                txt2 =
                    txt2 + num + ' es numero impar ';
}
    } else {
txt2 =
txt2 +
num +
' no es un numero entero ';
}

txt2 = txt2 + "<br>";
}

var textRes = document.getElementById("output");
 textRes.innerHTML = txt2;
}
