const impostosLucroReal = {//Aliquotas Padrão
  ICMS: 0.20,
  ISS: 0.05,
  ISSREDUCAO: 0.02,
  PIS: 0.0165,
  COFINS: 0.0760,
  IRPJ: 0.15,
  CSLL: 0.09,

  ICMSCREDITO: 0.20,
  PISCREDITO: 0.0165,
  COFINSCREDITO: 0.0760,

  FGTS: 0.08,
  PATRONAL: 0.20,
  RAT: 0.02,
  TERCEIROS: 0.058,
  RECISAO: 0.04,

}

//Caluclo ICMS 
const faturaIcms = document.getElementById('faturamentoIcms')//A informaçao do input fica em real BRL
faturaIcms.addEventListener('input', (e) => {
const valor = e.target.value.replace(/\D/g, '')

if (!valor) return e.target.value = ''

const numero = Number(valor) / 100

e.target.value = numero.toLocaleString('pt-BR', {
minimumFractionDigits: 2,
maximumFractionDigits: 2
})
})

const crediIcms = document.getElementById('creditoIcms')//A informaçao do input fica em real BRL
crediIcms.addEventListener('input', (e) => {
const valor = e.target.value.replace(/\D/g, '')

if (!valor) return e.target.value = ''

const numero = Number(valor) / 100

e.target.value = numero.toLocaleString('pt-BR', {
minimumFractionDigits: 2,
maximumFractionDigits: 2
})
})

let icmsDre = 0

function calculoIcms(){
     let faturamentoIcms = document.getElementById('faturamentoIcms')
         let icmsTranformado = parseFloat(faturamentoIcms.value.replace(/\./g, '').replace(',', '.')) || 0
     let creditoIcms = document.getElementById('creditoIcms')
         let creditoIcmsTransformado = parseFloat(creditoIcms.value.replace(/\./g, '').replace(',', '.')) || 0
     let resultadoIcms = document.getElementById('icmsAPagar')
     let resultadoAPagar = document.getElementById('impostoIcms')
     let creditoIcmsPrint = document.getElementById('creditoIcmsPrint')

     let icmsCalculoImposto = icmsTranformado * impostosLucroReal.ICMS
         resultadoAPagar.innerHTML = `ICMS: ${icmsCalculoImposto.toLocaleString('pt-Br', {style:'currency', currency:'BRL'})}`
     
     let icms20 = creditoIcmsTransformado * impostosLucroReal.ICMSCREDITO
         creditoIcmsPrint.innerHTML = `CREDITO ICMS: ${icms20.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})}`

     let calculoIcmsPg = icmsCalculoImposto - icms20
         resultadoIcms.innerHTML=`ICMS A PAGAR: ${calculoIcmsPg.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

 icmsDre = calculoIcmsPg//O valor fica guardado fora da função para usar em outro calculo

}


//Calculo ISS
const faturaIss = document.getElementById('faturamentoIss')//A informaçao do input fica em real BRL
faturaIss.addEventListener('input', (e) => {
const valor = e.target.value.replace(/\D/g, '')

if (!valor) return e.target.value = ''

const numero = Number(valor) / 100

e.target.value = numero.toLocaleString('pt-BR', {
minimumFractionDigits: 2,
maximumFractionDigits: 2
})
})

let issDre = 0

function calculoIss(){
     let faturamentoIss = document.getElementById('faturamentoIss')
     let issTransformado = parseFloat(faturamentoIss.value.replace(/\./g, '').replace(',', '.')) || 0

     let resultadoIss = document.getElementById('resultadoIss')
     let atividade = document.getElementById('comReducao').value

     let issCalculo = 0 //Guardar o resultado do If Else

         if (atividade === 'reducao2'){
         issCalculo = issTransformado * impostosLucroReal.ISSREDUCAO
         } else if (atividade === 'padrao') {
         issCalculo = issTransformado * impostosLucroReal.ISS
        }

   resultadoIss.innerHTML = `ISS A PAGAR: ${issCalculo.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

   issDre = issCalculo

}


//Calculo PIS
const faturaPis = document.getElementById('faturamentoPis')//A informaçao do input fica em real BRL
faturaPis.addEventListener('input', (e) => {
const valor = e.target.value.replace(/\D/g, '')

if (!valor) return e.target.value = ''

const numero = Number(valor) / 100

e.target.value = numero.toLocaleString('pt-BR', {
minimumFractionDigits: 2,
maximumFractionDigits: 2
})
})

const crediPis = document.getElementById('creditoPis')//A informaçao do input fica em real BRL
crediPis.addEventListener('input', (e) => {
const valor = e.target.value.replace(/\D/g, '')

if (!valor) return e.target.value = ''

const numero = Number(valor) / 100

e.target.value = numero.toLocaleString('pt-BR', {
minimumFractionDigits: 2,
maximumFractionDigits: 2
})
})

let pisDre = 0

function calculoPis(){
     let faturamentoPis = document.getElementById('faturamentoPis')
     let pisTransformado = parseFloat(faturamentoPis.value.replace(/\./g, '').replace(',', '.')) || 0
     let creditoPis = document.getElementById('creditoPis')
     let creditoTransformado = parseFloat(creditoPis.value.replace(/\./g, '').replace(',', '.')) || 0
     let resultadoImpostoPisPrint = document.getElementById('impostoPis')
     let resultadoCreditoPisPrint = document.getElementById('creditoPisPrint')
     let resultadoImpostoPagarPrint = document.getElementById('pisAPagar')

     let pisCalculoImposto = pisTransformado * impostosLucroReal.PIS
     resultadoImpostoPisPrint.innerHTML = `PIS: ${pisCalculoImposto.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

     let pis165 = creditoTransformado * impostosLucroReal.PISCREDITO
     resultadoCreditoPisPrint.innerHTML = `CREDITO PIS: ${pis165.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})}`

     let calculoPisPagar = pisCalculoImposto - pis165
     resultadoImpostoPagarPrint.innerHTML = `PIS A PAGAR: ${calculoPisPagar.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

 pisDre = calculoPisPagar

}


//Calculo COFINS
const faturaCofins = document.getElementById('faturamentoCofins')//A informaçao do input fica em real BRL
faturaCofins.addEventListener('input', (e) => {
const valor = e.target.value.replace(/\D/g, '')

if (!valor) return e.target.value = ''

const numero = Number(valor) / 100

e.target.value = numero.toLocaleString('pt-BR', {
minimumFractionDigits: 2,
maximumFractionDigits: 2
})
})

const crediCofins = document.getElementById('creditoCofins')//A informaçao do input fica em real BRL
crediCofins.addEventListener('input', (e) => {
const valor = e.target.value.replace(/\D/g, '')

if (!valor) return e.target.value = ''

const numero = Number(valor) / 100

e.target.value = numero.toLocaleString('pt-BR', {
minimumFractionDigits: 2,
maximumFractionDigits: 2
})
})

let cofinsDre = 0

function calculoCofins(){
     let faturamentoCofins = document.getElementById('faturamentoCofins')
     let cofinsTransformado = parseFloat(faturamentoCofins.value.replace(/\./g, '').replace(',', '.')) || 0

     let creditoCofins = document.getElementById('creditoCofins')
     let creditoCofinsTransformado = parseFloat(creditoCofins.value.replace(/\./g, '').replace(',', '.')) || 0
     
     let resultadoImpostoCofins = document.getElementById('impostoCofins')
     let resultadoCreditoCofins = document.getElementById('creditoCofinsPrint')
     let resultadoImpostoCofinsPrint = document.getElementById('impostoAPagar')

     let cofinsCalculoImposto = cofinsTransformado * impostosLucroReal.COFINS
     resultadoImpostoCofins.innerHTML = `COFINS: ${cofinsCalculoImposto.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

     let cofins760 = creditoCofinsTransformado * impostosLucroReal.COFINSCREDITO
     resultadoCreditoCofins.innerHTML = `CREDITO COFINS: ${cofins760.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

     let cofinsPagar = cofinsCalculoImposto - cofins760
     resultadoImpostoCofinsPrint.innerHTML = `COFINS A PAGAR: ${cofinsPagar.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

cofinsDre = cofinsPagar

}


//Folha Salarios
const faturaSalarios = document.getElementById('folha')//A informaçao do input fica em real BRL
faturaSalarios.addEventListener('input', (e) => {
const valor = e.target.value.replace(/\D/g, '')

if (!valor) return e.target.value = ''

const numero = Number(valor) / 100

e.target.value = numero.toLocaleString('pt-BR', {
minimumFractionDigits: 2,
maximumFractionDigits: 2
})
})

let folhaDre = 0

function calculoSalario(){
     let valorFolha = document.getElementById('folha')
     let folhaTransformado = parseFloat(valorFolha.value.replace(/\./g, '').replace(',', '.')) || 0

     let resultadoFolha = document.getElementById('resultadoSalarios')
     let encargosValor = document.getElementById('encargos')
     
     //Encargos
     let fgts = folhaTransformado * impostosLucroReal.FGTS
     let inssPatronal = folhaTransformado * impostosLucroReal.PATRONAL
     let rat = folhaTransformado * impostosLucroReal.RAT
     let terceiros = folhaTransformado * impostosLucroReal.TERCEIROS
     let encargosValorTotal = fgts + inssPatronal + rat + terceiros

     //Provissão mensal
     let provisaoFerias = (folhaTransformado / 3) / 12 + (folhaTransformado / 12)
     let provisao13 = folhaTransformado / 12
     let recisao = folhaTransformado * 0.04

     //Soma Custos Com Folha
     let encargosTotal = fgts + inssPatronal + rat + terceiros + provisaoFerias + provisao13 + recisao
     let custoTotal = folhaTransformado + encargosTotal

     encargosValor.innerHTML = `ENCARGOS COM A FOLHA: ${encargosTotal.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

     resultadoFolha.innerHTML = `CUSTO TOTAL FOLHA: ${custoTotal.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

     folhaDre = custoTotal

}


//Calculo Faturamento - Despesas
const faturaDespesas = document.getElementById('despesasOperacionais')//A informaçao do input fica em real BRL
faturaDespesas.addEventListener('input', (e) => {
const valor = e.target.value.replace(/\D/g, '')

if (!valor) return e.target.value = ''

const numero = Number(valor) / 100

e.target.value = numero.toLocaleString('pt-BR', {
minimumFractionDigits: 2,
maximumFractionDigits: 2
})
})

let despesasDre = 0//O valor total da despesa está aqui

function calculoDespesas(){
     let valorDespesas = document.getElementById('despesasOperacionais')
     let despesasTransformada = parseFloat(valorDespesas.value.replace(/\./g, '').replace(',', '.')) || 0

     let resultadoDespesasTotal = document.getElementById('despesasTotal')

     let despesasTotal = icmsDre + issDre + pisDre + cofinsDre + folhaDre + despesasTransformada
     resultadoDespesasTotal.innerHTML = `TOTAL DESPESAS: ${despesasTotal.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})}`

     despesasDre = despesasTotal

}


const fatuBruto = document.getElementById('faturamentoBruto')//A informaçao do input fica em real BRL
fatuBruto.addEventListener('input', (e) => {
const valor = e.target.value.replace(/\D/g, '')

if (!valor) return e.target.value = ''

const numero = Number(valor) / 100

e.target.value = numero.toLocaleString('pt-BR', {
minimumFractionDigits: 2,
maximumFractionDigits: 2
})
})

let lucroLiquido = 0

function calculoFatuarmentoDespesas(){
    let faturamentoBruto = document.getElementById('faturamentoBruto')
    let faturamentoBrutoTransformado = parseFloat(faturamentoBruto.value.replace(/\./g, '').replace(',', '.')) || 0

    let resultadoLiquido = document.getElementById('resultadoLiquido')

    let despesasTotal = faturamentoBrutoTransformado - despesasDre
    resultadoLiquido.innerHTML = `LUCRO LIQUIDO: ${despesasTotal.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

    lucroLiquido = despesasTotal

}

function calculoIrpj(){
    let resultadoIrpj = document.getElementById('valorIrpj')
    let resultadoAdicionalIrpj = document.getElementById('adicional10')
    let resultadoIrpjAdicional = document.getElementById('irpjAdicional')
    let prejuizo = document.getElementById('prejuizo')

   let valorIrpj = lucroLiquido * impostosLucroReal.IRPJ
    
    let adicional = 0

    if(lucroLiquido > 60000){
        adicional = (lucroLiquido - 60000) * 0.10
    }
    resultadoAdicionalIrpj.innerHTML = `ADICIONAL 10%: ${adicional.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})}`  
    
    resultadoIrpjAdicional.innerHTML = `IRPJ: ${valorIrpj.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`


    let irpjAPagar = valorIrpj + adicional
    resultadoIrpj.innerHTML = `IRPJ A PAGAR: ${irpjAPagar.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

}

function calculoCsll(){
     let resultadoCsll = document.getElementById('csllPagar')

     let impostoCsll = lucroLiquido * impostosLucroReal.CSLL
     resultadoCsll.innerHTML = `CSLL A PAGAR: ${impostoCsll.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

}






