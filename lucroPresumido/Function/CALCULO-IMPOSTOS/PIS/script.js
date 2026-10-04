import aliquotas from '../../../Aliquotas/script.js';

const apuracaoPis = (faturamentoPis) =>{

   let pisAPagar = 0;

   pisAPagar = faturamentoPis * aliquotas.PIS;

   return pisAPagar; 

}

export default apuracaoPis;