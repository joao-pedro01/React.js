import { useState } from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        alert(name + password);
        alert("Cadastrou usuário");
    }

    const [name, setName] = useState('Null');
    const [password, setPassword] = useState('Null');

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Digite o seu nome"
                            onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;