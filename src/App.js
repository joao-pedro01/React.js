import './App.css';
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "João Pedro";
  const newName = name.toUpperCase();
  function soma() {
    return (1+1);
  }
  const url = "https://via.placeholder.com/150"
  return (
    <div className='App'>
      <h1>Olá, {newName}</h1>
      <h2>alterando JSX</h2>
      <p>Meu primeiro app</p>
      <img src={url} alt="Minha imagem"/>
      <p>Soma: {soma()}</p>
      <HelloWorld />
    </div>
  );
}

export default App;
