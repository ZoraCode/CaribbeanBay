

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
  slideMargin: 5,
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


// button
let topBtn = document.querySelector('.aside'),
    upGo = document.querySelector('.top_button'),
    topBtnOffset = document.querySelector('.sec1').offsetTop,
    topScroll = 0;

window.addEventListener('scroll',()=>{
  topScroll = window.scrollY; 
  if(topScroll > topBtnOffset - 60){
    topBtn.classList.add('active');
  } else{
    topBtn.classList.remove('active');
  }
});

upGo.addEventListener('click',()=>{
  window.scrollTo({
    left:0,
    top:0,
    behavior:'smooth'
  });
});






// popup


let popup = document.querySelector('.popup');
let popup_closeBtn = popup.querySelector('#close');
let popup_input = popup.querySelector('#daycheck');


popup.querySelector('.ppt').addEventListener('click',()=>{
  window.open('https://www.figma.com/file/XFGUZvuVHziJ0f2nk61xgr/Untitled?type=design&node-id=0-1&mode=design', '_blank');
});

popup.querySelector('.git').addEventListener('click',()=>{
  window.open('https://github.com/ZoraCode/CaribbeanBay', '_blank');
});

// setCookie('starbucks','popup',1)
//쿠키 만들기
//name - 쿠키이름 / value - 쿠키값 / day - 쿠키기한
function setCookie(name, value, day){
  //day - 오늘날짜부터 정해진 기한까지 설정
  let date = new Date();
  date.setDate(date.getDate() + day);
  
  document.cookie = `${name}=${value};expires= ${date.toUTCString()}`;
}//setCookie func


//쿠키 있는지 확인해서 popup 보일지 결정
function cookieCheck(name){
  //존재하는 쿠키들을 배열로 만들기
  let cookieArr = document.cookie.split(';');
  let visited = false;

  //쿠키 배열 중
  for(let cookie of cookieArr){
    //지정한 쿠키가 있으면
    if(cookie.search(name) > -1){
      //visited를 true로 변경하기(+ dialog 숨기기)
      visited = true;
      break;
    }
  }

  //만약 visited의 값이 false면 dialog가 보인다
  if(!visited){
    popup.setAttribute('open','');
  }

}//cookieCheck func
cookieCheck('starbucks');


//close클릭하면
popup_closeBtn.addEventListener('click',()=>{
  //'오늘안보기'의 체크 유무에 상관없이 팝업을 닫는다
  popup.removeAttribute('open');

  //만약 '오늘안보기'에 체크 되어있다면, 쿠키만들고(기한 1일) 아니면 제거
  if(popup_input.checked){
    setCookie('starbucks','popup',1)
  } else{
    setCookie('starbucks','popup',-1)
  }
});//closeBtn click
/* popup */