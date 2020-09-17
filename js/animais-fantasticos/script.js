/* **********************************************************************
 * -- Navegação por tabs na lista de animais.
 * **********************************************************************/
function initTabNavigation() {
  const tabMenu = document.querySelectorAll('.js-tab-menu li');
  const tabContent = document.querySelectorAll('.js-tab-content section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index));
    });
  }
}

initTabNavigation();


function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

initAccordion();


function initSmoothScrolling() {
  const internLinks = document.querySelectorAll('.js-menu a[href^="#"');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href'); // pega href exato, não URL completa
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // // maneira alternativa
    // const top = section.offsetTop;
    // window.scrollTo({
    //   top,
    //   behavior: 'smooth'
    // });
  }

  internLinks.forEach((link) => link.addEventListener('click', scrollToSection));
}

initSmoothScrolling();


function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length) {
    const animateHeight = window.innerHeight * 0.6;

    function animateScroll() {
      sections.forEach((section) => {
        const isSectionVisible = section.getBoundingClientRect().top - animateHeight < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }

    animateScroll();

    window.addEventListener('scroll', animateScroll);
  }
}

initScrollAnimation();