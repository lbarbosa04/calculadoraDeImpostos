const aliquotas = require('../../../Aliquotas/script');

const apuracaoPis = (faturamentoPis) =>{

   let pisAPagar = 0;

   pisAPagar = faturamentoPis * aliquotas.PIS;

   return pisAPagar; 

}

module.exports = apuracaoPis;