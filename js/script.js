const carrosselContainer = document.querySelector(".carrossel-Container");  
const slides = document.querySelectorAll('.slides');  
const next = document.querySelector('#next');  
const prev = document.querySelector('#prev');  
let counter = 1 ;  
const size = slides[0].clientWidth;  
carrosselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
next.addEventListener('click',()=>{  
  if (counter>=slides.length)return;  
  carrosselContainer.style.transition = 'transform 0.4s ease-in-out';  
  counter++;  
  carrosselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
});  
prev.addEventListener('click',()=>{  
  if (counter<=0)return;  
  carrosselContainer.style.transition = 'transform 0.4s ease-in-out';  
  counter--;  
  carrosselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
});  
carrosselContainer.addEventListener('transitionend',()=>{  
  console.log(slides[counter]);  
  if(slides[counter].id ==='lastslide'){  
    carrosselContainer.style.transition = 'none';  
  counter = slides.length - 2;      
  carrosselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
  }  
});  
carrosselContainer.addEventListener('transitionend',()=>{  
  console.log(slides[counter]);  
  if(slides[counter].id ==='firstslide'){  
    carrosselContainer.style.transition = 'none';  
  counter = slides.length - counter;      
  carrosselContainer.style.transform = 'translateX(' + (-size * counter ) + 'px';  
  }  
});  