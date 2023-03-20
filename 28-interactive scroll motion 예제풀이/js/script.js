$(function(){
  var reqID
  function fn(){
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()
    $(`li`).each(function(){
      var offTop = $(this).offset().top
      if(scrTop >= offTop - winHeight * 0.8){
        $(this).addClass(`active`)
      }else{
        $(this).removeClass(`active`)
      }
    }) //each
  } //fn

  fn()

  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

}) //ready