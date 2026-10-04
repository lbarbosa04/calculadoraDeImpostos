import aliquotas from '../../../Aliquotas/script.js';

const apuracaoIss = (faturamentoIss) =>{

   let issAPagar = 0;

   issAPagar = faturamentoIss * aliquotas.ISS;

   return issAPagar; 

}

export default apuracaoIss;