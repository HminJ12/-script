//50% 보다 커지면 안 된다
//스크롤이  left, right width가 0이 되어야 한다
//50 닫힌거 
$(function(){
  var reqID
  function fn(){
    var offT = $(`section`).offset().top
    //초기값 + 절대값(스크롤위치 - (스크롤목적지)) * 양수
    var meta = 0 + Math.abs(scrT -(offT)) * 0.1
    if(meta > 50) {meta = 50}
    $(`div`).css({'width':`${meta}%`})  
    
  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

})