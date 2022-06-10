import {useState} from 'react';

const Estado = () => {
  const [nome1, setNome1] = useState(["joao", "andre", "hitalo"])
  const [index, setIndex] = useState(0)

  // let nome = "João Felipe";
 
  const handleClick = () => {
    // nome = "André"
      // setNome("André");
      if(index+1 >= nome1.length ) {
        setIndex(0)
        // return
      } else {
        setIndex(index+1)
        console.log(nome1)  
      }
  }

  return (
    <div>
      <h1>{nome1[index]}</h1>
      <input type="button" value="Mudar Nome" onClick={handleClick}/>
    </div>
  )
}

export default Estado
