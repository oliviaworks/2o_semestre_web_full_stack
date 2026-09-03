class Usuario {
  constructor(id, nome, email, senhaHash) {
    // TODO (Aula 05): valide antes de atribuir a `this`, lançando
    // `new ErroValidacao(mensagem, nomeDoCampo)` quando necessário:
    //
    //   - nome: string com pelo menos 2 caracteres
    //   - email: precisa "parecer" um email válido — dica: regex
    //     /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //   - senhaHash: string não vazia (NUNCA guarde a senha em texto
    //     puro aqui — o hash de verdade só vai existir a partir da
    //     aula 11, com bcrypt no backend)
    //
    // Se passar, atribua this.id, this.nome, this.email (dica: pode
    // normalizar para minúsculas) e this.senhaHash.
  }
}
