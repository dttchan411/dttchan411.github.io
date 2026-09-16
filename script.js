'use strict';

// Scroll-driven transforms only: no animation loop runs while the page is idle.
const root = document.documentElement;
const journey = document.querySelector('.hero-journey');
const hero = document.querySelector('.hero');
const artwork = document.querySelector('.hero-image');
const heroContent = document.querySelector('.hero-content');
const progressBar = document.querySelector('.journey-progress span');
const motionButton = document.querySelector('.motion-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused = false;
let scheduled = false;
let journeyTop = 0;
let journeyDistance = 1;

try { motionPaused = localStorage.getItem('portfolio-motion') === 'off'; } catch { /* Storage may be unavailable in private browsers. */ }

function measureJourney() {
  journeyTop = journey.getBoundingClientRect().top + window.scrollY;
  journeyDistance = Math.max(1, journey.offsetHeight - hero.offsetHeight);
}

function renderJourney() {
  scheduled = false;
  const amount = Math.min(1, Math.max(0, (window.scrollY - journeyTop) / journeyDistance));
  if (motionPaused || reducedMotion.matches) {
    artwork.style.transform = '';
    heroContent.style.transform = '';
    progressBar.style.transform = '';
    return;
  }
  artwork.style.transform = `scale(${1 + amount * .24}) translate3d(${-amount * 2}%, ${amount * 2}%, 0)`;
  heroContent.style.transform = `translate3d(0, ${-amount * 35}px, 0)`;
  progressBar.style.transform = `scaleX(${amount})`;
}

function scheduleRender() {
  if (!scheduled) {
    scheduled = true;
    window.requestAnimationFrame(renderJourney);
  }
}

function syncMotion() {
  root.classList.toggle('motion-paused', motionPaused);
  motionButton.hidden = reducedMotion.matches;
  motionButton.setAttribute('aria-pressed', String(motionPaused));
  motionButton.textContent = motionPaused ? '움직임 켜기' : '움직임 끄기';
  measureJourney();
  scheduleRender();
}

motionButton.addEventListener('click', () => {
  motionPaused = !motionPaused;
  try { localStorage.setItem('portfolio-motion', motionPaused ? 'off' : 'on'); } catch { /* Preference still works for this visit. */ }
  syncMotion();
});
reducedMotion.addEventListener('change', syncMotion);
window.addEventListener('scroll', scheduleRender, { passive: true });
window.addEventListener('resize', () => { measureJourney(); scheduleRender(); }, { passive: true });
window.addEventListener('pageshow', () => { measureJourney(); scheduleRender(); });
syncMotion();

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile-nav');
function closeMenu() {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
}
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);

if ('IntersectionObserver' in window) {
  const navigationLinks = document.querySelectorAll('.desktop-nav a');
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navigationLinks.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-15% 0px -50% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach(section => sectionObserver.observe(section));
}
