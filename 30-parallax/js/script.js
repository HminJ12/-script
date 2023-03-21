$(function(){
  var reqID
  function fn(){
    //조건에 따라서 한다 조건문 필요
    $(`.ex1 li`).each(function(){
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
      //scroll motion
      if(scrT >= offT - winH * 0.8) $(this).addClass(`active`)
      else $(this).removeClass(`active`)
      
      //parallax
      var meta = 1 + (scrT - Math.abs(offT - winH * 0.5 + elH * 0.5)) * -0.001
      //조금씩 변해라
      if(meta < 0) meta = 0
      $(this).find(`img`).css({'transform':`scale(${meta})`})
    }) //each
  } //fn

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })

}) //ex1

$(function(){
  var reqID
  function fn(){
    $(`.ex2 li`).each(function(){
      var offT = $(this).offset().top
      var elH = $(this).innerHeight()
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
  
}) //ex2

$(function(){
  var reqID
  function fn(){

  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })
  
})

$(function(){
  var reqID
  function fn(){

  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })
  
})

$(function(){
  var reqID
  function fn(){

  }

  fn()
  $(window).scroll(function(){
    reqID = requestAnimationFrame(fn)
  }).resize(function(){
    reqID = requestAnimationFrame(fn)
  })
  
})