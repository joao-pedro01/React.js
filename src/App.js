import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  return (
    <div className='App'>
      <Form />
      <Evento />
      <Evento numero={1}/>
      <Evento numero={2}/>
    </div>
  );
}

export default App;