
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

// --------------------------


const time_table = new Swiper('.time_table', {
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter:true
    },
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.next',
      prevEl: '.prev'
    } 
  });