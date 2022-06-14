import { useState, useEffect } from 'react';
import Card from './components/card'


const ToDoList = () => {
    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    
    const handleCadastrar = () => {
        if(novaTarefa === "") return;
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa("")
    }

        const apagarTarefas = () => {
            setTarefas([])
    }
    
        
    useEffect(() => {
        console.log(tarefas);
    },[tarefas])
    
    // ['a', 'b', 'c', 'd'].map
    return(
        <>
            <h1>Lista de Tarefas</h1>
            <input type="text" placeholder='Insira uma tarefa nova' value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} />
            <button onClick={handleCadastrar}>Cadastrar Tarefa</button>
            <button onClick={apagarTarefas}>Apagar Tarefa</button>

            {/* {tarefas.map((tarefa, count) => (
                // <p key={count}>{count + 1} - {tarefa}</p>
                <Card data={tarefa}/>

            ))} */}
            
            <Card data={tarefas}/>


        </>
    );
}

export default ToDoList;