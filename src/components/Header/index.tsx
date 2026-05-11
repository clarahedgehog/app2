import LogoImage from '../../assets/logo.png'

const Header = () => {
  return (
    <header className="flex flex-col items-center">
      <img className='sm:w-[40%] sm:m-3 lg:w-2xs lg:m-4' src={LogoImage} alt="logo" width="20%" height="auto" />
      <h1 className="sm:text-5xl font-digimon lg:text-7xl lg:text-center p-4">Guess that Digimon!</h1>
    </header>
  )
}

export default Header