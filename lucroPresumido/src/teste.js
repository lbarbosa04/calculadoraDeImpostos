const apuracoesImpostos = require('../Function/connect')

const resultadoIcms = apuracoesImpostos.apuracaoIcms(1000);
const irpj = apuracoesImpostos.irpj(500000000);

console.log(`Icms: ${resultadoIcms}`);
console.log(`irpj ${irpj}`)