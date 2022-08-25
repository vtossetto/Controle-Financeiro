const btnAdicionarDespesa = document.getElementById("btnAdicionarDespesa");

btnAdicionarDespesa.addEventListener('click', (e) => {
  const despesasTable = document.getElementById('despesasTable')
  despesasTable.innerHTML += 
    `
    <tr>
        <td class="ce">
        <input type="text" class="descricao" placeholder="Digite a despesa">
        </td>
        <td class="cd">
        <input type="number" class="valor" placeholder="Digite o Valor">
        </td>
    </tr>
    `
})

const btnAdicionarEntrada = document.getElementById("btnAdicionarEntrada");

btnAdicionarEntrada.addEventListener('click', (e) => {
  const entradasTable = document.getElementById('entradasTable')
  entradasTable.innerHTML += 
    `
    <tr>
        <td class="ce">
        <input type="text" class="descricao" placeholder="Digite a despesa">
        </td>
        <td class="cd">
        <input type="number" class="valor" placeholder="Digite o Valor">
        </td>
    </tr>
    `
})

const btnAdicionarCartao = document.getElementById("btnAdicionarCartao");

btnAdicionarCartao.addEventListener('click', (e) => {
  const cartaoTable = document.getElementById('cartaoTable')
  cartaoTable.innerHTML += 
    `
    <tr>
      <td class="ce">
      <input type="text" class="descricao" placeholder="Digite a despesa">
      </td>
      <td class="cd">
      <input type="number" class="valor" placeholder="Digite o Valor">
      </td>
    </tr>
    `
})

const btnAdicionarAlimentacao = document.getElementById("btnAdicionarAlimentacao");

btnAdicionarAlimentacao.addEventListener('click', (e) => {
  const alimentacaoTable = document.getElementById('alimentacaoTable')
  alimentacaoTable.innerHTML += 
    `
    <tr>
      <td class="ce">
      <input type="text" class="descricao" placeholder="Digite a despesa">
      </td>
      <td class="cd">
      <input type="number" class="valor" placeholder="Digite o Valor">
      </td>
    </tr>
    `
})

const btnAdicionarTransporte = document.getElementById("btnAdicionarTransporte");

btnAdicionarTransporte.addEventListener('click', (e) => {
  const transporteTable = document.getElementById('transporteTable')
  transporteTable.innerHTML += 
    `
    <tr>
      <td class="ce">
      <input type="text" class="descricao" placeholder="Digite a despesa">
      </td>
      <td class="cd">
      <input type="number" class="valor" placeholder="Digite o Valor">
      </td>
    </tr>
    `
})
