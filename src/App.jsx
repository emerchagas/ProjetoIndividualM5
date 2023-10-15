import { useState } from 'react';
import Pesquisa from './components/Pesquisa';
import Formulario from './components/Formulario';
import Tarefa from './components/Tarefa';
import './App.css';


// Define o componente funcional e usa o hook useState: listas, pesquisa e edicaoLista.
function App() {
  const [listas, setListas] = useState([
    {
      id: 1,
      texto: "Insira uma tarefa",
      estaCompleto: false,
    },
  ]);
  const [pesquisa, setPesquisa] = useState("");
  const [edicaoLista, setEdicaoLista] = useState(null);

  // Função para adicionar uma nova tarefa à lista de tarefas.
  const adicionarTarefa = (texto) => {
    const novasTarefas = [
      ...listas,
      {
        id: Math.floor(Math.random() * 10000),
        texto: texto,
        estaCompleto: false,
      },
    ];
    setListas(novasTarefas);
  };

  // Função para marcar uma tarefa como completa ou incompleta.
  const completarTarefa = (id) => {
    const novasTarefas = listas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, estaCompleto: !tarefa.estaCompleto }
        : tarefa
    );
    setListas(novasTarefas);
  };

  // Função para definir a tarefa que está sendo editada com base no ID.
  const editarTarefa = (id) => {
    const tarefaParaEditar = listas.find((tarefa) => tarefa.id === id);
    setEdicaoLista(tarefaParaEditar);
  };

  // Função para salvar as alterações feitas em uma tarefa editada.
  const salvarTarefaEditada = (id, novoTexto) => {
    const novasTarefas = listas.map((tarefa) =>
      tarefa.id === id
        ? {
            ...tarefa,
            texto: novoTexto,
          }
        : tarefa
    );
    setListas(novasTarefas);
    setEdicaoLista(null); // Limpa a tarefa em edição
  };

  // Função para remover uma tarefa da lista com base no ID.
  const removerTarefa = (id) => {
    const novasTarefas = listas.filter((tarefa) => tarefa.id !== id);
    setListas(novasTarefas);
  };

  // Retorna a estrutura JSX do componente App.
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      {/* Renderiza o componente Formulario e passa as funções como prop. */}
      <Formulario adicionarTarefa={adicionarTarefa} />

      <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} />

      <div className="lista-de-tarefas">
        {listas
          .filter((tarefa) =>
            tarefa.texto.toLowerCase().includes(pesquisa.toLowerCase())
          )
          .map((tarefa) => (
            <Tarefa
              key={tarefa.id}
              tarefa={tarefa}
              removerTarefa={removerTarefa}
              completarTarefa={completarTarefa}
              editarTarefa={editarTarefa}
              estaEditando={edicaoLista && edicaoLista.id === tarefa.id}
              salvarTarefaEditada={salvarTarefaEditada}
            />
          ))}
      </div>
    </div>
  );
}

// Exporta o componente App
export default App;


