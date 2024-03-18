function validarTexto() {
    let texto = document.getElementById("texto").value;
    let expresion = /^[a-z\s]+$/;

      if (!expresion.test(texto)) {
        alert  ("Por favor, ingresa solo letras minúsculas y sin acento.");
        document.getElementById("texto").value = "";
      
    } 
}

function encriptar(){
    let texto = document.getElementById( "texto" ).value;
    let textoEncrip = document.getElementById("texto-Encrip");
    let comentario  = document.getElementById('comentario');

    let textoCifradado = texto
                         
                         .replace(/e/gi, "enter")
                         .replace(/o/gi, "ober")
                         .replace(/i/gi, "imes")
                         .replace(/a/gi, "ai")
                         .replace(/u/gi, "ufat")

    if (texto.length !=0){
        document.getElementById( "texto" ).value = textoCifradado;
        document.getElementById("textoDesencriptado").value = textoCifradado;
        textoEncrip.textContent = "Texto Encriptado Con Exito";
        comentario.textContent ="";
    }  else {
        alert("Ingrese Un Texto");
   }                   
}
function desencriptar(){
    let texto = document.getElementById( "texto" ).value;
    let textoEncrip = document.getElementById("texto-Encrip");
    let comentario  = document.getElementById('comentario');
    
    let textoCifradado = texto
                         .replace(/ufat/gi, "u")
                         .replace(/ober/gi, "o")
                         .replace(/imes/gi, "i")
                         .replace(/enter/gi, "e")                              
                         .replace(/ai/gi, "a")
                         

        if (texto.length !=0){
            document.getElementById( "texto" ).value = textoCifradado;
            document.getElementById("textoDesencriptado").value = textoCifradado
            textoEncrip.textContent = "Texto Desencriptado Con Exito";
            comentario.textContent="";
        }  else {
            alert('Ingrese un Texto')
        }             
}
function copiar(){
    let valor = document.getElementById('textoDesencriptado');
    console.log(valor)
        if (valor.value != 0){
        valor.select();
        navigator.clipboard.writeText(valor.value);
        alert("Texto Copiado Con Exito");
    } else{
        alert("No hay Texto a Copiar");
  }
    
}