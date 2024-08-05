function calcularNota() {
    var nota1 = parseFloat(document.getElementById("nota1").value)
    var nota2 = parseFloat(document.getElementById("nota2").value)
    var nota3 = parseFloat(document.getElementById("nota3").value)
    var mensaje1 = document.getElementById("mensaje1")
    var mensaje2 = document.getElementById("mensaje2")
    var mensaje3 = document.getElementById("mensaje3")
    var Retornar = false
  
    if (MaximoPermitido(nota1, 30)) Retornar = true
    if (MaximoPermitido(nota2, 30)) Retornar = true
    if (MaximoPermitido(nota3, 40)) Retornar = true
   
    if (Retornar==false) {
   //     alert("obtenerMensaje true" + nota1)
        LimpiarCampos();
    } else {
     //   alert("obtenerMensaje false" + nota1)
        mensaje1.innerText = obtenerMensaje(nota1)
        mensaje2.innerText = obtenerMensaje(nota2)
        mensaje3.innerText = obtenerMensaje(nota3)
    }
}

function obtenerMensaje(nota) {
    if (nota >= 0 && nota < 60) {
        return "Reprobado"
    } else if (nota >= 60 && nota < 79) {
        return "Bueno"
    } else if (nota >= 80 && nota < 89) {
        return "Muy Bueno"
    } else if (nota >= 90 && nota <= 100) {
        return "Sobresaliente" 
    }
}

function MaximoPermitido(nota, maximo) {
    if (nota <= maximo) {
        alert(`La nota debe ser menor o igual a ${maximo}.`)
        return false
    }
    else
    {
        return true
    }
    return true
}

function LimpiarCampos() {
    document.getElementById("nota1").value = ""
    document.getElementById("nota2").value = ""
    document.getElementById("nota3").value = ""
    var mensaje1 = document.getElementById("mensaje1")
    var mensaje2 = document.getElementById("mensaje2")
    var mensaje3 = document.getElementById("mensaje3")
  
    mensaje1.innerText = ""
    mensaje2.innerText = ""
    mensaje3.innerText = ""

}