function Pessoa(props) {
    return (
        <div>
            <img src={props.foto} alt=""/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}

export default Pessoa;