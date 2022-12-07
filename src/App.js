
import './App.css';
import { useEffect, useState } from 'react';
import Modelo from './componentes/Modelo';

function App() {

  const [modelos, setModelos] = useState([])

  useEffect(() => {
    fetch('https://harpy-dashboard.herokuapp.com/api/modelos/')
      .then(resposta => resposta.json())
      .then(dados => {
        setModelos(dados)
      })
  }, [])

  return (
    <div className="App">
      <div className='banner-container'>
        
      </div>
      <div className='logo-container'>
        
      </div>
      <section className='modelos'>
        {modelos.map(modelo => 
        (<Modelo 
          key={modelo.id} 
          name={modelo.name} 
          description={modelo.description}
          status={modelo.status} 
          
        />))}
      </section>
    </div>
  );
}

export default App;
