
function encryptLetter(letra) {
    if(letra === "e") return "enter";
    if(letra === "i") return "imes";
    if (letra === "a") return "ai";
    if(letra === "o") return "ober";
    if(letra === "u") return "ufat";
    return letra;
}

function encriptarTexto(){

let textoIngresado = document.getElementById("textoIngresado").value;
let textoEncriptado = "";

for (var i = 0; i < textoIngresado.length; i++){
    let letra = textoIngresado[i];
    textoEncriptado += encryptLetter(letra );
}

if(textoIngresado != 0){
document.getElementById("inputTextoEncriptado").value = textoEncriptado;
document.getElementById("muñeco").setAttribute('style','display: none')    
document.getElementById("msgError").setAttribute('style','display: none')
document.getElementById("parrafo").setAttribute('style','display: none')    

}else{
    document.getElementById("muñeco").setAttribute('style','display: flex')    
    document.getElementById("msgError").setAttribute('style','display: flex')    
    document.getElementById("inputTextoEncriptado").value = '';        
    document.getElementById("parrafo").setAttribute('style','display: flex')    

}
}

function desencriptarTexto() {
let textoIngresado = document.getElementById("textoIngresado").value;

let textoDescifrado = textoIngresado
.replace(/enter/gi, 'e')
.replace(/imes/gi, 'i')
.replace(/ai/gi, 'a')
.replace(/ober/gi, 'o')
.replace(/ufat/gi, 'u')

if (textoIngresado != 0 )
 document.getElementById("inputTextoEncriptado").value = textoDescifrado;
} 