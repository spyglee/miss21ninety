import heroImage from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import image5 from '../../assets/images/image5.png'
import image6 from '../../assets/images/image6.png'

const HeroSection = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="hero" />
      <div className="hero-text">
        <h2>Meet Our Experts</h2>
        <h3>Transforming Lives, One Step at a Time</h3>
        <div className="bullet-container">
          <div>
            <img src={image4} alt="bullet" />
            <h4>John Doe</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div>
            <img src={image5} alt="bullet" />
            <h4>John Doe</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div>
            <img src={image6} alt="bullet" />
            <h4>John Doe</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;