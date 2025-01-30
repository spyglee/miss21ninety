import Image from 'next/image';
import plant from '../../../public/plant.png'
import stones from '../../../public/stones.png'
import nutrients1 from '../../../public/nutrients1.png'
import nutrients2 from '../../../public/nutrients2.png'
import Link from 'next/link';

const SeparateSection = () => {
  return (
    <section className="separate">
      <Image className="plant z-0" src={plant} alt="plant" />
      <Image className="stones z-0" src={stones} alt="stones" />
      <div className="separate-section">
        <div>
          <h2>Nourish Your Wellness</h2>
          <h3>Unlock the Power of Whole Foods</h3>
          <p className='!z-50'>Discover the transformative benefits of a nutrient-rich diet tailored to your unique needs. Our expert nutritionists will guide you in making sustainable changes that nourish your body and mind</p>
          <Link className="explore !z-50" href="/">Explore Our Offerings</Link>
        </div>
        <div className="nutrients">
          <Image src={nutrients1} alt="nutrients1" />
          <Image src={nutrients2} alt="nutrients2" />
        </div>
      </div>
    </section>
  )
}

export default SeparateSection;