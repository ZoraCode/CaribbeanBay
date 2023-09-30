
function start_slide(){
    let start_slideContainer = document.querySelector('.start_slider_container'),
      start_sliderWrap = start_slideContainer.querySelector('.start_slide_wrapper'),
      start_slides = start_sliderWrap.querySelectorAll('.start_slides'),
      start_slideLine = start_sliderWrap.querySelectorAll('.start_slideLine line'),
      start_slideCount = start_slides.length,
      start_slideWidth = 324,
      start_slideMargin = 8,
      start_slideToShow = 4,
      start_currentIdx = 0,
      start_autoSet = undefined,
      start_prevBtn = document.querySelector('.start #start_prev'),
      start_nextBtn = document.querySelector('.start #start_next');
  
      for(let i = 0; i<start_slideCount;i++){
          let start_cloneSlide = start_slides[i].cloneNode(true);
          start_cloneSlide.classList.add('clone');
          start_sliderWrap.appendChild(start_cloneSlide);
        };
      for(let i = start_slideCount-1; i>=0 ;i--){
        let start_cloneSlide = start_slides[i].cloneNode(true);
        start_cloneSlide.classList.add('clone');
        start_sliderWrap.prepend(start_cloneSlide);
      };
  
      let start_allSlide = start_sliderWrap.querySelectorAll('.start_slides');        
      start_allSlide.forEach((item, idx)=>{
        item.style.left = 
        (start_slideWidth * start_slideToShow + start_slideMargin * (start_slideToShow - 1)) * idx + 'px';
      });
        
      function start_setSlide(){
        let start_MoveAmt = -(start_slideWidth * start_slideToShow + start_slideMargin * (start_slideToShow - 1)) + 'px';
        start_sliderWrap.style.transform = `translateX(${start_MoveAmt})`;
        start_sliderWrap.classList.add('animated');
      };
      start_setSlide();
  
      function start_moveSlide(SlideNumber){
        start_sliderWrap.style.left = -SlideNumber * (start_slideWidth + start_slideMargin)+'px';
        start_currentIdx = SlideNumber;
        
        if(start_currentIdx == -start_slideToShow || start_currentIdx == start_slideToShow ){
          setTimeout(()=>{
            start_sliderWrap.classList.remove('animated');
            start_sliderWrap.style.left = '0px';
            start_currentIdx = 0;
          },500);
          setTimeout(()=>{
            start_sliderWrap.classList.add('animated');
          },600);
        };
      };
  
      function slideCheck(callback, time){
        let start_Switch = true;
        return ()=>{
          if(start_Switch){
            callback();
            start_Switch = false;
            setTimeout(()=>{
              start_Switch = true;
            }, time);
          };
        };
      };
  
      start_nextBtn.addEventListener('click', slideCheck(()=>{   
        start_moveSlide(start_currentIdx+1);
      }, 500));
      start_prevBtn.addEventListener('click',slideCheck(()=>{   
        start_moveSlide(start_currentIdx-1);
      }, 500)); 
  
      function start_autoSlide(){
        start_autoSet = setInterval(()=>{
          start_moveSlide(start_currentIdx + 1);
        }, 3000);
      };
      start_slideContainer.addEventListener('mouseenter', function(e){
        clearInterval(start_autoSet);
        start_autoSet = undefined;
      });
      start_slideContainer.addEventListener('mouseleave', function(e){
        if(start_autoSet  == undefined){
          setTimeout(()=>{
          start_autoSlide();
        }, 20);
        } 
      });
      start_autoSlide();
  }
  $(window).resize(function(){
    if($(this).width() >= 768){
      start_slide();
    }
  });