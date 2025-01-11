import Header from './components/Header'
import HeroSection from './components/homepage/HeroSection'
import AboutSection from './components/homepage/AboutSection'
import FoodSection from './components/homepage/FoodSection'
import StartSection from './components/homepage/StartSection'
import SeparateSection from './components/homepage/SeparateSection'

function App() {

  return (
    <>
      <Header />
      <main>
        <StartSection />
        <AboutSection />
        <FoodSection />
        <HeroSection />
        <SeparateSection />
      </main>
    </>
  )
}

export default App
