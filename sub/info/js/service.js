

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


// 탭메뉴
let tabColor = $('.color'),
tabList = $('.tab li'),
tabs = $('.convenient li');

tabList.on('click', function(e) {
e.preventDefault();
  colorspace = $(this).position().left,
  colormove = $(this).width();

  tabColor.css({
  left: colorspace + 'px',
  width: colormove + 'px'
  });
  //ul을 클릭하면 모든것에 active 지우고 클릭한 그것만 추가
  tabList.children('a').removeClass('active');
  $(this).children('a').addClass('active');

  tabs.hide();
  tabs.eq($(this).index()).show();

  console.log(tabs);
});


function updateImage() {
  let screenWidth = $(window).width();
  if (screenWidth <= 705) {

    $('.tab1 .img_list img').attr('src', '../img/Ntab_img_a.png');
    $('.tab2 .img_list img').attr('src', '../img/Ntab_img_a.png');
    $('.tab3 .img_list img').attr('src', '../img/Ntab_img_a.png');
    $('.tab4 .img_list img').attr('src', '../img/Ntab_img_a.png');
    $('.tab5 .img_list img').attr('src', '../img/Ntab_img_a.png');
    $('.tab6 .img_list img').attr('src', '../img/Ntab_img_a.png');
    
  } else {

    $('.tab1 .img_list img').attr('src', '../img/tab_img_a.png');
    $('.tab2 .img_list img').attr('src', '../img/tab_img_a.png');
    $('.tab3 .img_list img').attr('src', '../img/tab_img_a.png');
    $('.tab4 .img_list img').attr('src', '../img/tab_img_a.png');
    $('.tab5 .img_list img').attr('src', '../img/tab_img_a.png');
    $('.tab6 .img_list img').attr('src', '../img/tab_img_a.png');

  }
}
updateImage();

$(window).resize(function() {
  updateImage();
});

/* Java Script로 한 것
let tabColor = document.querySelector('.color'),
    tabList = document.querySelectorAll('.tab li'),
    tabListA = document.querySelectorAll('.tab li a'),
    tabs = document.querySelectorAll('.convenient > li');


tabList.forEach((tem,idx)=>{
  tem.addEventListener('click',(e)=>{
    e.preventDefault();

    let colorspace = e.target.offsetLeft,
        colormove = e.target.offsetWidth;

    tabColor.style.left = colorspace+'px';
    tabColor.style.width = colormove+'px';

    for(is of tabs){
      is.style.display = 'none';
    }
    tabs[idx].style.display = 'block';
  });
});


tabs.addEventListener('click',()=>{
  tabs.classList.add('avtive');

});
*/

let list = $('.service .list');
let listP = $('.service .list span p');

list.each(function() {
  let listEffect = $(this).find('div[class^="service_item"]');
  
  listEffect.mouseenter(function() {
    $(this).closest('.list').addClass('active');
    listP.addClass('active');
  });

  listEffect.mouseleave(function() {
    $(this).closest('.list').removeClass('active');
    listP.removeClass('active');
  });
});

// javascript로 만든 것

/* 

let list = document.querySelector('.service .list'),
    listEffect = list.querySelectorAll('div[class^="service_item"]');

  listEffect.forEach(item=>{
  item.addEventListener('mouseenter',()=>{
    list.classList.add('active');

  });
  item.addEventListener('mouseleave',()=>{
    list.classList.remove('active');

  });
});

*/