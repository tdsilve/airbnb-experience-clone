import airbnbLogo from '../assets/images/airbnb-logo.svg'
export default function Navbar() {
  return (
    <nav>
      <img src={airbnbLogo} alt="Airbnb Logo" className='logo'></img>
    </nav>
  )
}