import Tittle from "./Tittle";
import { advantages } from "../data/advantages";
import Advantage from "./Advantage";

function About() {
   return (
      <section className="about">
         <div className="container">
            <Tittle tittle={'О нас'} />
            <p className="about__text">Тут текст про нас и нашу крутую компанию и вот короче много текста, а еще тут текст про нас и нашу крутую компанию и вот короче много текста, а еще тут текст про нас и нашу крутую компанию и вот короче много текста, а еще тут текст про нас и нашу крутую компанию и вот короче много текста, а еще тут текст про нас и нашу крутую компанию и вот короче много текста, а еще тут текст про нас и нашу крутую компанию и вот короче много текста, а еще тут текст про нас и нашу крутую компанию и вот короче много текста, а еще тут текст про нас и нашу крутую компанию и вот короче много текста, а еще тут текст про нас и нашу крутую компанию и вот короче много текста, а еще тут текст про нас и нашу крутую компанию и вот короче много текста, а еще тут текст про нас и нашу крутую компанию и вот короче много текста, а еще тут текст про нас и нашу крутую компанию и вот короче много текста, ну и все короче.</p>
            <ul className="about__list">{advantages.map(advantage => <Advantage advantage={advantage.advantage} key={advantage.id} />)}
            </ul>
         </div>
      </section>
   )
}

export default About;