const aliquotas = require('../../../Aliquotas/script');

const apuracaoCofins = (faturamentoCofins) =>{

   let cofinsAPagar = 0;
   cofinsAPagar = faturamentoCofins * aliquotas.COFINS;

   return cofinsAPagar;

}

module.exports = apuracaoCofins;