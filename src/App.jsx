import './App.css'
import  Header  from './components/nav/navigation'
import  Info  from './components/banner/banner'
import  Skills  from './components/skills/skills'
import Projetos from './components/projetos'

function App() {

  return (
    <>
      <Header/>
      <Info/>
      <section id="skills">
        <Skills />
      </section>
      <section id="projetos">
        <Projetos />
      </section>
    </>
  )
}

export default App
