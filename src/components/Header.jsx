import Logo from "./Logo";
import Nav from "./Nav";


function Header() {

   return (
      <header className="header">
         <div className="container">
            <div className="header__flex">
               <Logo />
               <Nav />
            </div>
         </div>
      </header>
   )
}

export default Header;