const AboutSection = () => {
  return (
    <section id="about" className="about">
      <h2>About Us</h2>
      <h3>Our Approach</h3>
      <div className="about-body">
        <p>
          We believe that true transformation comes from a personalized approach. Our fitness trainers and nutritionists work closely with you to create customized plans that fit your unique needs and lifestyle
        </p>
        <div className="about-form">
          <input type="email" placeholder="Email" />
          <button className="main-button full-width">
            <span>Subscribe</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;