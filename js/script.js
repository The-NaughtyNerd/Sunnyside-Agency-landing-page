'use strict';

///////////////////////////////////////////////////////
// Navigation Sticky
/*
const header = document.querySelector('.header');
const nav = document.querySelector('#nav');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('fixed');
  else nav.classList.remove('fixed');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////////////////////
// Reveal Sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
*/

///////////////////////////////////////////////////////
// Mobile Nav
const btn = document.getElementById('menu-btn');
const mobileNav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  mobileNav.classList.toggle('flex');
  mobileNav.classList.toggle('hidden');
});
