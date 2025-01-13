import logo from '../assets/images/MISS21ninety_logo-1.png'

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };

  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <a href="#about" onClick={() => scrollToSection('about')}>About</a>
        <a href="#food" onClick={() => scrollToSection('food')}>Nutrition</a>
        <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        <button className="main-button">
          <span>Login</span>
        </button>
      </nav>
    </header>
  )
}

export default Header;