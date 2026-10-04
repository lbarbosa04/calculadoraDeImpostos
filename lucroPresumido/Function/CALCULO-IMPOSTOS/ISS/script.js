const aliquotas = require('../../../Aliquotas/script');

const apuracaoIss = (faturamentoIss) =>{

   let issAPagar = 0;

   issAPagar = faturamentoIss * aliquotas.ISS;

   return issAPagar; 

}

module.exports = apuracaoIss;