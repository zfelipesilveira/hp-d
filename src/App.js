
import './App.css';
import { useEffect, useState } from 'react';
import Modelo from './componentes/Modelo';

import axios from 'axios';



function App() {

  const [modelos, setModelos] = useState([])

  const [nameForm, setNameForm] = useState("");
  const [descriptionForm, setDescriptionForm] = useState("");
  const [statusForm, setStatusForm] = useState("");
  

  let handleSubmit = axios.post('http://127.0.0.1:8000/api/modelos/', {
    name: nameForm,
    description: descriptionForm,
    status: statusForm,
  })
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    return error;
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/modelos/')
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

      <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={nameForm}
          placeholder="Name"
          onChange={(e) => setNameForm(e.target.value)}
        />
        <input
          type="text"
          value={descriptionForm}
          placeholder="Description"
          onChange={(e) => setDescriptionForm(e.target.value)}
        />
        <input
          type="text"
          value={statusForm}
          placeholder="Status"
          onChange={(e) => setStatusForm(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>

      


      

      
    </div>
  );

  
}

export default App;
