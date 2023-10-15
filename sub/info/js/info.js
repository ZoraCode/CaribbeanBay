

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
