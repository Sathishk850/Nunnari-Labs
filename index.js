let slidePosition=0;
const sliders = document.querySelectorAll(".slider-item");
const totalSlider = sliders.length;
console.log(totalSlider);
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");

btnPrev.addEventListener('click', function () {
  PrevSlide();

});
btnNext.addEventListener('click', function () {
  NextSlide();

});
function updatePosition() {

  sliders.forEach(slide=>{
    slide.classList.remove('active');
    slide.classList.add('hidden');
  });

sliders[slidePosition].classList.add('active');
identifier[slidePosition].classList.add('dot-active');
}
function PrevSlide() {
  if(slidePosition==0){
    slidePosition=totalSlider-1;
  }
  else{
  slidePosition--;
  }
  
  updatePosition();

}
function NextSlide() {
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }
  else{
  slidePosition++;
  }
  updatePosition();

}
const dotContainer=document.querySelector('.dots')
sliders.forEach(slide=>{
  const dot=document.createElement('div');
  dot.classList.add('dot');
  dotContainer.appendChild(dot);
});

const dots=document.querySelectorAll('.dot');
dots[slidePosition].classList.add('dot-active');
