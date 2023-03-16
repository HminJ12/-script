$(function(){
  var req
  function fnScrollMotion(){
    var scr = $(window).scrollTop()
    var winHeight = $(window).height()

    $(`.box1`).each(function(){

    var offsetTop = $(this).offset().top //문서의 수직 위치, 고정값
    var boxHeight = $(this).innerHeight() //innerHeight는 padding까지 계산해줌

    if((scr >= offsetTop - winHeight * 0.7 + boxHeight) && (scr < offsetTop - winHeight * 0.3 + boxHeight) ){
      $(this).css({'background' : `red`})
    }else{
      $(this).css({'background' : `#CCC`})
    } 
    
    })
    //박스마다 offsetTop 거리와 박스 각자의 높이인 boxHeight이 다르기 때문에 each이벤트에 들어가야 한다 
    //each는 순서, 차례가 바뀔 때마다 값이 달라지는 것들을 찾아야 한다


    // >= 이상이면 부터로 읽고 작다면 까지로 읽자

    /* var result = (200 <= scr)? `blue`:`red` 
    $(`.box1`).css({'background' : result}) */
    
    /* if(scr >= offsetTop){
      $(`.box1`).css({'background' : `blue`})
    }else{
      $(`.box1`).css({'background' : `red`})
    }
    */

    /* 
    if(scr + 200 >= offsetTop){
      $(`.box1`).css({'background' : `blue`})
    }else{
      $(`.box1`).css({'background' : `red`})
    }
    */

  }

  fnScrollMotion() //시작하자마자

  $(window).scroll(function(){
    req = requestAnimationFrame(fnScrollMotion) //최적화
    //웹브라우저에서 일어나는 scroll 이벤트

  }).resize(function(){
    
    req = requestAnimationFrame(fnScrollMotion)
  }) 

})