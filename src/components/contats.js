function getMove() {
   let contacts = document.querySelector('.contacts');
   let cat = document.querySelector('.cat');
   let leye = document.querySelector('.eye1');
   let reye = document.querySelector('.eye2');


   contacts.onmousemove = function (e) {

      reye.style.transition = 'all 0.1s linear';
      leye.style.transition = 'all 0.1s linear';
      let x = (e.x - (cat.getBoundingClientRect().left + ((cat.getBoundingClientRect().right - cat.getBoundingClientRect().left) / 2))) / 16;
      let y = (e.y - (cat.getBoundingClientRect().top + ((cat.getBoundingClientRect().bottom - cat.getBoundingClientRect().top) / 2))) / 10;

      if (x > 27) {
         x = 27
      }
      if (x < -27) {
         x = -27
      }
      if (y > 25) {
         y = 25
      }
      if (y < -25) {
         y = -25
      }

      leye.style.transform = 'translate(' + x + 'px ,' + y + 'px)';
      reye.style.transform = 'translate(' + x + 'px ,' + y + 'px)';
   }
   contacts.onmouseleave = function (e) {
      reye.style.transform = 'translate( 0, 0)';
      reye.style.transition = 'all 0.5s linear';
      leye.style.transform = 'translate( 0, 0)';
      leye.style.transition = 'all 0.5s linear';
   }


}

export default getMove;