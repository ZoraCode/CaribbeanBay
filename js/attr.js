
let sec3marca = $('.sec3 .marca_list'),
    sec3marcaText = $('.sec3 .marca_text');
let sec3whild = $('.sec3 .whild'),
    sec3whildText = $('.sec3 .whild_text');
let sec3spa = $('.sec3 .spa'),
    sec3spaText1 = $('.sec3 .spa_text1'),
    sec3spaText2 = $('.sec3 .spa_text2');
let sec3pool = $('.sec3 .pool'),
    sec3poolText1 = $('.sec3 .pool_text1'),
    sec3poolText2 = $('.sec3 .pool_text2');

$(window).scroll(function(){
  
  let sec3marcaSCT = $(this).scrollTop();
  console.log(sec3marcaSCT);
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



function sec3_upimg() {
  let screenWidth = $(window).width();
  if (screenWidth <= 970) {
    $('.marca_a').attr('src', 'img/tab/sec3_ta_a.png');
    $('.marca_b').attr('src', 'img/tab/sec3_ta_b.png');
    $('.marca_c').attr('src', 'img/tab/sec3_ta_c.png');
  }else{
    $('.marca_a').attr('src', 'img/sec3_Marca_A.png');
    $('.marca_b').attr('src', 'img/sec3_Marca_B.png');
    $('.marca_c').attr('src', 'img/sec3_Marca_C.png');
}
}

function sec3updateImage() {
  let screenWidth = $(window).width();
  if (screenWidth <= 768) {

    $('.whild_b').attr('src', 'img/tab/sec3_ta_f.png');
    $('.whild_a').attr('src', 'img/tab/sec3_ta_d.png');
    $('.whild_d').attr('src', 'img/tab/sec3_ta_g.png');
    $('.whild_c').attr('src', 'img/tab/sec3_ta_e.png');
    $('.zone_a').attr('src', 'img/tab/sec3_ta_h.png');
    $('.zone_b').attr('src', 'img/tab/sec3_ta_i.png');
    $('.zone_c').attr('src', 'img/tab/sec3_ta_j.png');
    $('.spa_a').attr('src', 'img/tab/sec3_ta_k.png');
    $('.spa_b').attr('src', 'img/tab/sec3_ta_l.png');
    $('.dj_a').attr('src', 'img/tab/sec3_ta_o.png');
    $('.dj_b').attr('src', 'img/tab/sec3_ta_m.png');
    $('.dj_c').attr('src', 'img/tab/sec3_ta_n.png');

    $('.sec3 .content').css('display','none');
    $('.sec3 br').css('display','none');

    
  } else {
    $('.marca_a').attr('src', 'img/sec3_Marca_A.png');
    $('.marca_b').attr('src', 'img/sec3_Marca_B.png');
    $('.marca_c').attr('src', 'img/sec3_Marca_C.png');
    $('.whild_b').attr('src', 'img/sec_3Whild_B.png');
    $('.whild_a').attr('src', 'img/sec_3Whild_A.png');
    $('.whild_d').attr('src', 'img/sec_3Whild_D.png');
    $('.whild_c').attr('src', 'img/sec_3Whild_C.png');
    $('.zone_a').attr('src', 'img/sec3_Photo_Zone_A.png');
    $('.zone_b').attr('src', 'img/Sec3_Photo_B.png');
    $('.zone_c').attr('src', 'img/sec3_Photo_Zone_C.png');
    $('.spa_a').attr('src', 'img/sec3_Cave_Spa.png');
    $('.spa_b').attr('src', 'img/sec3_Cave Spa_Back.png');
    $('.dj_a').attr('src', 'img/sec3_DJ_A.png');
    $('.dj_b').attr('src', 'img/sec3_DJ_B.png');
    $('.dj_c').attr('src', 'img/sec3_DJ_C.png');

    $('.sec3 .content').css('display','block');
  }
}


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
