const varUm = 25;
const varDois = 20;

function Diferenca() {

    let resultado = (varUm - varDois);
    window.alert("O primeiro valor é: " + varUm);
    window.alert("O segundo valor é: " + varDois);
    window.alert("A diferença dos dois valores é de: " + resultado)
}

function DobroUMaisTD() {
    const dobroUm = (varUm * 2);
    const triploDois = (varDois * 3);
    let resultado = (dobroUm + triploDois);
    window.alert("O dobro do primeiro valor é: " + dobroUm);
    window.alert("O triplo do segundo valor é: " + triploDois);
    window.alert("O dobro da primeira mais o triplo da segunda variável: " + resultado)
}

function Multiplicar() {
    let resultado=(varUm * varDois);
    window.alert("O primeiro valor é: " + varUm);
    window.alert("O segundo valor é: " + varDois);
    window.alert("A multiplicação das duas variáveis é: " + resultado)
}

function ConsoleMaiorMenor() {
    var num1 = Math.floor(Math.random()*100) //Math floor arredonda um número para o multiplo inteiro mais próximo, e o '* 50' serve para definir que os números vão apenas até 50
    var num2 = Math.floor(Math.random()*100)
    console.log("Primeira variável inteira aleatória: "+ num1)
    console.log("Segunda variável inteira aleatória: "+ num2)
    if (num1 > num2) {
        console.log(num1 +">"+ num2);
    } else {
        console.log(num2 +">"+ num1)
    };
    
}

//CENARIO 2-------------------------------------------------------------------------------------------------------------------------------------------------------------------

function cenario2() {
    var nome_funcionario = document.getElementById("nome_funcionario").value;
    var salario = document.getElementById("salario").value;
    var taxa;
    var valor_INSS;
    var salario_liquido;

    if (salario <= 1000) {
        taxa = 0.08;
    } else if (salario >= 1000 <= 1500) {
        taxa = 0.085;
    } else {
        taxa = 0.09;
    }

    valor_INSS = (salario*taxa);
    salario_liquido = (salario - valor_INSS);
    console.log("Nome: "+nome_funcionario);
    console.log("Salario Bruto: "+salario);
    console.log("Valor do INSS: "+valor_INSS.toFixed(2));
    console.log("Salário Liquido: "+salario_liquido);
}