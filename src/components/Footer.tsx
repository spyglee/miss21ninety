import Image from 'next/image'
import logoLight from '../../public/MISS21ninety_logo-3.png'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-grey max-w-maxWidth'>
      <div className='p-8'>
        <div className='flex md:flex-row flex-col justify-between items-center gap-8'>
          <div className='flex flex-1 justify-center items-center'>
            <Image className='w-auto h-[30px]' src={logoLight} alt="logo" />
          </div>
          <div className='flex-[1.5] flex flex-col md:flex-row gap-4 justify-between items-center'>
            <div>
              <h4 className='text-mainLight'>Quick Links</h4>
              <ul>
                <li className='text-white hover:text-black'><Link href="/">Home</Link></li>
                <li className='text-white hover:text-black'><Link href="/about">About</Link></li>
                <li className='text-white hover:text-black'><Link href="/services">Services</Link></li>
                <li className='text-white hover:text-black'><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className='text-mainLight'>Our Partners</h4>
              <ul>
                <li className='text-white hover:text-black'><Link href="https://www.nike.com" target="_blank">Nike</Link></li>
                <li className='text-white hover:text-black'><Link href="https://www.instagram.com/olympicfitnessrijeka" target="_blank">Olympic</Link></li>
                <li className='text-white hover:text-black'><Link href="https://nk-rijeka.hr" target="_blank">HNK Rijeka</Link></li>
                <li className='text-white hover:text-black'><Link href="https://www.github.com/spyglee" target="_blank">Spyglee</Link></li>
              </ul>
            </div>
            <div>
              <h4 className='text-mainLight'>Stay Connected</h4>
              <ul>
                <li className='text-white hover:text-black'><Link href="https://www.instagram.com/miss21ninety/" target="_blank">Instagram</Link></li>
                <li className='text-white hover:text-black'><Link href="https://www.facebook.com/miss21ninety" target="_blank">Facebook</Link></li>
                <li className='text-white hover:text-black'><Link href="https://www.tiktok.com/@miss21ninety" target="_blank">TikTok</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between items-center gap-8'>
          <p>© 2025 MISS21ninety</p>
          <p>Developped by <Link href="https://www.github.com/spyglee" target="_blank">Spyglee</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer