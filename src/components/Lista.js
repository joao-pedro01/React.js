function Lista({ itens }) {
    return (
        <>
            <h3>Lista de coisas boas:</h3>
            {
                itens.lemgth > 0 ? (
                    itens.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                ): (
                    <p>Não há itens na lista!</p>
                )
            }
        </>
    )
}

export default Lista;