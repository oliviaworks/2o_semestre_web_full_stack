// Funções utilitárias puras para trabalhar com um array de avaliações.
// Nenhuma delas deve tocar no DOM — recebem dados, devolvem dados.
// Implemente o corpo de cada função abaixo. Use testes.html para
// verificar seu progresso: cada assertiva vira uma linha ✅ ou ❌ na tela.

/**
 * Calcula a média das notas de um array de avaliações.
 * @param {Array<{nota:number}>} avaliacoes
 * @returns {number} média arredondada para 1 casa decimal, ou 0 se a lista estiver vazia
 */
function calcularMedia(avaliacoes) {
  // TODO (Aula 03): some todas as notas de `avaliacoes` e divida pela
  // quantidade de avaliações. Se o array estiver vazio, retorne 0 (evite
  // dividir por zero). Arredonde o resultado para 1 casa decimal — dica:
  // Math.round(valor * 10) / 10.
  if (!avaliacoes || avaliacoes.length === 0) {
    return 0
  }

  const soma = avaliacoes.reduce(function(total, avaliacao){ // reduzir os itens do array a um valor só
    return total + avaliacao.nota // somar itens de um array
  }, 0) // o zero é o valor inicial do contador/acumulator (total)

  return Math.round((soma/avaliacoes.length) * 10) / 10 // gambiarra pra arredondar a média para uma casa decimal
}

/**
 * Filtra as avaliações de um lugar específico.
 * @param {Array<{lugarId:number}>} avaliacoes
 * @param {number} lugarId
 */
function filtrarPorLugar(avaliacoes, lugarId) {
  // TODO (Aula 03): use Array.prototype.filter para retornar apenas as
  // avaliações cujo `lugarId` seja igual ao parâmetro recebido.
  return avaliacoes.filter(function(avaliacao){
    return avaliacao.lugarId === lugarId // filtra o array com base em uma condição
  })
}

/**
 * Filtra avaliações com nota maior ou igual a `notaMinima`.
 * @param {Array<{nota:number}>} avaliacoes
 * @param {number} notaMinima
 */
function filtrarPorNotaMinima(avaliacoes, notaMinima) {
  // TODO (Aula 03): use Array.prototype.filter para retornar apenas as
  // avaliações cuja `nota` seja maior ou igual a `notaMinima`.
  return avaliacoes.filter(function(avaliacao){
    return avaliacao.nota >= notaMinima
  })
}

/**
 * Retorna uma NOVA lista de avaliações ordenada por nota.
 * @param {Array<{nota:number}>} avaliacoes
 * @param {"asc"|"desc"} [ordem="desc"]
 */

function ordenarPorNota(avaliacoes, ordem) {
  // TODO (Aula 03): NÃO ordene o array recebido diretamente (isso
  // mudaria o array original, o que é um efeito colateral indesejado).
  // Em vez disso:
  //   1. Crie uma cópia do array (dica: avaliacoes.slice()).
  //   2. Ordene a cópia com Array.prototype.sort, comparando `nota`.
  //   3. Se `ordem` for "asc", a menor nota vem primeiro; caso
  //      contrário (padrão "desc"), a maior nota vem primeiro.
  //   4. Retorne a cópia ordenada.
  ordem = ordem || "desc"
  const copia = avaliacoes.slice()

  copia.sort(function(a, b){
    return ordem === "asc" ? a.nota - b.nota : b.nota - a.nota 
  })

  return copia
}
