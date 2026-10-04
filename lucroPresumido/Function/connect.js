const { apuracaoIcms, icmsCredito } = require('./CALCULO-IMPOSTOS/ICMS/script');
const iss = require('./CALCULO-IMPOSTOS/ISS/script');
const irpj = require('./CALCULO-IMPOSTOS/IRPJ/script');
const cofins = require('./CALCULO-IMPOSTOS/COFINS/script');
const csll = require('./CALCULO-IMPOSTOS/CSLL/script');
const pis = require('./CALCULO-IMPOSTOS/PIS/script');
const aliquotaZero = require('./CALCULO-IMPOSTOS/ALIQUOTA-ZERO/script');

module.exports = {

  apuracaoIcms,
  icmsCredito,
  iss,
  irpj,
  cofins,
  csll,
  pis,
  aliquotaZero

}







