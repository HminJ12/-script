$(function(){
    var reqID
  function fn(){
    var docH = $(document).innerHeight() //document 문서 높이
    var scrRange = docH - winH //scroll 가능 거리
    var scrRatio = scrT / scrRange //scroll 비율 
    
    $(`.scrollspy1 .progress`).css({'height':`${scrRatio*100}%`})
    $(`.scrollspy2 circle`).css({'offset-distance':`${scrRatio*100}%`})
    $(`.scrollspy2 path`).css({'stroke-dashoffset':`${1 - scrRatio}px`}) 
    //scrRatio:dashoffset, 1:0, 0.5:0.5, 0:1
  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

})