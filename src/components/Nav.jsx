import Language from "./Language";
import NavBtn from "./NavBtn";


function Nav() {
   return (
      <ul className="header__nav nav">
         <li><NavBtn menuText={'О нас'} /></li>
         <li><NavBtn menuText={'Наши игры'} /></li>
         <li><NavBtn menuText={'Контакты'} /></li>
         <li><Language /></li>
         <div className="nav__span"></div>
      </ul>
   )
}

export default Nav;