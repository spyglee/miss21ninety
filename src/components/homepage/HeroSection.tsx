import Image from 'next/image';
import heroImage from '../../../public/image3.png'
import image4 from '../../../public/image4.png'
import image5 from '../../../public/image5.png'
import image6 from '../../../public/image6.png'

const HeroSection = () => {
  return (
    <section className="hero">
      <Image src={heroImage} alt="hero" />
      <div className="hero-text">
        <h2>Meet Our Experts</h2>
        <h3>Transforming Lives, One Step at a Time</h3>
        <div className="bullet-container">
          <div>
            <Image src={image4} alt="bullet" />
            <h4>John Doe</h4>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div>
            <Image src={image5} alt="bullet" />
            <h4>John Doe</h4>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div>
            <Image src={image6} alt="bullet" />
            <h4>John Doe</h4>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;