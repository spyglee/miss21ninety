import Image from 'next/image';
import section1 from '../../../public/Section1.webp'

const StartSection = () => {
  return (
    <section className="section1">
      <Image src={section1} alt="logo" />
      <div className="section1text">
        <h1>Your Fitness and Nutrition Journey Starts Here!</h1>
        <p>
          Welcome to our fitness and nutrition platform, where we empower you to achieve your health goals through personalized exercise and meal plans
        </p>
        <button className="main-button full-width">
          <span>Join Now</span>
        </button>
      </div>
    </section>
  )
}

export default StartSection;