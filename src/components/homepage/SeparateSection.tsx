import plant from '../../assets/images/plant.png'
import stones from '../../assets/images/stones.png'
import nutrients1 from '../../assets/images/nutrients1.png'
import nutrients2 from '../../assets/images/nutrients2.png'

const SeparateSection = () => {
  return (
    <section className="separate">
      <img className="plant" src={plant} alt="plant" />
      <img className="stones" src={stones} alt="stones" />
      <div className="separate-section">
        <div>
          <h2>Nourish Your Wellness</h2>
          <h3>Unlock the Power of Whole Foods</h3>
          <p>Discover the transformative benefits of a nutrient-rich diet tailored to your unique needs. Our expert nutritionists will guide you in making sustainable changes that nourish your body and mind</p>
          <a className="explore" href="/">Explore Our Offerings</a>
        </div>
        <div className="nutrients">
          <img src={nutrients1} alt="nutrients1" />
          <img src={nutrients2} alt="nutrients2" />
        </div>
      </div>
    </section>
  )
}

export default SeparateSection;