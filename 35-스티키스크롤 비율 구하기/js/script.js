$(function(){
  var reqID
  function fn(){
    var stickyStart = $(`.sticky-container`).offset().top
    var stickyEnd = stickyStart + $(`.sticky-container`).innerHeight() - winH
    var stickyRange = stickyEnd - stickyStart
    var stickyRatio = (scrT - stickyStart) / stickyRange
    //0과 1 사이로 만들어야 해서 숫자가 0보다 작거나, 1보다 크게 되면 막아야 한다
    if(stickyRatio < 0) stickyRatio = 0
    if(stickyRatio > 1) stickyRatio = 1
    //ratio : imgNum  0:1, 1:36 -> parseInt(ratio * 35) + 1
    var n = parseInt(stickyRatio * 35) + 1
    $(`.sticky .car`).hide()
    $(`.sticky .car${n}`).show()

  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })
})