
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


let pick = $('.pick');

$(window).scroll(function(){

    let pickSCT = $(this).scrollTop();
  
    pick.each(function(){
      if($(this).offset().top - 400 <= pickSCT){
        $(this).addClass('move');
      }
    });
});

let locker = $('.locker');

$(window).scroll(function(){

    let lockerkSCT = $(this).scrollTop();
  
    locker.each(function(){
      if($(this).offset().top - 400 <= lockerkSCT){
        $(this).addClass('move');
      }
    });
});

let coin = $('.coin');

$(window).scroll(function(){

    let coinSCT = $(this).scrollTop();
  
    coin.each(function(){
      if($(this).offset().top - 400 <= coinSCT){
        $(this).addClass('move');
      }
    });
});


let room = $('.room');

$(window).scroll(function(){

    let roomSCT = $(this).scrollTop();
  
    room.each(function(){
      if($(this).offset().top - 400 <= roomSCT){
        $(this).addClass('move');
      }
    });
});

let gest = $('.gest');

$(window).scroll(function(){

    let gestSCT = $(this).scrollTop();
  
    gest.each(function(){
      if($(this).offset().top - 400 <= gestSCT){
        $(this).addClass('move');
      }
    });
});

let surv = $('.surv');

$(window).scroll(function(){

    let survSCT = $(this).scrollTop();
  
    surv.each(function(){
      if($(this).offset().top - 400 <= survSCT){
        $(this).addClass('move');
      }
    });
});


function updateImage() {
  let screenWidth = $(window).width();
  if (screenWidth <= 768) {

    $('.line .list li:first-child img').attr('src', '../img/marca_aa.png');
    $('.line .list li:nth-child(2) img').attr('src', '../img/marca_dd.png');
    $('.line .list li:nth-child(3) img').attr('src', '../img/marca_ee.png');

    
  } else {

    $('.line .list li:first-child img').attr('src', '../img/marca_a.png');
    $('.line .list li:nth-child(2) img').attr('src', '../img/marca_d.png');
    $('.line .list li:nth-child(3) img').attr('src', '../img/marca_e.png');

  }
}
