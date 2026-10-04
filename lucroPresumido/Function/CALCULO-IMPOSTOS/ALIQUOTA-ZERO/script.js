const aliquotas = require('../../../Aliquotas/script');

const apuracaoAliquotaZero = (faturamentoAliquotaZero) =>{

   return faturamentoAliquotaZero * aliquotas.ALIQUOTAZERO;

}

module.exports = apuracaoAliquotaZero;