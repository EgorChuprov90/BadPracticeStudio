import Tittle from "./Tittle";
/*import { media } from "../data/media";*/
/*import MediaBtn from "./MediaBtn";*/
import cat from 'C:/Users/polin/Desktop/badpracticestudio/src/img/cat.svg';
import Leye from 'C:/Users/polin/Desktop/badpracticestudio/src/img/Lglaz.svg';
import Peye from 'C:/Users/polin/Desktop/badpracticestudio/src/img/Pglaz.svg';


function Contacts() {

   return (
      <section className="contacts">
         <div className="container">
            <Tittle tittle={'Контакты'} />
            <div className="contacts__flex">
               <ul className="contacts__list">
                  <li className="contacts__buttons vk"></li>
                  <li className="contacts__buttons inst"></li>
                  <li className="contacts__buttons  linked"></li>
                  <li className="contacts__buttons mail">nashapochta@mail.ru</li>
               </ul>
               <div className="cat"><img src={cat} alt="Cat" /><img className="cat__eye eye1" src={Leye} alt="Cat eye" /><img className="cat__eye eye2" src={Peye} alt="Cat eye" /></div>
            </div>
         </div>
      </section>
   )
}

export default Contacts;

/*{media.map(media => <MediaBtn media={media} key={media.id} />)}*/