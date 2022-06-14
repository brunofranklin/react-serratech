
import { Link } from "react-router-dom";

const Home = () => { 
    return(
        <>
        <h1>Home</h1>
        <Link to='Login'> Ir para Login</Link><br/>
        <Link to='Cadastro'>Ir para Cadastro</Link><br/>
        <Link to='Contador'>Ir para o Contador</Link><br/>
        <Link to='Estado'>Ir para Estado</Link><br/>
        <Link to='Listas'>Ir para a Listas</Link><br/>
        <Link to='PrimeiroComponente'>Ir para o Primeiro Componente</Link><br/>
        <Link to='Propriedades'>Ir para Propriedades</Link><br/>
        <Link to='SegundoComponente'>Ir para Segundo Componente</Link><br/>
        <Link to='TerceiroComponente'>Ir para Terceiro Componente</Link><br/>
        




        {/* <Link to ="Cadastro" state = { { from : "occupation" } } > Ir para Cadastro </ Link > */}
        </>
    );
}

export default Home;