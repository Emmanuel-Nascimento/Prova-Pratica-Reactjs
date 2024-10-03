import LD from './components/LadoDireito'
import LE from './components/LadoEsquerdo'
import './App.css'

function App() {
  return (
    <>
    <body>
      <main className='flex'>
        <LE />
        <LD />
      </main>
    </body>
    </>
  )
}

export default App
