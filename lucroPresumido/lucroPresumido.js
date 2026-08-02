const impostosLucroPreumido = {
  ICMS: 0.20,
  ISS: 0.05,
  PIS: 0.0065,
  COFINS: 0.030,
  IRPJ: 0.15,
  CSLL: 0.09,
  presunsaoServico: 0.32, // presunção para serviço, serve também para CSLL
  presunsaoComercio: 0.08, // presunção para comércio
  presunsaoComercioCsll: 0.12, // presunção para o CSLL de comércio
}


// ICMS
const inputFatu = document.getElementById('faturamentoIcms')
inputFatu.addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '')

  if (valor === '') {
    e.target.value = ''
    return
  }

  valor = (parseInt(valor, 10) / 100).toFixed(2)
  e.target.value = valor
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
});

let icmsAPagar = 0
function calculoIcms() {
  let faturamentoIcms = document.getElementById('faturamentoIcms')
  let valorTransformadoIcms = parseFloat(faturamentoIcms.value.replace(/\./g, '').replace(',', '.')) || 0
  let resultadoIcms = document.getElementById('resultadoIcms')
  let calculoIcms = valorTransformadoIcms * impostosLucroPreumido.ICMS

  resultadoIcms.innerHTML = `Imposto: ${calculoIcms.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
  
  icmsAPagar = calculoIcms
}

const inpuCred = document.getElementById('creditoIcms')
inpuCred.addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '')

  if (valor === '') {
    e.target.value = ''
    return
  }

  valor = (parseInt(valor, 10) / 100).toFixed(2)
  e.target.value = valor
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
});

function icmsCred(){
    let valorCreditoIcms = document.getElementById('creditoIcms')
    let creditoIcmsTransformado = parseFloat(valorCreditoIcms.value.replace(/\./g, '').replace(',', '.')) || 0
    let resultadoCreditoIcms = document.getElementById('cre')

    let resultadoIcmsCredito = creditoIcmsTransformado * 0.20
    resultadoCreditoIcms.innerHTML = `Imposto: ${resultadoIcmsCredito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

    let resulotadoIcmsMenosCredito = icmsAPagar - resultadoIcmsCredito

    let resultadoFinal = document.getElementById('icmsMenosCredito')
    resultadoFinal.innerHTML = `Imposto: ${resulotadoIcmsMenosCredito.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`
}

//ISS
const inputServico = document.getElementById('servico')
inputServico.addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '')

  if (valor === '') {
    e.target.value = ''
    return
  }

  valor = (parseInt(valor, 10) / 100).toFixed(2)
  e.target.value = valor
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
})

function calculoIss() {
  let faturamentoIss = document.getElementById('servico')
  let valorTransformadoIss = parseFloat(faturamentoIss.value.replace(/\./g, '').replace(',', '.')) || 0
  let resultadoIss = document.getElementById('resulIss')
  let calculoIss = valorTransformadoIss * impostosLucroPreumido.ISS

  resultadoIss.innerHTML = `Imposto: ${calculoIss.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}


// PIS
const inputFatuPis = document.getElementById('valorPis')
inputFatuPis.addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '')

  if (valor === '') {
    e.target.value = ''
    return
  }

  valor = (parseInt(valor, 10) / 100).toFixed(2)
  e.target.value = valor
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
})

function calculoPis() {
  let faturamentoPis = document.getElementById('valorPis')
  let valorTransformadoPis = parseFloat(faturamentoPis.value.replace(/\./g, '').replace(',', '.')) || 0
  let resultadoPis = document.getElementById('resultadoPis')
  let calculoPis = valorTransformadoPis * impostosLucroPreumido.PIS

  resultadoPis.innerHTML = `Imposto: ${calculoPis.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}


// COFINS
const inputFatuCofins = document.getElementById('valorCofins')
inputFatuCofins.addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '')

  if (valor === '') {
    e.target.value = ''
    return
  }

  valor = (parseInt(valor, 10) / 100).toFixed(2)
  e.target.value = valor
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
})

function calculoCofins() {
  let faturamentoCofins = document.getElementById('valorCofins')
  let valorTransformadoCofins = parseFloat(faturamentoCofins.value.replace(/\./g, '').replace(',', '.')) || 0
  let resultadoCofins = document.getElementById('resultadoCofins')
  let calculoCofins = valorTransformadoCofins * impostosLucroPreumido.COFINS

  resultadoCofins.innerHTML = `Imposto: ${calculoCofins.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}


// IRPJ
const inputFatuIrpj = document.getElementById('valorIrpj')
inputFatuIrpj.addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '')

  if (valor === '') {
    e.target.value = ''
    return
  }

  valor = (parseInt(valor, 10) / 100).toFixed(2)
  e.target.value = valor
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
});

function calculoIrpj() {
  let faturamentoTrimestral = document.getElementById('valorIrpj')
  let valorTransfomadoTrimestre = parseFloat(faturamentoTrimestral.value.replace(/\./g, '').replace(',', '.')) || 0
  let atividadeIrpj = document.getElementById('atividade').value
  let resultadoIrpj = document.getElementById('resulIrpj')

  // Variáveis para receber os valores da função
  let baseCalculoIrpj = 0
  let valorIrpj = 0
  let adicionalIrpj = 0

  if (atividadeIrpj === 'comercio') {
    baseCalculoIrpj = valorTransfomadoTrimestre * impostosLucroPreumido.presunsaoComercio
  } else if (atividadeIrpj === 'servico') {
    baseCalculoIrpj = valorTransfomadoTrimestre * impostosLucroPreumido.presunsaoServico
  }

  valorIrpj = baseCalculoIrpj * impostosLucroPreumido.IRPJ

  if (baseCalculoIrpj > 60000) {
    adicionalIrpj = (baseCalculoIrpj - 60000) * 0.10
  }

  let valorTotalIrpj = valorIrpj + adicionalIrpj
  resultadoIrpj.innerHTML = `Imposto: ${valorTotalIrpj.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}


// CSLL
const inputCsll = document.getElementById('valorCsll');
inputCsll.addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '')

  if (valor === '') {
    e.target.value = ''
    return
  }

  valor = (parseInt(valor, 10) / 100).toFixed(2)
  e.target.value = valor
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
});

function calculoCsll() {
  let faturamentoTrimestralCsll = document.getElementById('valorCsll')
  let valorTransformadoCsll = parseFloat(faturamentoTrimestralCsll.value.replace(/\./g, '').replace(',', '.')) || 0
  let atividadeCsll = document.getElementById('atividadeCsll').value;
  let resultadoCsll = document.getElementById('resulCsll')

  let baseCsll = 0
  let valorCsll = 0

  if (atividadeCsll === 'comercio') {
    baseCsll = valorTransformadoCsll * impostosLucroPreumido.presunsaoComercioCsll
  } else if (atividadeCsll === 'servico') {
    baseCsll = valorTransformadoCsll * impostosLucroPreumido.presunsaoServico
  }

  valorCsll = baseCsll * impostosLucroPreumido.CSLL

  let valorToCsll = valorCsll
  resultadoCsll.innerHTML = `Imposto: ${valorToCsll.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}


// Produtos Isentos
const inputIsento = document.getElementById('valorIsentos')
inputIsento.addEventListener('input', function (e) {
  let valor = e.target.value.replace(/\D/g, '')

  if (valor === '') {
    e.target.value = ''
    return
  }

  valor = (parseInt(valor, 10) / 100).toFixed(2)
  e.target.value = valor
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
})

function calcularIsento() {
  let faturamentoIsento = document.getElementById('valorIsentos')
  let valorTransformadoIsento = parseFloat(faturamentoIsento.value.replace(/\./g, '').replace(',', '.')) || 0
  let resultadoIsento = document.getElementById('isento')
  let isento = valorTransformadoIsento * 0.0365

  resultadoIsento.innerHTML = `Imposto: ${isento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}