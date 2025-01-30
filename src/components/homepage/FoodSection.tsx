import Image from 'next/image';
import food1 from '../../../public/food-1.webp'
import food2 from '../../../public/food-2.webp'
import food3 from '../../../public/food-3.webp'
import food4 from '../../../public/food-4.webp'

const FoodSection = () => {
  return (
    <section id="food" className="food">
      <div className="food-item">
        <Image className="food-image" src={food1} alt="salad" />
        <h4>Salad</h4>
        <p>
          Our salads are crafted with the freshest ingredients, ensuring a burst of flavors and nutrients in every bite
        </p>
      </div>
      <div className="food-item"  >
        <Image className="food-image" src={food2} alt="orange" />
        <h4>Orange</h4>
        <p>
          Our oranges are grown in the sunniest regions of the world, ensuring a burst of flavors and nutrients in every bite
        </p>
      </div>
      <div className="food-item"  >
        <Image className="food-image" src={food3} alt="pomegranade" />
        <h4>Pomegranade</h4>
        <p>
          Our pomegranade are grown in the sunniest regions of the world, ensuring a burst of flavors and nutrients in every bite
        </p>
      </div>
      <div className="food-item"  >
        <Image className="food-image" src={food4} alt="salad" />
        <h4>Salad</h4>
        <p>
          Our salads are crafted with the freshest ingredients, ensuring a burst of flavors and nutrients in every bite
        </p>
      </div>
    </section>
  )
}

export default FoodSection;