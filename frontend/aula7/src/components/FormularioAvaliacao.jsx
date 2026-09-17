import { useState } from "react";

/**
 * Formulário controlado: cada campo tem seu valor guardado no state do
 * React (`value` + `onChange`), então o React é a "fonte da verdade"
 * do que está na tela — nunca lemos o DOM diretamente.
 */
function FormularioAvaliacao({ lugares, aoEnviar }) {
  const [lugarId, setLugarId] = useState(lugares[0]?.id ?? "")
  const [nota, setNota] = useState(5)
  const [comentario, setComentario] = useState("")
  const [erro, setErro] = useState(null)

  function lidarComEnvio(evento) {
    evento.preventDefault()
    if (!lugarId) {
      setErro("Escolha um lugar")
      return
    }
    if (comentario.trim().length < 3){
      setErro("O comentáio precisa ter pelo menos 2 caracteres")
    }
    setErro(null)
    aoEnviar(Number(lugarId), {nota: Number(nota), comentario: comentario.trim()})
    setComentario("")
    setNota(5)
  }
  return (
    <form className="formulario" onSubmit={lidarComEnvio}>
      <label htmlFor="campo-lugar"></label>
      <div className="campo-formulario">
        <select name="" id="">
          <option value="">

          </option>
        </select>
      </div>
    </form>
  );
}

export default FormularioAvaliacao;
