import gymIcon from '../../assets/images/gym-dumbbell-icon.svg'
import nutritionIcon from '../../assets/images/apple-fruit-icon.svg'
import workshopIcon from '../../assets/images/flower-spa-icon.svg'
import lifestyleIcon from '../../assets/images/healthy-lifestyle-icon.svg'
import aboutIcon from '../../assets/images/read-book-icon.svg'
import consultationIcon from '../../assets/images/calendar-checkmark-icon.svg'
import phoneIcon from '../../assets/images/cell-phone-icon.svg'
import locationIcon from '../../assets/images/maps-pin-line-icon.svg'
import socialIcon from '../../assets/images/black-instagram-icon.svg'
import emailIcon from '../../assets/images/attherate-icon.svg'

const RoadmapSection = () => {
  return (
    <section id="contact" className="roadmap">
      <div>
        <h2>The Road to Wellness</h2>
        <h3>Transform Your Life with Our Personalized Approach</h3>
        <p className="description-text">
          At our fitness and nutrition platform, we believe that true change comes from a personalized, holistic approach. Our team of experts will work closely with you to create customized plans that address your unique needs and help you build sustainable healthy habits
        </p>
        <button className="main-button full-width">Get Started</button>
      </div>
      <div>
        <h2>Navigate Your Wellness</h2>
        <div className="roadmap-container">
          <div>
            <h4>Explore Our Services</h4>
            <a href="/">
              <img className="icon" src={gymIcon} alt="gym icon" />
              Fitness Programs
            </a>
            <a href="/">
              <img className="icon" src={nutritionIcon} alt="nutrition icon" />
              Nutrition Plans
            </a>
            <a href="/">
              <img className="icon" src={workshopIcon} alt="workshop icon" />
              Wellness Workshops
            </a>
            <a href="/">
              <img className="icon" src={lifestyleIcon} alt="lifestyle icon" />
              Lifestyle Guidance
            </a>
            <a href="/">
              <img className="icon" src={aboutIcon} alt="about icon" />
              About Our Approach
            </a>
            <a href="/">
              <img className="icon" src={consultationIcon} alt="consultation icon" />
              Schedule a Consultation
            </a>
          </div>
          <div>
            <h4>Connect with Us</h4>
            <a href="/">
              <img className="icon" src={phoneIcon} alt="phone icon" />
              Call Us Today
            </a>
            <a href="/">
              <img className="icon" src={locationIcon} alt="location icon" />
              Visit Our Location
            </a>
            <a href="/">
              <img className="icon" src={socialIcon} alt="social icon" />
              Follow Us Online
            </a>
            <a href="/">
              <img className="icon" src={emailIcon} alt="email icon" />
              Send Us an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection
