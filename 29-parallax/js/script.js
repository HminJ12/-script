$(function(){
  var req
  function parallax(){
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()
    var offTop = $(`.ex1`).offset().top
    var h = $(`.ex1`).innerHeight() //padding값까지 포함
    var meta = 0 + (scrTop - (offTop - winHeight*0.5 + h*0.5)) * -0.8
    
    if(meta < 0 ){meta=0}
    $(`.ex1 .car`).css({'transform':`translate(${meta}px)`})
    //최종값 + (스크롤거리 - (스크롤목적지))* 속도와방향
    //스크롤이 (스크롤목적지)여기까지 됐을 때 이 값(최종값)을 원한다
  }//fn

  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })


}) //ex1

$(function(){
  var req
  function parallax(){
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()
    var offTop = $(`.ex2`).offset().top
    var h = $(`.ex2`).innerHeight()
    //scroll의 실시간 변화량을 구해야 한다
    var meta = 50 + Math.abs(scrTop - (offTop - winHeight * 0.5 + h*0.5)) * -0.2
    
    $(`.ex2`).css({'border-radius':`${meta}%`})
  }//fn 스크롤 할수록 meta값이 커진다
  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })


}) //ex2

$(function(){
  var req
  function parallax(){
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()
    var offTop = $(`.ex3`).offset().top
    var h = $(`.ex3`).innerHeight()
    var meta = 1 + Math.abs(scrTop - (offTop - winHeight*0.5 + h*0.5)) * -0.002
    $(`.ex3`).css({'opacity':meta})
  }//fn
  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })


}) //ex3


$(function(){
  var req
  function parallax(){
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()

    $(`.ex4>div`).each(function(){
      var offTop = $(this).offset().top
      var h = $(this).innerHeight()
      var meta = 1 + Math.abs(scrTop - (offTop - winHeight*0.5 + h*0.5)) * -0.001
      if(meta < 0){meta = 0}
      $(this).children(`div`).css({'transform':`scale(${meta})`})
    })
    

  }//fn
  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })

  /* scale은 1로 if(0보다 작으면 안 된다) */

}) //ex4

$(function(){
  var req
  function parallax(){
    var scrTop = $(window).scrollTop()
    var winHeight = $(window).height()

  }//fn
  parallax()

  $(window).scroll(function(){
    req = requestAnimationFrame(parallax)
  }).resize(function(){
    req = requestAnimationFrame(parallax)
  })


})