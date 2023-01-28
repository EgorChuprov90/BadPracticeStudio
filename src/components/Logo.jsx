/*import { useState } from 'react';
import logo from '../img/logo.png';*/
import logoName from 'C:/Users/polin/Desktop/badpracticestudio/src/img/logoName.png'

function Logo() {
   /*const [a, setA] = useState({ logo })*/
   return (
      <a href="#">
         <img className='header__logo' src={logoName} alt="Bad Practice Studio" />
      </a>
   )
}

export default Logo;