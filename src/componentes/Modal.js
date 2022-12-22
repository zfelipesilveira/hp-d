import './Modal.css'
import image from './../img/check.png';




const Modal = props => {
    return (<div hidden={!props.open} className='modal'>
        
        

        <div className='modal-conteudo'>
        <img class="imagem" src={image}></img>
        <h1>Modelo registrado</h1>
        
        </div>
    </div>)
}

export default Modal