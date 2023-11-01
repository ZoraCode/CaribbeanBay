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


let sec3marca = $('.sec3 .marca'),
    sec3marcaText = $('.sec3 .marca_text');
let sec3whild = $('.sec3 .whild'),
    sec3whildText = $('.sec3 .whild_text');
let sec3spa = $('.sec3 .spa'),
    sec3spaText1 = $('.sec3 .spa_text1'),
    sec3spaText2 = $('.sec3 .spa_text2');
let sec3pool = $('.sec3 .pool'),
    sec3poolText1 = $('.sec3 .pool_text1'),
    sec3poolText2 = $('.sec3 .pool_text2');


    $('.sec3').imagesLoaded( function() {
      // images have loaded

    

$(window).scroll(function(){
  
  let sec3marcaSCT = $(this).scrollTop();
// marca
  sec3marca.each(function(){
    if($(this).offset().top - 400 <= sec3marcaSCT){
      $(this).addClass('move');
    }
  });
  sec3marcaText.each(function(){
    if($(this).offset().top - 400 <= sec3marcaSCT){
      $(this).addClass('move');
    }
    });
// whild
    let sec3whildSCT = $(this).scrollTop();
  
    sec3whild.each(function(){
      if($(this).offset().top - 400 <= sec3whildSCT){
        $(this).addClass('move');
      }
    });
    sec3whildText.each(function(){
      if($(this).offset().top - 400 <= sec3whildSCT){
        $(this).addClass('move');
      }
    });
// spa
    let sec3spaSCT = $(this).scrollTop();

    sec3spa.each(function(){
      if($(this).offset().top - 400 <= sec3spaSCT){
        $(this).addClass('move');
      }
    });
    sec3spaText1.each(function(){
      if($(this).offset().top - 400 <= sec3spaSCT){
        $(this).addClass('move');
      }
    });
    sec3spaText2.each(function(){
      if($(this).offset().top - 400 <= sec3spaSCT){
        $(this).addClass('move');
      }
    });
// pool
    let sec3poolSCT = $(this).scrollTop();

    sec3pool.each(function(){
      if($(this).offset().top - 400 <= sec3poolSCT){
        $(this).addClass('move');
      }
    });
    sec3poolText1.each(function(){
      if($(this).offset().top - 400 <= sec3poolSCT){
        $(this).addClass('move');
      }
    });
    sec3poolText2.each(function(){
      if($(this).offset().top - 400 <= sec3poolSCT){
        $(this).addClass('move');
      }
    });
  // sec3 애니메이션 종료
});

function sec3updateImage() {
  let screenWidth = $(window).width();
  if (screenWidth <= 768) {


    $('.sec3 .content').css('display','none');
    $('.sec3 br').css('display','none');

    
  } else {


    $('.sec3 .content').css('display','block');
  }
}

});

// 480스크립트

function toggleContent() {
  
 
  let screenWidth = $(window).width();
  
  if(screenWidth <= 480) {
      $('.pc').hide();
      $('.mobile').show();
    } 
  else{
      $('.pc').show();
      $('.mobile').hide();
    }
  }
  toggleContent();


  $(window).resize(function() { 

  toggleContent();

  });

sec3updateImage();

$(window).resize(function() {
  sec3updateImage();
  sec3_upimg();
});



function sec3rotateSlider() {
  const activeSlide = $('.slider-item.active');
  const nextSlide = activeSlide.next();

  if (nextSlide.length === 0) {
    $('.slider-item').first().addClass('active');
  } else {
    nextSlide.addClass('active');
  }
  activeSlide.removeClass('active');
}
setInterval(sec3rotateSlider, 3000);
