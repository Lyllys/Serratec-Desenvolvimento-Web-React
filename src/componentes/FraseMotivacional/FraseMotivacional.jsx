import './estilos.css'
import Rodape from './Rodape';

function FraseMotivacional(props) {
    return <div className="frase">
        <p>
           "{props.frase}"
        </p>
        <Rodape autor={props.autor} criadaEm={props.criadaEm} />
    </div>

}

export default FraseMotivacional;