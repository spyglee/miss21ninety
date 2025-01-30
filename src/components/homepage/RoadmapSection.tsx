import Link from 'next/link';
import Image from 'next/image';
import gymIcon from '../../../public/gym-dumbbell-icon.svg'
import nutritionIcon from '../../../public/apple-fruit-icon.svg'
import workshopIcon from '../../../public/flower-spa-icon.svg'
import lifestyleIcon from '../../../public/healthy-lifestyle-icon.svg'
import aboutIcon from '../../../public/read-book-icon.svg'
import consultationIcon from '../../../public/calendar-checkmark-icon.svg'
import phoneIcon from '../../../public/cell-phone-icon.svg'
import locationIcon from '../../../public/maps-pin-line-icon.svg'
import socialIcon from '../../../public/black-instagram-icon.svg'
import emailIcon from '../../../public/attherate-icon.svg'

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
            <Link className="flex" href="/">
              <Image className="icon" src={gymIcon} alt="gym icon" />
              Fitness Programs
            </Link>
            <Link className="flex" href="/">
              <Image className="icon" src={nutritionIcon} alt="nutrition icon" />
              Nutrition Plans
            </Link>
            <Link className="flex" href="/">
              <Image className="icon" src={workshopIcon} alt="workshop icon" />
              Wellness Workshops
            </Link>
            <Link className="flex" href="/">
              <Image className="icon" src={lifestyleIcon} alt="lifestyle icon" />
              Lifestyle Guidance
            </Link>
            <Link className="flex" href="/">
              <Image className="icon" src={aboutIcon} alt="about icon" />
              About Our Approach
            </Link>
            <Link className="flex" href="/">
              <Image className="icon" src={consultationIcon} alt="consultation icon" />
              Schedule a Consultation
            </Link>
          </div>
          <div>
            <h4>Connect with Us</h4>
            <Link className="flex" href="/">
              <Image className="icon" src={phoneIcon} alt="phone icon" />
              Call Us Today
            </Link>
            <Link className="flex" href="/">
              <Image className="icon" src={locationIcon} alt="location icon" />
              Visit Our Location
            </Link>
            <Link className="flex" href="/">
              <Image className="icon" src={socialIcon} alt="social icon" />
              Follow Us Online
            </Link>
            <Link className="flex" href="/">
              <Image className="icon" src={emailIcon} alt="email icon" />
              Send Us an Email
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection
