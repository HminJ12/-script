$(function(){
  var reqID
  function fnScrollMotion(){
    var scrT = $(window).scrollTop()
    var winH = $(window).height()
    
    //ex1
    var ex1Top = $(`.ex1`).offset().top
    if(scrT >= ex1Top - winH * 0.5) $(`.ex1`).addClass(`active`)
    else $(`.ex1`).removeClass(`active`)
    
    //ex2
    var ex2Top = $(`.ex2`).offset().top
    if(scrT >= ex2Top) $(`.ex2`).addClass(`active`)
    else $(`.ex2`).removeClass(`active`)

    //ex3
    $(`.ex3 div`).each(function(){
      var offt = $(this).offset().top
      if(scrT >= offt - winH*0.8) $(this).addClass(`active`)
      else $(this).removeClass(`active`)
      
    }) //each

    //ex4
    $(`.ex4 > div`).each(function(){
      var offt = $(this).offset().top
      if(scrT >= offt - winH*0.8) $(this).addClass(`active`)
      else $(this).removeClass(`active`)
    })

    //ex5
    $(`.ex5 span`).each(function(){
      var offt = $(this).offset().top
      if(scrT >= offt - winH*0.8) $(this).addClass(`active`)
      else $(this).removeClass(`active`)
    })

    //ex6
    $(`.ex6 > div`).each(function(){
      var offt = $(this).offset().top
      if(scrT >= offt - winH*0.8) $(this).addClass(`active`)
      else $(this).removeClass(`active`)
    })


  } //fn

  fnScrollMotion() //motion 효과 바로 출력

  $(window).scroll(function(){
    reqID = requestAnimationFrame(fnScrollMotion)
  }).resize(function(){
    reqID = requestAnimationFrame(fnScrollMotion)
  })



}) //ready
