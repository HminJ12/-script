$(function(){
  var reqID
  function fn(){
    $(`li`).each(function(){
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
      var metaR = 50 + Math.abs(scrT - (offT - winH * 0.5 + elH * 0.5)) * -0.1
      var metaS = 1 + Math.abs(scrT - (offT - winH * 0.5 + elH * 0.5)) * -0.001
      if(metaS < 0) {metaS = 0} 
      $(this).children(`figure`).css({
        'border-radius':`${metaR}%`,
        'transform':`scale(${metaS})`
      })
    }) //each
  } //fn

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

})