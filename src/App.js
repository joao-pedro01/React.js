import './App.css';
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from './components/Pessoa';
import List from './components/List'

function App() {
  return (
    <div className='App'>
      <HelloWorld />
      <SayMyName nome="João" />
      <SayMyName nome="Matheus" />
      <Pessoa
        nome="João"
        idade="18"
        profissao="Dev
        backend"
        foto="https://via.placeholder.com/200"
      />
      <List />
    </div>
  );
}

export default App;