import checkmark from 'C:/Users/polin/Desktop/badpracticestudio/src/img/chekmark.png'

function Advantage({ advantage }) {
   return (
      <li className="about__advantage advantage"><img src={checkmark} alt='check mark' /> <p>{advantage}</p></li>
   )
}

export default Advantage;