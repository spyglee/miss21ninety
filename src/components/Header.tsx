import Image from 'next/image';
import logo from '../../public/MISS21ninety_logo-1.png'
import '../app/globals.css'
import Link from 'next/link';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };

  return (
    <header className='flex max-w-[100%] justify-center items-center'>
      <div className='flex p-4 bg-mainLight fixed top-0 w-[100%] z-10 justify-between items-center !max-w-maxWidth'>
        <Image className='w-[50%] max-w-[120px]' src={logo} alt="logo" />
        <nav className='flex justify-end align-middle items-center w-[50%] gap-4'>
          <Link className='md:block hidden' href="#about" onClick={() => scrollToSection('about')}>About</Link>
          <Link className='md:block hidden' href="#food" onClick={() => scrollToSection('food')}>Nutrition</Link>
          <Link className='md:block hidden' href="#contact" onClick={() => scrollToSection('contact')}>Contact</Link>
          <Link className='bg-mainDark text-white font-bold py-1 px-4 rounded-md' href="/login">
            <span>Login</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;