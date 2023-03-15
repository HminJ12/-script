$(function(){
  
  var raf //부여할 아이디
  function fnChange(){
    var scrTop = $(window).scrollTop() //문서가 올라간 거리
    var scrLeft = $(window).scrollLeft() //문서 좌우로 움직인 거리
    var winHeight = $(window).height()  //웹브라우저 높이
    var winWidth = $(window).width()  //웹브라우저 넓이
    
    $(`.banner`).each(function(){
      var 넓이곱 = parseFloat($(this).attr(`data-넓이곱`))
      var 높이곱 = parseFloat($(this).attr(`data-높이곱`))
      $(this).css({'top':`${scrTop + winHeight * 높이곱}px`,'left':`${scrLeft + winWidth * 넓이곱}px`})
    })


    /* $(`.banner1`).css({'top':`${scrTop}px`,'left':`${scrLeft}px`})
    $(`.banner2`).css({'top':`${scrTop}px`,'left':`${scrLeft + winWidth * 0.5}px`})
    $(`.banner3`).css({'top':`${scrTop}px`,'left':`${scrLeft + winWidth}px`})
    $(`.banner6`).css({'top':`${scrTop + winHeight * 0.5}px`,'left':`${scrLeft}px`})
    $(`.banner5`).css({'top':`${scrTop + winHeight * 0.5}px`,'left':`${scrLeft + winWidth * 0.5}px`})
    $(`.banner4`).css({'top':`${scrTop + winHeight * 0.5}px`,'left':`${scrLeft + winWidth}px`})
    $(`.banner7`).css({'top':`${scrTop + winHeight}px`,'left':`${scrLeft}px`})
    $(`.banner8`).css({'top':`${scrTop + winHeight}px`,'left':`${scrLeft + winWidth * 0.5}px`})
    $(`.banner9`).css({'top':`${scrTop + winHeight}px`,'left':`${scrLeft + winWidth}px`}) */
    //값이 자꾸 변경될 때 css속성 사용
    //문서 크기는 모르고 브라우저 크기를 알 수 있기 때문에 브라우저 크기에서 0.5를 곱한다(반인 50% 2를 나눈다)
  } //스크립트에서 css속성으로 위치를 옮기기 때문에 
    //css에서는 transform만 적용해서 위치를 변경함(translate사용)

  fnChange()

  $(window).scroll(function(){
    raf = requestAnimationFrame(fnChange) 
    //연속으로 발생하는 이벤트를 최적화 시킴 raf아이디 부여해야 함
    //requestAnimationFrame()안에 함수 fnChange()넣을 때는 함수fnChange의 ()괄호는 뺌
  }).resize(function(){
    raf = requestAnimationFrame(fnChange)
  }) 
  //사이즈가 바뀔 때마다
  //$(window)가 같기 때문에 이렇게 붙여서 사용 가능
  //window width

  //$(window) 웹브라우저를 window라고 함
  //scroll이 발생하는 동안 일어나는 일(scroll할 때)
  //scrollLeft는 좌우

  //창의 크기 변화나 스크롤 위치, 
  //웹사이트 접속하자마자 현재 창 위치와 창 크기,
  //브라우저 스크롤 크기에 따라서 예쁘게 바뀌어야 한다
  //그래서 총 3번 사용해야 함 -> 함수 fnChange()

}) //ready