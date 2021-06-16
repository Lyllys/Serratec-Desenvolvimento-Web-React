import './App.css'
import FraseMotivacional from './componentes/FraseMotivacional'
import Formulario from './componentes/Formulario'
import { useState } from 'react';

const App = () => {

  const [frases, setFrases] = useState([]);

  const adicionaFrase = (frase) => {
    frase.criadaEm = new Date();
    setFrases([
      frase,
      ...frases
    ])
  }
  return (
    <div>
      <h1>Frases motivacionais de FRIENDS ☕</h1>

      <Formulario aoSalvar ={adicionaFrase} />

      {frases.map((frase, indice) =>
        <FraseMotivacional 
        key = {indice}
        frase = {frase.texto}
        autor = {frase.autor}
        criadaEm = {frase.criadaEm}/>
  )}
      
    </div>

  );
}

export default App;
