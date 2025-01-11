import food1 from '../../assets/images/food-1.webp'
import food2 from '../../assets/images/food-2.webp'
import food3 from '../../assets/images/food-3.webp'
import food4 from '../../assets/images/food-4.webp'

const FoodSection = () => {
  return (
    <section className="food">
      <div className="food-item">
        <img className="food-image" src={food1} alt="salad" />
        <h4>Salad</h4>
        <p>
          Our salads are crafted with the freshest ingredients, ensuring a burst of flavors and nutrients in every bite
        </p>
      </div>
      <div className="food-item"  >
        <img className="food-image" src={food2} alt="orange" />
        <h4>Orange</h4>
        <p>
          Our oranges are grown in the sunniest regions of the world, ensuring a burst of flavors and nutrients in every bite
        </p>
      </div>
      <div className="food-item"  >
        <img className="food-image" src={food3} alt="pomegranade" />
        <h4>Pomegranade</h4>
        <p>
          Our pomegranade are grown in the sunniest regions of the world, ensuring a burst of flavors and nutrients in every bite
        </p>
      </div>
      <div className="food-item"  >
        <img className="food-image" src={food4} alt="salad" />
        <h4>Salad</h4>
        <p>
          Our salads are crafted with the freshest ingredients, ensuring a burst of flavors and nutrients in every bite
        </p>
      </div>
    </section>
  )
}

export default FoodSection;