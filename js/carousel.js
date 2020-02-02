const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');




// buttons
const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');

//counter


let counter = 1;
let size =  carouselImages[3].scrollWidth;

carouselSlide.style.transform = 'translateX(' + (- size * counter) + 'px)';




window.onresize = function(event) {
  size = carouselImages[0].clientWidth;
  carouselSlide.style.transition = "none";
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
};

// button listeners

nextbtn.addEventListener('click',()=>{
if(counter>=carouselImages.length-3) return;
  carouselSlide.style.transition = "transform 0.6s ease-in-out";
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevbtn.addEventListener('click',()=>{
  if(counter<=0) return;
  carouselSlide.style.transition = "transform 0.6s ease-in-out";
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', ()=>{
  if(carouselImages[counter].id === 'last-clone'){
    carouselSlide.style.transition = "none";
    counter=carouselImages.length-4;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if(carouselImages[counter].id === 'first-clone'){
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

// timer for carousel

setInterval(function () {document.getElementById("nextbtn").click();}, 8000);