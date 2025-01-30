import Header from '@/components/Header'
import HeroSection from '@/components/homepage/HeroSection'
import AboutSection from '@/components/homepage/AboutSection'
import FoodSection from '@/components/homepage/FoodSection'
import StartSection from '@/components/homepage/StartSection'
import SeparateSection from '@/components/homepage/SeparateSection'
import ExpertsSection from '@/components/homepage/ExpertsSection'
import RoadmapSection from '../components/homepage/RoadmapSection'
import Footer from '../components/Footer'

function App() {

  return (
    <>
      <Header />
      <main className='mt-[60px] max-w-maxWidth'>
        <StartSection />
        <AboutSection />
        <FoodSection />
        <HeroSection />
        <SeparateSection />
        <ExpertsSection />
        <RoadmapSection />
      </main>
      <Footer />
    </>
  )
}

export default App
