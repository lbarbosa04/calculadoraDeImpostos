const aliquotas = require('../../../Aliquotas/script');

const apuracaoIcms = (faturamentoIcms) =>{

   let icmsAPagar = 0;

   icmsAPagar = faturamentoIcms * aliquotas.ICMS;

   return icmsAPagar;

}

const creditoIcms = (faturamentoCredito) =>{

   let creditoIcmsCompras = 0;

   creditoIcmsCompras = faturamentoCredito * aliquotas.ICMS;

   return creditoIcmsCompras;

}

module.exports = {apuracaoIcms, creditoIcms };

/*
ICMS é o imposto estadual, e a aliquota é 20%, então tudo que você compra e é tributado por ICMS é sobre 20%
*/