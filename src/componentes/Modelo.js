import './Modelo.css'

const Modelo = ({name, description, status}) => {
    return (<div className='modelo'>
        <div className='imagem-container'>
            
        </div>
        <div className='conteudo'>
            <p className='name'>
                <strong>{name}</strong>
            </p>
            <p className='description'>
                {description}
            </p>
            <p className='status'>
                 <strong>{status}</strong>
            </p>
        </div>
    </div>)
}

export default Modelo