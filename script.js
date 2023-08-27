let comentarios = [];

function mostraFecha(){
    document.getElementById("fecha").innerHTML = Date();
}
function saltoEliminar(){
    document.getElementById("eli").innerHTML = "<input type='button' value='Eliminar' onclick='eliminar()'>";
    
}
function mostrarComentarios(){
    document.getElementById("comentario").innerHTML = comentarios;
    saltoEliminar();
    
}

function agregarCom(){
    var com = "<p>"+document.getElementById("textInp").value;+"</p>";
    comentarios.push(com);
    mostrarComentarios();
    document.getElementById("textInp").value = "";
}

function eliminar(){
    comentarios.pop();
    mostrarComentarios();
}
