import './App.css';
import Lista from './components/Lista';

function App() {
  const meusItens = ['React', 'Vue', 'Angular'];


  return (
    <div className='App'>
      <h1>Rendenização de listas</h1>
      <Lista itens={meusItens} />
    </div>
  );
}

export default App;