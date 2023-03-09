import Button from './evento/Button'

function Evento({ numero }) {
    function meuEvento() {
        alert(`Ativando primeiro evento!`);
    }

    function segundoEvento() {
        alert("Ativando segundo evento");
    }

    return (
        <div>
            <p>Clique para disparar um evento: </p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <button onClick={segundoEvento}>Segundo Evento</button>
        </div>
    )
}

export default Evento;