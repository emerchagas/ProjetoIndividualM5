// Define o componente funcional Pesquisa que recebe 'pesquisa' e 'setPesquisa' como propriedades.
const Pesquisa = ({ pesquisa, setPesquisa }) => {
    // Retorna um componente com uma caixa de texto para pesquisar tarefas.
    return (
      <div className="pesquisa">
        <h2>Consulte sua Tarefa</h2>
        <label htmlFor="pesquisa">Pesquisar Tarefa:</label>
        <input
          type="text"
          id="pesquisa"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          placeholder="Procure sua tarefa..."
        />
      </div>
    );
  };
  
  // Exporta o componente Pesquisa para ser utilizado em outros arquivos.
  export default Pesquisa;
  