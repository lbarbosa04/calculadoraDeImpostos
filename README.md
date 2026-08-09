# 🗂️ Calculadora de Impostos

Repositório com ferramentas web para simulação e cálculo de impostos em diferentes regimes tributários, desenvolvidas com HTML, CSS e JavaScript puro.

## 📋 Sobre o projeto

Este repositório reúne calculadoras de impostos criadas com o objetivo de aplicar, na prática, conceitos de lógica de programação e desenvolvimento web, unindo minha experiência profissional como Analista Fiscal à minha transição para a área de desenvolvimento de software.

Cada calculadora simula a apuração de tributos de acordo com um regime tributário específico, permitindo ao usuário inserir os dados financeiros necessários e visualizar o resultado do cálculo de forma rápida e clara.

## 🧮 Calculadoras disponíveis

| Calculadora | Descrição | Acesse |
|---|---|---|
| **Lucro Real** | Cálculo de IRPJ, CSLL, PIS e COFINS (regime não cumulativo) com base no lucro efetivamente apurado | [`/lucroReal`](./lucroReal) |
| **Lucro Presumido** | Cálculo de IRPJ, CSLL, PIS e COFINS (regime cumulativo) com base em percentual de presunção sobre a receita bruta | [`/lucroPresumido`](./lucroPresumido) |

Cada pasta possui seu próprio README com detalhes de funcionamento, instruções de uso e contexto tributário específico.

## 🖥️ Como usar

1. Clone o repositório:
```bash
git clone https://github.com/lbarbosa04/calculadoraDeImpostos.git
```

2. Acesse a pasta da calculadora desejada:
```bash
cd lucroReal
# ou
cd lucroPresumido
```

3. Abra o arquivo `index.html` no navegador de sua preferência.

Não é necessário instalar nenhuma dependência — os projetos rodam 100% no navegador.

## 🛠️ Tecnologias utilizadas

- **HTML5** — estrutura das páginas
- **CSS3** — estilização e layout
- **JavaScript** — lógica de cálculo dos tributos

## 📚 Contexto

Os regimes tributários brasileiros (Lucro Real e Lucro Presumido) possuem regras próprias de apuração de impostos. Este projeto busca demonstrar, de forma prática e didática, como essas regras podem ser traduzidas em lógica de programação.

> ⚠️ Este projeto tem fins educacionais e de portfólio. Os cálculos são simplificados e não substituem uma apuração fiscal profissional.

## 🚀 Próximas melhorias

- [ ] Adicionar responsividade para dispositivos móveis em ambas as calculadoras
- [ ] Padronizar visual entre as duas calculadoras
- [ ] Adicionar histórico de cálculos realizados
- [ ] Exportar resultados em PDF

## 👤 Autor

**Lucas Barbosa**  
Analista Fiscal em transição para Desenvolvimento de Software  
[LinkedIn](https://www.linkedin.com/in/lucasbarbosa-177a112a9)

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo.
