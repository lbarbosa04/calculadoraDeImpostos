const aliquotas = require('../../../Aliquotas/script');

const apuracaoIrpj = (faturamentoIrpj, atividade) =>{

    let baseDeCalculoIrpj = 0;
    let valorIrpj = 0;
    let adicionalIrpj = 0;
    let irpjAPagar

    if(atividade === "comercio"){
        baseDeCalculoIrpj = faturamentoIrpj * aliquotas.presunsaoComercio;
    } else if (atividade === "servico"){
        baseDeCalculoIrpj = faturamentoIrpj * aliquotas.presunsaoServico;
    }

    if(baseDeCalculoIrpj > 60000){
        adicionalIrpj = (baseDeCalculoIrpj - 60000) * aliquotas.ADICIONAL;
    }

    valorIrpj = baseDeCalculoIrpj * aliquotas.IRPJ;
    irpjAPagar = valorIrpj + adicionalIrpj;

    return irpjAPagar;
}

module.exports = apuracaoIrpj;

/*
A apuração do IRPJ no lucro presumido é feito da seguinte forma: 
Para achar a base de calculo pego o faturamento total do trimestre e aplico a aliquota da presunção:
comercio: 8% / serviço: 32%
Apos aplicar a aliquota e a base for igual ou menor que R$ 60.000,00, para aachar o imposto aplico apenas o IRPJ: 15%
Base * 15%
se a base for maior que R$ 60.000,00, o valor que passa dos 60 é adicionado o adicional de 10%
ex: base = 70.000,00
60 * 15%
10 * 10%
soma-se os dois e gerase o imposto, se for <= 60.000,00 gerase o imposto tambem
*/