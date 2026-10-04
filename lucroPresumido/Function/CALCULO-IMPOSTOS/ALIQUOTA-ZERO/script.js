const aliquotas = require('../../../Aliquotas/script');

const apuracaoAliquotaZero = (faturamentoAliquotaZero) =>{

   let aliquotaZeroAPagar = 0;

   aliquotaZeroAPagar = faturamentoAliquotaZero * aliquotas.ALIQUOTAZERO;

   return aliquotaZeroAPagar;

}

module.exports = apuracaoAliquotaZero;