// --------------------Accordions-menu----------------

const menuItem = document.querySelectorAll(".menu__item-accordion");
const dropdown = document.querySelectorAll(".menu__dropdown");
let zIndexMin = 30;
let zIndexMax = zIndexMin + dropdown.length + 1;

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    const buttonItem = item.querySelector(".menu__item-arrow");
    buttonItem.classList.toggle("accordion-button--active");
    const attributeDropdown = item.getAttribute("data-accordion");
    const menuDropdown = document.querySelector(`.${attributeDropdown}`);
    menuDropdown.classList.toggle("dropdown-menu--active");
    if (zIndexMin == zIndexMax) {
      zIndexMin = 30;
      for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].style.zIndex = zIndexMin;
      }
      menuDropdown.style.zIndex=zIndexMin++;
    }
    if (menuDropdown.classList.contains("dropdown-menu--active")) {
      menuDropdown.style.zIndex = zIndexMin++;
    }
  });
});

// ----------------burger-----------

const burgerBtn = document.querySelector(".burger");
const burgerWindow = document.querySelector(".burger-window");

burgerBtn.addEventListener("click", () => {
  burgerWindow.classList.toggle("burger-window--active");
  burgerBtn.classList.toggle("burger-btn--active");
  if (burgerWindow.classList.contains("burger-window--active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});

// ------------------Animation--------------

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// ScrollSmoother.create({
//   wrapper: ".main",
//   content: ".wrapper",
// });

const header = gsap.timeline({
  scrollTrigger: {
    trigger: ".header",
    start: "50% 56%",
    scrub: true,
  },
});

header
  .fromTo(
    ".layer-middle",
    { y: 0 },
    {
      y: 110,
    },
    0
  )
  .fromTo(
    ".layer-front",
    { y: 0 },
    {
      y: 140,
    },
    0
  )
  .fromTo(
    ".menu__items",
    {
      y: 60,
    },
    {
      y: 0,
    },
    0
  );

const guide = gsap.timeline({
  scrollTrigger: {
    trigger: ".guide",
    start: "20% 60%",
    scrub: true,
  },
});

guide
  .fromTo(
    ".guide-layer-middle",
    { y: 0 },
    {
      y: 120,
    },
    0
  )
  .fromTo(
    ".guide-layer-front",
    { y: 0 },
    {
      y: 140,
    },
    0
  );

// ------------

const menu = gsap.timeline({
  scrollTrigger: {
    trigger: ".menu",
    start: "10% 80%",
    end: "30% 60%",
    scrub: true,
  },
});

menu
  .fromTo(
    ".menu__title",
    {
      opacity: 0,
      x: -120,
    },
    { opacity: 1, x: 0 },
    0
  )
  .fromTo(
    ".menu__btn",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    0
  );

gsap.fromTo(
  ".menu__card-item",
  {
    opacity: 0,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,

    scrollTrigger: {
      trigger: ".menu",
      start: "34% 80%",
      end: "+=220",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".work__title",
  {
    opacity: 0,
    y: 60,
  },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".work",
      start: "10% 80%",
      end: "+=300",
      scrub: true,
    },
  }
);

const workCard = gsap.timeline({
  scrollTrigger: {
    trigger: ".work",
    start: "50% 60%",
  },
});

workCard.fromTo(".work__card",{
opacity:0,

},{
opacity:1,
})
