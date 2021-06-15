import './estilos.css';
import Rodape from './Rodape';
import Card from '../Card';

// const FraseMotivacional = function (props) {}
const FraseMotivacional = (props) => {
    return <Card>
        <p>
            "{props.frase}"
        </p>
        <Rodape autor={props.autor} criadaEm={props.criadaEm} />
    </Card>

}

export default FraseMotivacional;