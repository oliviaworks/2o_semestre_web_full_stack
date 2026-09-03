// Erro customizado: em vez de lançar um Error genérico, as classes de
// modelo devem lançar ErroValidacao, que carrega também o nome do campo
// que falhou. Isso permite, por exemplo, destacar o campo errado em um
// formulário (aula 07) sem precisar analisar o texto da mensagem.
class ErroValidacao extends Error {
  constructor(mensagem, campo) {
    // TODO (Aula 05):
    // 1. Chame super(mensagem) — isso é OBRIGATÓRIO em toda classe que
    //    estende outra (aqui, Error) e deve ser a primeira linha do
    //    construtor, antes de usar `this`.
    // 2. Defina this.name = "ErroValidacao" (por padrão, herdaria o
    //    nome genérico "Error").
    // 3. Guarde o parâmetro `campo` em this.campo.
    super(mensagem)
    this.name = "ErroValidacao"
    this.campo = campo

  }
}
