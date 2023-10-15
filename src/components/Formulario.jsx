import React, {useState} from "react";

// Define o componente funcional Formulario que recebe a função adicionarTarefa como propriedade.
const Formulario = ({ adicionarTarefa }) => {

    const [valor, setValor] = useState("");
  
    // Função chamada quando o formulário é submetido.
    const handleSubmit = (e) => {
      e.preventDefault(); 
      if (!valor) return; 
      adicionarTarefa(valor); 
      setValor(""); 
    };
  
    // Retorna a estrutura JSX do formulário.
    return (
      <div className="formulario">
        <h3>Crie uma Tarefa</h3>
        
        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            placeholder="Insira uma tarefa"
            value={valor}
            onChange={(e) => setValor(e.target.value)} 
          />
         
          <button className="botaoCriar" type="submit">Criar Tarefa</button>
        </form>
      </div>
    );
  };
  
  // Exporta o componente Formulario para ser utilizado em outros arquivos.
  export default Formulario;
  