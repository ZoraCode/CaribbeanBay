

// header

let header = document.querySelector('.bottom_menu'),
headerMenu = document.querySelectorAll('.bottom_menu .menu_list li'),
headerSubmenu = document.querySelectorAll('.bottom_menu .menu_list ul'),
headerHeight = header.offsetHeight;
let headerBottomOST = header.offsetTop;
let headerSubmenuHeight = 0;

// ul 리스트를 아이템에 담고
headerSubmenu.forEach(item=>{
// 만약 ul높이가 0(서브메뉴높이)보다 크면
  if(item.offsetHeight > headerSubmenuHeight){
// 서브메뉴 높이는 ul 리스트의 높이
    headerSubmenuHeight = item.offsetHeight;
  }
});

// console.log(headerSubmenuHeight);
// header총값 = 바텀메뉴OST + ul메뉴크기 + px
let headerTotal = `${headerHeight + headerSubmenuHeight + 15}px`;

//바텀메뉴에 마우스를 올리면 할일,일어날 일
headerMenu.forEach(tem=>{
  tem.addEventListener('mouseover',()=>{
    //css 헤더의 높이가 header총값으로 변경
      header.style.height = headerTotal;
  });
    //마우스가 나가면 바텀메뉴OST로 돌아옴
  tem.addEventListener('mouseout',()=>{
      header.style.height = `${headerHeight}px`;
  });	
});
//스크롤이 생기면 할일
window.addEventListener('scroll',()=>{
  //만약 스크롤양이 헤더 높이보다 크면 header 클래스에 sticky 추가
  if(window.scrollY > headerBottomOST){
      header.classList.add('sticky');
  //아니라면header 클래스에 sticky 삭제
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

 });

 $('.slidebtn a').click(function(e){
  e.preventDefault();
  let target = $(this).attr('data-index');
  sec3swiper.slideTo(target);
 });
//  sec3swiper.slideTo(6);


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


