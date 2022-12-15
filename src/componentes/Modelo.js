import './Modelo.css'

const Modelo = ({name, description, status}) => {
    return (<div className='modelo'>
        
        <div className='conteudo'>
            <p className='name'>
                Nome:  <strong>{name}</strong>
            </p>
            <p className='description'>
                Descrição:  {description}
            </p>
            <p className='status'>
                 Status:  <strong>{status}</strong>
            </p>

            <button class="button-84" role="button">View details</button>
        </div>
    </div>)
}

export default Modelo