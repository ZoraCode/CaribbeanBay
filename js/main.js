// sec1

$(function(){
    let sec1VideoContainer = $('.sec1_fullbg');  
    let sec1VideoRatio = 1920/1000;
  
    $(window).resize(function(){
      let winWidth = $(window).width();
      let winHeight = $(window).height();
      let browserRatio = winWidth/winHeight;
      if(browserRatio < sec1VideoRatio){
        sec1VideoContainer.css({
          height: '100%', 
          width: winHeight * sec1VideoRatio,
          top: 0,
          left: (winWidth - (winHeight * sec1VideoRatio))/2
        });
      } else{
        sec1VideoContainer.css({
          width: '100%', 
          height: winWidth/sec1VideoRatio,
          left: 0,
          top: (winHeight - winWidth / sec1VideoRatio)/2
        });
      }
    });
  
    $(window).trigger('resize');
  }); 
  
  const sec1Swiper = new Swiper('.sec1_video_slide', {
    slidesPerView: 1,
  
    direction: 'horizontal',
    loop: true,
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });  
  
  $('.sec1_prev').click(function(){
    sec1Swiper.slidePrev();
  });
  $('.sec1_next').click(function(){
    sec1Swiper.slideNext();
  }); 

//   sec2

function sec2_slide(){
    let sec2_slideContainer = document.querySelector('.sec2_slider_container'),
      sec2_sliderWrap = sec2_slideContainer.querySelector('.sec2_slide_wrapper'),
      sec2_slides = sec2_sliderWrap.querySelectorAll('.sec2_slides'),
      sec2_slideCount = sec2_slides.length,
      sec2_slideWidth = 300,
      sec2_slideMargin = 15,
      sec2_slideToShow = 4,
      sec2_currentIdx = 0,
      Sec2_autoSet = undefined,
      sec2_prevBtn = document.querySelector('.sec2 #sec2_prev'),
      sec2_nextBtn = document.querySelector('.sec2 #sec2_next');
  
      for(let i = 0; i<sec2_slideCount;i++){
          let sec2_cloneSlide = sec2_slides[i].cloneNode(true);
          sec2_cloneSlide.classList.add('clone');
          sec2_sliderWrap.appendChild(sec2_cloneSlide);
        };
      for(let i = sec2_slideCount-1; i>=0 ;i--){
        let sec2_cloneSlide = sec2_slides[i].cloneNode(true);
        sec2_cloneSlide.classList.add('clone');
        sec2_sliderWrap.prepend(sec2_cloneSlide);
      };
  
      let sec2_allSlide = sec2_sliderWrap.querySelectorAll('.sec2_slides');        
      sec2_allSlide.forEach((item, idx)=>{
        item.style.left = 
        (sec2_slideWidth * sec2_slideToShow + sec2_slideMargin * (sec2_slideToShow - 1)) * idx + 'px';
      });
        
      function sec2_setSlide(){
        let sec2_MoveAmt = -(sec2_slideWidth * sec2_slideToShow + sec2_slideMargin * (sec2_slideToShow - 1)) + 'px';
        sec2_sliderWrap.style.transform = `translateX(${sec2_MoveAmt})`;
        sec2_sliderWrap.classList.add('animated');
      };
      sec2_setSlide();
  
      function sec2_moveSlide(SlideNumber){
        sec2_sliderWrap.style.left = -SlideNumber * (sec2_slideWidth + sec2_slideMargin)+'px';
        sec2_currentIdx = SlideNumber;
        
        if(sec2_currentIdx == -sec2_slideToShow || sec2_currentIdx == sec2_slideToShow ){
          setTimeout(()=>{
            sec2_sliderWrap.classList.remove('animated');
            sec2_sliderWrap.style.left = '0px';
            sec2_currentIdx = 0;
          },500);
          setTimeout(()=>{
            sec2_sliderWrap.classList.add('animated');
          },600);
        };
      };
  
      function slideCheck(callback, time){
        let Sec2_Switch = true;
        return ()=>{
          if(Sec2_Switch){
            callback();
            Sec2_Switch = false;
            setTimeout(()=>{
              Sec2_Switch = true;
            }, time);
          };
        };
      };
  
      sec2_nextBtn.addEventListener('click', slideCheck(()=>{   
        sec2_moveSlide(sec2_currentIdx+1);
      }, 500));
      sec2_prevBtn.addEventListener('click',slideCheck(()=>{   
        sec2_moveSlide(sec2_currentIdx-1);
      }, 500)); 
  
      function Sec2_autoSlide(){
        Sec2_autoSet = setInterval(()=>{
          sec2_moveSlide(sec2_currentIdx + 1);
        }, 3000);
      };
      sec2_slideContainer.addEventListener('mouseenter', function(e){
        clearInterval(Sec2_autoSet);
        Sec2_autoSet = undefined;
      });
      sec2_slideContainer.addEventListener('mouseleave', function(e){
        if(Sec2_autoSet  == undefined){
          setTimeout(()=>{
          Sec2_autoSlide();
        }, 20);
        } 
      });
      Sec2_autoSlide();
  }
  $(window).resize(function(){
    if($(this).width() >= 768){
      sec2_slide();
    }
  });
  
  $(window).trigger('resize');