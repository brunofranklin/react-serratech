import { useState } from 'react';

const Listas = () => {
    const [ nomes, setNomes] = useState(["João", "Felipe", "Ana", "Camila"])
    const [ frutas, setFrutas ] = useState(["Banana", "Maça", "Goiaba", "Uva", "Maracujá"])
    const [ frutaNova, setFrutaNova ] = useState("");

    const adicionaFruta = () => {

        setFrutas([...frutas, frutaNova])
    }

    return(
        <>
        <ul>
            {nomes.map((nome, index) => (
                <li>{index} - {nome}</li>
            ))}
        </ul>
        <ul>
        {frutas.map((fruta, contador) => (<li key={contador}>Fruta: {fruta} - Index: {contador + 1} </li>))}   
        </ul>

        <input type="text" value={frutaNova} onChange={(e) => setFrutaNova(e.target.value)} />
        <input type="button" value="Adicionar Fruta" onClick={adicionaFruta} />
        </>
    );
}

export default Listas;

