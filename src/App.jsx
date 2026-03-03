import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import CardJogo from './components/CardJogo/CardJogo'
import valorant from './assets/img/valorant.jpg'
import minecraft from './assets/img/minecraft.png'
import forza from './assets/img/forza.jpg'
import ksp from './assets/img/ksp.jfif'

function App() {

  return (
    <>
    <Header/>
      <section className="cards">
        <CardJogo img={valorant} title="Valorant" genre="FPS" price={0} sale={true}/>
        <CardJogo img={minecraft} title="Minecraft" genre="Sandbox" price={75.00} sale={true}/>
        <CardJogo img={forza} title="Forza" genre="Corrida" price={299.00} sale={false}/>
        <CardJogo img={ksp} title="Kerbal Space Program" genre="Sandbox" price={82.00} sale={false}/>
      </section>
    <Footer/>
    </>
  )
}

export default App
