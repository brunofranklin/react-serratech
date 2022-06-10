// const Propriedades = (props) => {
    const Propriedades = ({name, idade}) => {
    
        console.log(name)
      
        return(
            <>
                <h1>PROPRIEDADES</h1>
                <label >
                    Nome:
                    <input type="text" placeholder="Digite seu nome" value={name}/>
                </label>
            </>
        );
    }
    
    export default Propriedades