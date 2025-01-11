import logo from '../assets/images/MISS21ninety_logo-1.png'

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <a>About</a>
        <a>Services</a>
        <a>Contact</a>
        <button className="main-button">
          <span>Login</span>
        </button>
      </nav>
    </header>
  )
}

export default Header;