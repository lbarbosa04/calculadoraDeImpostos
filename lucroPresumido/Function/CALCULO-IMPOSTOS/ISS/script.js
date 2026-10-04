const aliquotas = require('../../../Aliquotas/script');

const apuracaoIss = (faturamentoIss) =>{
   return faturamentoIss * aliquotas.ISS;

}

module.exports = apuracaoIss;