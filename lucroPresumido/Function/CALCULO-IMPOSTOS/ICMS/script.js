const aliquotas = require('../../../Aliquotas/script');

const apuracaoIcms = (faturamentoIcms) =>{
   return faturamentoIcms * aliquotas.ICMS;

}

const creditoIcms = (faturamentoCredito) =>{
   return faturamentoCredito * aliquotas.ICMS;

}

module.exports = {apuracaoIcms, creditoIcms };

/*
ICMS é o imposto estadual, e a aliquota é 20%, então tudo que você compra e é tributado por ICMS é sobre 20%
*/