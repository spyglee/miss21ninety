import logo from '../assets/images/MISS21ninety_logo-1.png'

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Contact</a>
        <button className="main-button">
          <span>Login</span>
        </button>
      </nav>
    </header>
  )
}

export default Header;