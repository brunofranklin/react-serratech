import "./App.css"
import Contador from "./components/Contador";
import Propriedades from "./components/Propriedades";
// import Estado from "./components/Estado";




const App = () => {
  let nome = "Bruno"

  return(
    <div className="App">
      {/* <Estado /> */}
      {/* <Propriedades name={nome} idade={31} /> */}
     <Contador meuNome={nome}/>
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