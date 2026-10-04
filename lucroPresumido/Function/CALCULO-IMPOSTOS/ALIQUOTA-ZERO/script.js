import aliquotas from '../../../Aliquotas/script.js';

const apuracaoAliquotaZero = (faturamentoAliquotaZero) =>{

   let aliquotaZeroAPagar = 0;

   aliquotaZeroAPagar = faturamentoAliquotaZero * aliquotas.ALIQUOTAZERO;

   return aliquotaZeroAPagar;

}

export default apuracaoAliquotaZero;