$(function(){
  // >, < , >=, <=, ===, !==
  function fnSetNum(){
    return Math.floor(Math.random()*10)
  } //setNum

  function fnSetQuestion(contNum){
    $(`.ex1 .cont${contNum} .num1`).text(fnSetNum())
    $(`.ex1 .cont${contNum} .num2`).text(fnSetNum())
    $(`.ex1 .cont${contNum} .num3`).text(fnSetNum())

  } //fnSetQuestion
  
  fnSetQuestion(1)
  fnSetQuestion(2)
  
  function fn1(el){
    var n1 = parseInt(el.siblings('.num1').text())
    var n2 = parseInt(el.siblings('.num2').text())
    var n3 = parseInt(el.siblings('.num3').text())
    var input = parseInt(el.siblings('input').val())
    var oper = el.val()
    var calc = (oper === 'plus')? n1+n2+n3 : n1-n2-n3
    var cls = (calc === input)? 'green' : 'red' //삼항연산자 (조건)?참일때값:거짓일때값
    
    el.parent().css({'background' : cls})
  
    //el.parent().removeClass('red green')
    //el.parent().addClass(cls)
  }

  $('.ex1 button').click(function(){
    fn1($(this))
  })

  //19세 이하를 입력했을 때 구입을 못한다고 경고창이 뜬다.

  $('.ex2 button').click(function(){
    var num1 = parseInt($(this).siblings('input').val())
    var num2 = parseInt($('.ex2 p:nth-child(2) input:checked').val())
    var num3 = parseInt($('.ex2 p:first-child input').val())
    var total = num1 * num2
    $('.ex2 .output').text(`가격은 ${total}원`)
    var col = (19 <= num3)? 'green': 'red'
    $(this).siblings('.output').css({'color': col})

  })



})