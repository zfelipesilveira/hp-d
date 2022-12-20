
import './App.css';
import { useEffect, useState } from 'react';
import Modelo from './componentes/Modelo';
import Modal from './componentes/Modal';


 import axios from 'axios';



function App() {

  const [modelos, setModelos] = useState([])

  const [nameForm, setNameForm] = useState("");
  const [descriptionForm, setDescriptionForm] = useState("");
  const [statusForm, setStatusForm] = useState("");
  const [showModal, setShowSModal] = useState(false);
  

  
  



  

  let handleSubmit = evt => {
		axios.post('http://127.0.0.1:8000/api/modelos/', {
    name: nameForm,
    description: descriptionForm,
    status: statusForm,
    

  })
  
  .then(function (response) {

    setTimeout(() => {
      setShowSModal(true);
    }, 3000);
    

      

    

    
    return response;
  
    
  })
 
  .catch(function (error) {
    return error;
    



  });

  
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/modelos/')
      .then(resposta => resposta.json())
      .then(dados => {
        setModelos(dados)
      })
  }, [])



  

  
 
  

  

  return (
    <div class="split right">
    <div className="App">
      <div className='banner-container'>
        
      </div>
      <div className='logo-container'>
        
      </div>
      <h1>Registered Models</h1>
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

    <div class="split left">
      <form class="centered" onSubmit={handleSubmit}>
        <div>
          
             <Modal open={showModal} /> 
            
        </div>
        <h1 class="titulo-formulario">Register your model</h1>
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
        
        <button className="newPam">Set Hyperparameters</button>
        <button className="newPam">Set Stats </button>
        <button type="submit">Save</button>
      </form>
      </div>

      


      

      
    </div>


  );

  

        
}

export default App;
