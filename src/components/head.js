function getAnimate() {

   let buttons = document.querySelectorAll('.nav__btn')
   let span = document.querySelector('.nav__span')
   let header = document.querySelector('.header')
   let nav = document.querySelector('.nav')



   for (let i = 0; i < buttons.length; i++) {
      let coordNav = [100, document.querySelector('.games').getBoundingClientRect().top, document.querySelector('.contacts').getBoundingClientRect().top]
      buttons[i].onclick = function (e) {
         e.preventDefault()

         window.scrollTo({
            top: coordNav[i],
            behavior: "smooth"
         });
      }
   }


   window.onscroll = function (e) {
      let scrollWindow = window.scrollY;

      let coordGames = document.querySelector('.games').getBoundingClientRect().top + 500
      let coordContacts = document.querySelector('.contacts').getBoundingClientRect().top + 1000




      if (scrollWindow > 0) {
         span.style.height = '27px'
         let halfWidth = (buttons[0].getBoundingClientRect().right - buttons[0].getBoundingClientRect().left) / 2;
         span.style.left = buttons[0].getBoundingClientRect().left - nav.getBoundingClientRect().left + halfWidth + 'px';
         header.classList.add('header_active')
         buttons[0].classList.add('nav_active')
      } else {
         buttons[0].classList.remove('nav_active')
         span.style.height = '0px'
         header.classList.remove('header_active')
      }

      if (scrollWindow >= coordGames) {
         buttons[0].classList.remove('nav_active')
         let halfWidth = (buttons[1].getBoundingClientRect().right - buttons[1].getBoundingClientRect().left) / 2;
         span.style.left = buttons[1].getBoundingClientRect().left - nav.getBoundingClientRect().left + halfWidth + 'px';
         buttons[1].classList.add('nav_active')
      } else {
         buttons[1].classList.remove('nav_active')
      }

      if (scrollWindow >= coordContacts) {
         buttons[1].classList.remove('nav_active')
         let halfWidth = (buttons[2].getBoundingClientRect().right - buttons[2].getBoundingClientRect().left) / 2;
         span.style.left = buttons[2].getBoundingClientRect().left - nav.getBoundingClientRect().left + halfWidth + 'px';
         buttons[2].classList.add('nav_active')
      } else {
         buttons[2].classList.remove('nav_active')
      }
   };
}

export default getAnimate