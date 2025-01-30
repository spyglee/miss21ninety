import Image from 'next/image';
import expert1 from '../../../public/expert1.png'
import expert2 from '../../../public/expert2.png'
import expert3 from '../../../public/expert3.png'

const ExpertsSection = () => {
  return (
    <section className="experts">
      <h2>Expert Support</h2>
      <h3>Your Wellness Journey Starts Heres</h3>
      <p>Our personalized approach ensures that you receive the guidance and support you need to achieve your fitness and nutrition goals</p>
      <div className="experts-container">
        <div className="expert-card">
          <Image src={expert1} alt="expert1" />
          <p>Getting Started</p>
          <p>Take the first step towards a healthier you</p>
          <button className="main-button full-width">Learn More</button>
        </div>
        <div className="expert-card">
          <Image src={expert2} alt="expert2" />
          <p>Customize Your Plan</p>
          <p>Work with our experts to design a program tailored to your goals</p>
          <button className="main-button full-width">Schedule a Consultation</button>
        </div>
        <div className="expert-card">
          <Image src={expert3} alt="expert3" />
          <p>Achieve Your Goals</p>
          <p>Our programs are designed to help you reach your full potential</p>
          <button className="main-button full-width">Discover Your Path</button>
        </div>
      </div>
    </section>
  )
}

export default ExpertsSection