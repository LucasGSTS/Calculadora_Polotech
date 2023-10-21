var numero1 = 0; // Inicialize a variável com 0

// Função para armazenar o valor clicado na variável e exibi-lo
function pv1(n1) {
    numero1 = n1; // Armazena o valor clicado na variável 'numero1'
    document.getElementById("n1").innerHTML = "Valor clicado: " + numero1; // Exibe o valor na tela
    console.log(numero1); // Exibe o valor no console
}

var numero2 = 0; // Inicialize a variável com 0

// Função para armazenar o valor clicado na variável e exibi-lo
function pv2(n2) {
    numero2 = n2; // Armazena o valor clicado na variável 'numero2'
    document.getElementById("n2").innerHTML = "Valor clicado: " + numero2; // Exibe o valor na tela
    console.log(numero2);
}

var op = null

function conta(operador) {
    op = operador;
    document.getElementById("op").innerHTML = "A operação é: " + operador;
    console.log(op);
}

var rf = 0

function calcular() {
    if(op === "+") {
        rf = Number(numero1) + Number(numero2)
        console.log(rf)
    } else if (op === "-"){
        rf = Number(numero1) - Number(numero2)
        console.log(rf)
    } else if (op === "*"){
        rf = Number(numero1) * Number(numero2)
        console.log(rf)
    } else if (op === "/"){
        rf = Number(numero1) / Number(numero2)
        console.log(rf)
    }

//ATUALIZA O RESULTADO NA TELA
document.getElementById("resultado").innerHTML = rf

}