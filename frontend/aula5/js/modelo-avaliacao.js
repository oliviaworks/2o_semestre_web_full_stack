class Avaliacao {
  constructor(id, nota, comentario, lugar, usuario) {
    // TODO (Aula 05): valide antes de atribuir a `this`, lançando
    // `new ErroValidacao(mensagem, nomeDoCampo)` quando necessário:
    //
    //   - nota: precisa ser um NÚMERO INTEIRO entre 1 e 5 (dica:
    //     Number.isInteger(nota)) — notas decimais (ex: 4.5) ou fora
    //     do intervalo devem ser rejeitadas
    //   - comentario: string com pelo menos 3 caracteres
    //   - lugar: precisa ser uma instância de Lugar (dica:
    //     lugar instanceof Lugar)
    //   - usuario: precisa ser uma instância de Usuario (dica:
    //     usuario instanceof Usuario)
    //
    // Se passar, atribua this.id, this.nota, this.comentario,
    // this.lugar e this.usuario.
    if (!Number.isInteger(nota) || nota < 1 || nota > 5) {
      throw new ErroValidacao("A nota deve ser um número inteiro entre 1 e 5", "nota")
    }
    if (comentario.trim().length < 3) {
      throw new ErroValidacao("O comentário deve ter pelo menos 3 caracteres")
    }
    if (!(lugar instanceof Lugar)) {
      throw new ErroValidacao("A avaliação precisa estar associada a um lugar válido")
    }
    if (!(usuario instanceof Usuario)) {
      throw new ErroValidacao("A avaliação precisa estar associada a um usuário válido")
    }
  }
}
