// console.log("hello world");
// const h1 = document.querySelector(".hero-heading");
// const myName = "Yusuf Lateefat"
// console.log(h1)

// h1.addEventListener("click", function () {
//     h1.textContent = myName;
// h1.style.backgroundColor = "red";
//     h1.style.padding = "5rem";
// });

// set current year

const thisYear = document.querySelector(".year");
const currentYear = new Date().getFullYear();
thisYear.textContent = currentYear;

// make mobile navigation work
const btnNavEl= document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener ('click', function(){
   headerEl.classList.toggle("nav-open");
});