import {useState} from 'react'

const Contador = ({meuNome}) => {
    const [count, setCount] = useState(0)

    const incrementaContador = () => {
        //setCount(count+1)
        setCount((prevState) => prevState + 1)
        console.log(count)
        
    }

    return(
        <>
        <h1>Olá, {meuNome}!</h1>
        <h1>Contador de Cliques : {count}</h1>
        <button onClick={incrementaContador}>CLIQUE AQUI !!!</button>
        </>
    );
}

export default Contador;

