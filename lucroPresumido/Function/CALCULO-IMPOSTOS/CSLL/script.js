const aliquotas = require('../../../Aliquotas/script');

const apuracaoCsll = (faturamentoCsll, atividade) =>{

   let baseDeCalculoCsll = 0;
   let valorCsll = 0;

   if(atividade === "comercio"){
      baseDeCalculoCsll = faturamentoCsll * aliquotas.presunsaoComercioCsll;

   } else if (atividade === "servico"){
      baseDeCalculoCsll = faturamentoCsll * aliquotas.presunsaoServico;
   }

   valorCsll = baseDeCalculoCsll * aliquotas.CSLL;

   return valorCsll;
   
}

module.exports = apuracaoCsll;