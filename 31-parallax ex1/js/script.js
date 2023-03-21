$(function(){
  var reqID
  function fn(){
    $(`.ex1 li`).each(function(){
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
      if(scrT >= offT - winH * 0.8) $(this).addClass(`active`)
      else $(this).removeClass(`active`)

      var meta = 50 + Math.abs(scrT - (offT - winH * 0.5 + elH * 0.5)) * -0.1
      $(this).find(`img`).css({'border-radius':`${meta}%`})
    }) //each
  } //fn

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

})