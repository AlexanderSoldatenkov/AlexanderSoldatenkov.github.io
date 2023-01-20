


window.onload = () => {
  //Hidden menu
  const hamburger = document.querySelector('.hamburger'),
    hiddenmenu = document.querySelector('.hiddenmenu'),
    hiddenmenulink = document.querySelector('.hiddenmenu__list'),
    closeElem = document.querySelector('.hiddenmenu__close'),
    closeThankyou = document.querySelector('.modal__close'),
    star = document.querySelectorAll('.hiddenmenu__link');
  const overlay = document.querySelector('.hiddenmenu__overlay');
  const closeClickOverlay = true;
  
  hamburger.addEventListener('click', () => {
    hiddenmenu.classList.add('active');
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
  });
  
  closeElem.addEventListener('click', () => {
    hiddenmenu.classList.remove('active');
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
  });
  
  hiddenmenulink.addEventListener('click', () => {
    hiddenmenu.classList.remove('active');
    document.body.style.overflow = "";
    document.body.style.marginRight = `0px`;
  });
  //Close menu when click on overlay
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay && closeClickOverlay) {
      hiddenmenu.classList.remove('active');
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
  });
  }