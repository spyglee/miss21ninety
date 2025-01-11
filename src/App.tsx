import Header from './components/Header'
import HeroSection from './components/homepage/HeroSection'
import AboutSection from './components/homepage/AboutSection'
import FoodSection from './components/homepage/FoodSection'
import StartSection from './components/homepage/StartSection'

function App() {

  return (
    <>
      <Header />
      <main>
        <StartSection />
        <AboutSection />
        <FoodSection />
        <HeroSection />
      </main>
    </>
  )
}

export default App
