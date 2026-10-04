const aliquotas = require('../../../Aliquotas/script');

const apuracaoCofins = (faturamentoCofins) =>{
   return faturamentoCofins * aliquotas.COFINS;

}

module.exports = apuracaoCofins;