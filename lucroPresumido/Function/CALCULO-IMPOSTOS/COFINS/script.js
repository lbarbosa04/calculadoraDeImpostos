import aliquotas from '../../../Aliquotas/script.js';

const apuracaoCofins = (faturamentoCofins) =>{

   let cofinsAPagar = 0;
   cofinsAPagar = faturamentoCofins * aliquotas.COFINS;

   return cofinsAPagar;

}

export default apuracaoCofins;