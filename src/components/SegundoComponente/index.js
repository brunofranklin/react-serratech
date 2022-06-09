

const SegundoComponente = () => {

    const handleLogin = () => {
        console.log("Clicou no login")
    }
    return (
        <form>
            <label>
            Email:
            <input type="text" placaholder='digite seu email'/>
            </label>
            <label style={{display: 'block'}}>
                Senha:
                <input type="text" />
                </label>
                <input type="submit" valeu="Entrar" onClick={handleLogin} />
        </form>
        
    )
}

export default SegundoComponente;