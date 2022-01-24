// Carne - 400 gr por pessoa + de 6 horas - 650 gr
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500 ml
// Criancas valem por 0,5 pessoa 


function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}

function calcular() {
    console.log("Calculando. . .");

    let inputAdultos = document.getElementById("adultos");
    let inputCriancas = document.getElementById("criancas");
    let inputDuracao = document.getElementById("duracao");
    
    let resultado = document.getElementById("resultado");
    let qtdCarne = document.getElementById("qtdCarne");
    let qtdCerveja = document.getElementById("qtdCerveja");
    let qtdRefrigerante = document.getElementById("qtdRefrigerante");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    qtdCarne.innerHTML = `${qdtTotalCarne/1000}`;
    qtdCerveja.innerHTML = `${Math.ceil(qdtTotalCerveja/355)}`;
    qtdRefrigerante.innerHTML = `${Math.ceil(qdtTotalBebidas/2000)}`;

    resultado.style.display = "block";

}