import logo from 'C:/Users/polin/Desktop/badpracticestudio/src/img/logo__short.png';

function Footer() {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__flex">
               <img src={logo} className="footer__logo" />
               <ul className="footer__list">
                  <li className="footer__link">Лицензионное соглашение</li>
                  <li className="footer__link">Политика конфиденциальности</li>
               </ul>
            </div>
         </div>
      </footer>
   )
}

export default Footer;