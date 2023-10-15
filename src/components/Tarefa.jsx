import React, {useState} from "react";

// Define o componente funcional Tarefa que recebe várias funções como propriedades.
const Tarefa = ({
    tarefa,
    removerTarefa,
    editarTarefa,
    completarTarefa,
    estaEditando,
    salvarTarefaEditada,
  }) => {
    
    const [textoEditado, setTextoEditado] = useState(tarefa.texto);
  
    // Função chamada ao clicar no botão "Salvar" durante a edição da tarefa.
    const handleSalvar = () => {
      salvarTarefaEditada(tarefa.id, textoEditado); // Chama a função para salvar a tarefa editada.
    };
  
    // Retorna uma tarefa, incluindo opções para editar, completar e remover a tarefa.
    return (
      <div
        className={`tarefa ${estaEditando ? "editando" : ""}`} 
        style={{ textDecoration: tarefa.estaCompleta ? "line-through" : "" }} 
      >
        <div className="conteudo">
          
          {estaEditando ? (
            <>
              <input
                type="text"
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
              />
            </>
          ) : (
            <>
              <p>{tarefa.texto}</p>
            </>
          )}
        </div>
        <div>
          {/* Mostra botões diferentes com base se a tarefa está sendo editada ou não. */}
          {estaEditando ? (
            <button className="salvar" onClick={handleSalvar}>
              Salvar
            </button>
          ) : (
            <>
              <button
                className="completa" onClick={() => completarTarefa (tarefa.id)}>Completa</button>

              <button className="editar" onClick={() => editarTarefa(tarefa.id)}> {/* Chama a função para editar a tarefa. */}
                Editar
              </button>
              <button className="remover" onClick={() => removerTarefa(tarefa.id)}> {/* Chama a função para remover a tarefa. */}
                Excluir
              </button>
            </>
          )}
        </div>
      </div>
    );
  };
  
  // Exporta o componente Tarefa para ser utilizado em outros arquivos.
  export default Tarefa;
  