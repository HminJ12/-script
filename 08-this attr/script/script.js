$(function(){

  function fn1(el){
    var 숫자 = el.val()
    var 알파벳 = el.attr('data-n')
    alert(`${숫자} , ${알파벳}`)
  }

  $('.ex1 button').click(function(){
    fn1($(this))
  })

  function fn2(el,con){
    $(`.ex2 .con${con} button`).not(el).css({'color':'#000'})
    el.css({'color':'#F00'})
  }

  $('.ex2 button').click(function(){
    var con = $(this).val()
    fn2($(this), con)
  })


  function fn3(el){
    var con = el.attr('data-con')
    el.css({'color':'red'})
    $(`.ex3 .con${con} span`).not(el).css({'color':'blue'})
  }

  $('.ex3 span').click(function(){
    fn3($(this))
  })

  function fn4(con,n,bg){
    $(`.ex4 .con${con} .box${n}`).css({'background':bg})
    $(`.ex4 .con${con} div`).not($(`.box${n}`)).css({'background':'none'})
    
  }

  $('.ex4 .con1 button').click(function(){
    var n = $(this).text() //클릭한 버튼의 번호
    var bg = $(`.ex4 .con1 .box${n}`).attr('data-bg')
    fn4(1,n,bg)

  })

  $('.ex4 .con2 button').click(function(){
    var n = $(this).val()
    var bg = $(`.ex4 .con2 .box${n}`).text()
    fn4(2,n,bg)
  })
  

}) //ready