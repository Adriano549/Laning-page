import './App.css'
import  Header  from './components/nav/navigation'
import  Info  from './components/banner/banner'
import Projetos from './components/projetos'
import Certificacoes from './components/certificacoes/'
import About from './components/about'
import HardSkills from './components/hardSkill'
import SoftSkills from './components/soft-skills'

function App() {

  return (
    <>
      <Header/>
      <Info/>
      <section id="sobre">
        <About />
      </section>
      <section id="skills">
        <HardSkills />
      </section>
      <section id="soft-skills">
        <SoftSkills />
      </section>
      <section id="projetos">
        <Projetos />
      </section>
      <section id="certificacoes">
        <Certificacoes />
      </section>
    </>
  )
}

export default App
