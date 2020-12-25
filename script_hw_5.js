let carousel;

let createCarousel = function(slidesCount = 5) {
  carousel = document.querySelector('#carousel');
  makeSlides(slidesCount);
  makeIndicators(slidesCount);
  makeControls();
  makeStyle();
  listenInd();
};

let makeSlides = function(n) {
  const slides = document.createElement('ul');
  slides.setAttribute('class', 'slides');
  carousel.appendChild(slides);

  for(let i = 0; i < n; i++) {
    const slidesItem = document.createElement('li');
    slidesItem.setAttribute('class', 'slides__item');
    slides.appendChild(slidesItem);
 
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    slidesItem.appendChild(link);
  
    if (i === 0){
      slidesItem.classList.add('active');
      }
  }
};


let makeIndicators = function(n) {
  const indicators = document.createElement('div');
  indicators.setAttribute('class', 'indicators');
  carousel.appendChild(indicators);

  for(let i = 0; i < n; i++) {
      const indicatorsItem = document.createElement('span');
      indicatorsItem.setAttribute('class', 'indicators__item');
      indicators.appendChild(indicatorsItem);
      indicatorsItem.dataset.slideTo = i;
  
      if (i === 0){
        indicatorsItem.classList.add('active');
        }
    }
  
};


let makeControls = function() {
  const controls = document.createElement('div');
  controls.setAttribute('class', 'controls');
  carousel.appendChild(controls);
  
  for(let i = 0; i < 3; i++) {
  const controlItems = document.createElement('div');
  controls.appendChild(controlItems);
  controlItems.setAttribute('class', 'controls__item');
  
  const img = document.createElement('i');
  controlItems.appendChild(img);
  img.setAttribute('class', 'fas');
  
  switch(i) {
    case 0: controlItems.classList.add('controls__prev');
    img.classList.add('fa-chevron-left');  
    break;
    case 1: controlItems.classList.add('controls__next');
    img.classList.add('fa-chevron-right');  
    break;
    case 2: controlItems.classList.add('controls__pause');
    img.classList.add('fa-play');  
    break;
  }
  }
};


let makeStyle = function() {
  let styleCode = document.createElement('style');
  carousel.appendChild(styleCode);
  let style = `
  ul {
    position: relative; 
    height: 150px;
  }
  li {
    position: absolute; 
    left: 0px; 
    top: 0px; 
    width: 100%; 
    height: 100%; 
    background: #333;
  }
  .indicators {
    display: flex; 
    list-style: none; 
    margin-top: 15px; 
    padding: 0;
  }
  .indicators__item {
    list-style: none; 
    display: inline-block; 
    margin-right: 15px; 
    height: 10px; 
    padding: 10px 20px; 
    background-color: #cccccc; 
    cursor: pointer;
  }
  .controls {
    position: relative; 
    margin-top: 10px;
  }
  .controls__item {
    list-style: none; 
    display: inline-block; 
    margin-right: 15px; 
    height: 10px; 
    padding: 10px 20px; 
    background-color: #cccccc; 
    cursor: pointer;
  }
  `;
  styleCode.innerHTML = style;
};

let listenInd = function() {
  let pointer = null;
  indListen = document.querySelector('.indicators');

  indListen.addEventListener('click', (e) =>{
    let target = e.target;
  
    if (target.classList.contains('indicators__item')) { 
    target.style.backgroundColor = 'red';
    }
    
    if (pointer !== null) {
      pointer.removeAttribute('style');
    }
    pointer = target;
  });
};


createCarousel();