const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  reveals.forEach(element => {
    const top = element.getBoundingClientRect().top;

    if (top < triggerBottom) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const offset = window.pageYOffset;
  hero.style.backgroundPositionY = `${offset * 0.4}px`;
});