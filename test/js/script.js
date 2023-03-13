$(function(){

  $('.ex1 button').click(function(){
  var n = $(this).text()
  $(`.ex1 .output`).text(n)
  })

  $(`.ex2 button`).click(function(){
    var n = $(this).val()
    $(`.ex2 .output`).text(n)
  })

  $(`.ex3 div`).click(function(){
    var bg = $(this).attr('data-bg')
    $(`.ex3 .output`).text(bg)
  })

  $(`.ex4 div`).click(function(){
    $(`.ex4 div`).css({'background':'none'})
    $(this).css({'background':'red'})
  })

  $(`.ex5 div`).click(function(){
    $(`.ex5 div`).css({'background':'none'})
    var bg = $(this).attr('data-bg')
    $(this).css({'background':bg})
  })

  $(`.ex6 button`).click(function(){
    $(`.ex6 div`).css({'background':'none'})
    var n = $(this).val()
    $(`.ex6 .box${n}`).css({'background':'red'})
  })

  $(`.ex7 button`).click(function(){
    $(`.ex7 div`).css({'background':'none'})
    var n = $(this).attr('data-n')
    var bg = $(this).val()
    $(`.ex7 .box${n}`).css({'background':bg})
  })

  $(`.ex8 button`).click(function(){
    $(`.ex8 div`).css({'background':'none'})
    var n = $(this).val()
    var bg = $(`.ex8 .box${n}`).attr('data-bg')
    $(`.ex8 .box${n}`).css({'background':bg})
  })


})