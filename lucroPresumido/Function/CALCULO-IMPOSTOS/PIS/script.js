const aliquotas = require('../../../Aliquotas/script');

const apuracaoPis = (faturamentoPis) =>{
   return faturamentoPis * aliquotas.PIS;

}

module.exports = apuracaoPis;