import './App.css';
import HelloWorld from "./components/HelloWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from './components/Pessoa'

function App() {
  return (
    <div className='App'>
      <HelloWorld />
      <SayMyName nome="João" />
      <SayMyName nome="Matheus" />
      <Pessoa nome="João" idade="18" profissao="Dev backend" foto="https://via.placeholder.com/200" />
    </div>
  );
}

export default App;