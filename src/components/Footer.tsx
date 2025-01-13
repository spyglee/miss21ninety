import logoLight from '../assets/images/MISS21ninety_logo-3.png'

const Footer = () => {
  return (
    <footer>
      <div className='main-container'>
        <div className='container'>
          <div className='logo-container'>
            <img src={logoLight} alt="logo" />
          </div>
          <div className='footer-links'>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Our Partners</h4>
              <ul>
                <li><a href="https://www.nike.com" target="_blank">Nike</a></li>
                <li><a href="https://www.instagram.com/olympicfitnessrijeka" target="_blank">Olympic</a></li>
                <li><a href="https://nk-rijeka.hr" target="_blank">HNK Rijeka</a></li>
                <li><a href="https://www.github.com/spyglee" target="_blank">Spyglee</a></li>
              </ul>
            </div>
            <div>
              <h4>Stay Connected</h4>
              <ul>
                <li><a href="https://www.instagram.com/miss21ninety/" target="_blank">Instagram</a></li>
                <li><a href="https://www.facebook.com/miss21ninety" target="_blank">Facebook</a></li>
                <li><a href="https://www.tiktok.com/@miss21ninety" target="_blank">TikTok</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>© 2025 MISS21ninety</p>
          <p>Developped by <a href="https://www.github.com/spyglee" target="_blank">Spyglee</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer