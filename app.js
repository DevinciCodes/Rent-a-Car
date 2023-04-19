
//Scroll for browse-cars

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let cars = document.getElementsByClassName('cars')[0];

left_scroll.addEventListener('click', ()=>{
    cars.scrollLeft -= 220;
})

right_scroll.addEventListener('click', ()=>{
    cars.scrollLeft += 220;
   
})

//Scroll for browse-ad

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let ad = document.getElementsByClassName('ad')[0];

left_scrolls.addEventListener('click', ()=>{
    ad.scrollLeft -= 855;
})

right_scrolls.addEventListener('click', ()=>{
    ad.scrollLeft += 855;
    
})

//Scroll for browse-destinations

let left_scroll_3 = document.getElementById('left_scroll_3');
let right_scroll_3 = document.getElementById('right_scroll_3');
let destinations = document.getElementsByClassName('destinations')[0];

left_scroll_3.addEventListener('click', ()=>{
    destinations.scrollLeft -= 185;
})

right_scroll_3.addEventListener('click', ()=>{
    destinations.scrollLeft += 185;
    
})

//Scroll for browse-experiences

let left_scroll_4 = document.getElementById('left_scroll_4');
let right_scroll_4 = document.getElementById('right_scroll_4');
let experiences = document.getElementsByClassName('experiences')[0];

left_scroll_4.addEventListener('click', ()=>{
    experiences.scrollLeft -= 350;
})

right_scroll_4.addEventListener('click', ()=>{
    experiences.scrollLeft += 350;
    
})

//Scroll for testimonials

let left_scroll_5 = document.getElementById('left_scroll_5');
let right_scroll_5 = document.getElementById('right_scroll_5');
let testimonials = document.getElementsByClassName('testimonials')[0];

left_scroll_5.addEventListener('click', ()=>{
    testimonials.scrollLeft -= 355;
})

right_scroll_5.addEventListener('click', ()=>{
    testimonials.scrollLeft += 355;
   
})


//JS for FAQ accordian

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}