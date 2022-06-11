import { useState } from 'react';


const Cadastro = () => {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [sexo, setSexo] = useState("")
    const [cidade, setCidade] = useState("")

    const handleCadastro = (e) => {
        const dados = `Nome: ${nome}. Idade : ${idade}. Sexo ${sexo}. Cidade: ${cidade}`
        e.preventDefault();
        console.log(dados)

        if(nome === "" || idade === "" || sexo === "" || cidade === ""){
            alert("Preencha todos os campos")
        } else {
            setNome("")
            setIdade("")
            setSexo("")
            setCidade("")
            alert("Cadastro Realizado com sucesso")
        }
    }
    
    return(
        <form>
            <label>
                Nome:
                <input type="text" placeholder="Digite Seu nome" value={nome} onChange={(info) => {setNome(info.target.value)}}/>
            </label>
            <br/>
            <label>
                Idade:
                <input type="text" placeholder="Digite Sua Idade" value={idade} onChange={(info) => {setIdade(info.target.value)}}/>
            </label>
            <br/>
            <label>
                Sexo:
                <input type="text" placeholder="Digite Seu sexo" value={sexo} onChange={(info) => {setSexo(info.target.value)}}/>
            </label>
            <br/>
            <label>
                Cidade:
                <input type="text" placeholder="Digite Sua Cidade" value={cidade} onChange={(info) => {setCidade(info.target.value)}}/>
            </label>
            <br/>
            <input type="submit" value="CADASTRAR" onClick={handleCadastro}/>

        </form>
    );
}
export default Cadastro;