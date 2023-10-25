

// header

let header = document.querySelector('.bottom_menu'),
headerMenu = document.querySelectorAll('.bottom_menu .menu_list li'),
headerSubmenu = document.querySelectorAll('.bottom_menu .menu_list ul'),
headerHeight = header.offsetHeight;
let headerBottomOST = header.offsetTop;
let headerSubmenuHeight = 0;


headerSubmenu.forEach(item=>{

  if(item.offsetHeight > headerSubmenuHeight){

    headerSubmenuHeight = item.offsetHeight;
  }
});


let headerTotal = `${headerHeight + headerSubmenuHeight + 15}px`;


headerMenu.forEach(tem=>{
  tem.addEventListener('mouseover',()=>{

      header.style.height = headerTotal;
  });

  tem.addEventListener('mouseout',()=>{
      header.style.height = `${headerHeight}px`;
  });	
});

window.addEventListener('scroll',()=>{
  
  if(window.scrollY > headerBottomOST){
      header.classList.add('sticky');
  제
  }else{
      header.classList.remove('sticky');
  }
});








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
    autoplay: {
      delay: 3000,
    },
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



  //Banner Slide

  $(function () {
    $(".Slide_Choice").bxSlider({
      minSlides: 3,
      maxSlides: 6,
      slideWidth: 800,
      slideMargin: 15,
      ticker: true,
      speed: 100000,
    });
  });


//   sec2


$('.sec2_slides').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  slideMargin: 15,
  arrows: false
});

// sec3

const sec3swiper = new Swiper('.sec3ab', {
  slidesPerView: 6,
  
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
        
    400: {
      slidesPerView: 4,  //브라우저가 768보다 클 때
    },
    1024: {
      slidesPerView: 6,  //브라우저가 1024보다 클 때
    },
  },
});



 $('.slidebtn a').click(function(e){
  e.preventDefault();
  let target = $(this).attr('data-index');
  sec3swiper.slideTo(target);
 });





  // sc4




  // sec5
  $('.slider_box').imagesLoaded( function() {
    // images have loaded
    $(".sec5_slider1").bxSlider({
      mode: 'vertical',
      ticker: true,
      slideWidth: 500,
      slideMargin: 15,
      minSlides: 3,
      maxSlides: 3,
      speed: 80000,
      autoDirection: 'prev'
    });
  
  
    $(".sec5_slider2").bxSlider({
      mode: 'vertical',
      ticker: true,
      slideWidth: 500,
      slideMargin: 15,
      minSlides: 3,
      maxSlides: 3,
      speed: 80000
    });
  });


  $(window).resize(function(){

  })

function footerDf(){
  let screenWidth = $(window).width();
  if(screenWidth <= 770){
    $('footer').removeClass('d-flex');
    $('footer > div').removeClass('d-flex');
  }else{
    $('footer').addClass('d-flex');
    $('footer > div').addClass('d-flex');
  }
}

footerDf();

function load(){
  let size = $(window).width();
  if (size <= 770){
    document.Location.reload();
  }else{
    document.Location.reload();
  }
}