import logo from '../img/logo.png';

function Logo() {
   return (
      <a href="#">
         <img className='header__logo' src={logo} alt="Bad Practice Studio" />
      </a>
   )
}

export default Logo;