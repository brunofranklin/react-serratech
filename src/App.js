import { useState } from "react";
import "./App.css"
import Cadastro from "./components/Cadastro";
import Contador from "./components/Contador";
import Listas from "./components/Listas";
import Propriedades from "./components/Propriedades";
// import Estado from "./components/Estado";






const App = () => {
   //const [condicao, setCondicao] = useState(true);

  return(
    <div className="App">
  //     {/* <Estado /> */}
  //     {/* <Propriedades name={nome} idade={31} /> */}
  //    {/*<Contador meuNome={nome}/>*/}
  //    {/*<Cadastro/>*/}
  //    {/*<img src="logo192.png" alt="Descrição de Imagem"/>*/}
  //    {/*condicao && <h1>Apareci pois era verdadeiro</h1>*/}

  //  {/*condicao ? <h1>Condição Verdadeira</h1> : <h1>Condição Falsa</h1>*/}
  <Listas/>
    </div>
 
  );
}

export default App;








{/*
const App = () => {
  return (
    <>
    <Enviar/>
    </>
  );
} 

export default App;
*/}