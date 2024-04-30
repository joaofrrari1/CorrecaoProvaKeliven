import Evento from "./componentes/Evento"
import './App.css'
import Galeria from "./componentes/Galeria"
import Cabecalho from "./componentes/Cabecalho"
import Rodape from "./componentes/Rodape"

function App() {

  return (
    <>
    <Cabecalho />
     <Evento 
      titulo={"Venha para a arrancada de carros."}
      descricao={"Arrancadão de carros."}
      horario={"12:00"}
      local={"Passarela nego querido."}
     />
     <Galeria />
    <Rodape />
    </>
  )
}

export default App