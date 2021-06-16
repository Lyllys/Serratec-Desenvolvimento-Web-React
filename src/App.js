import './App.css'
import FraseMotivacional from './componentes/FraseMotivacional'
import Formulario from './componentes/Formulario'

const App = () => {

  const frases = [
    {
      texto: 'Achei que seria ótimo, sabe? Ficar algum tempo sozinho, com meus pensamentos… Acontece que eu não tenho tantos pensamentos assim.',
      autor: 'Joey Tribbiani',
      data: new Date(2021, 5, 1)
    },
    {
      texto: 'Ok, sem útero, sem opinião.',
      autor: 'Rachel Green',
      data: new Date(2021, 5, 2)
    },
    {
      texto: 'Você faz parte do meu time! E meu time sempre vence!',
      autor: 'Monica Geller',
      data: new Date(2021, 5, 3)
    },
    {
      texto: 'Que mundo pequeno e ainda assim eu nunca encontro com a Beyoncé!',
      autor: 'Chandler Bing',
      data: new Date(2021, 5, 4)
    },
    {
      texto: 'Eu gostaria de ajudar, mas eu não quero.',
      autor: 'Phoebe Buffay',
      data: new Date(2021, 5, 5)
    }

  ]

  return (
    <div>
      <h1>Frases motivacionais de FRIENDS ☕</h1>

      <Formulario/>

      <FraseMotivacional frase={frases[0].texto} autor={frases[0].autor} criadaEm={frases[0].data} />
      <FraseMotivacional frase={frases[1].texto} autor={frases[1].autor} criadaEm={frases[1].data} />
      <FraseMotivacional frase={frases[2].texto} autor={frases[2].autor} criadaEm={frases[2].data} />
      <FraseMotivacional frase={frases[3].texto} autor={frases[3].autor} criadaEm={frases[3].data} />
      <FraseMotivacional frase={frases[4].texto} autor={frases[4].autor} criadaEm={frases[4].data} />
    </div>

  );
}

export default App;
