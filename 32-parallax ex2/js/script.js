//50% 보다 커지면 안 된다
//스크롤이  left, right width가 0이 되어야 한다
//50 닫힌거 열린 게 0
//초기값 + 절대값(스크롤위치 - (스크롤목적지)) * 양수
$(function(){
  var reqID
  function fn(){
    var offT = $(`section`).offset().top
    var meta = 0 + Math.abs(scrT - (offT)) * 0.1
    if(meta > 50) meta = 50

    if(window.matchMedia(`screen and (min-width:700px)`).matches){
      $(`div`).css({
        'width':`${meta}%`,
        'height':`100%`
      })
    }else{
      $(`div`).css({
        'width':`100%`,
        'height':`${meta}%`
      })
    }

  }
  //width는 0 이하 값이 없다
  
  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

})