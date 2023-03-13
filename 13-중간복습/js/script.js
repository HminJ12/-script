$(function(){

  function fn1(num){
    var num1 = parseInt($(`.ex1 .cont${num} .num1`).val())
    var num2 = parseInt($('.ex1 .cont'+num+' .num2').val())
    var fn = num1 + num2
    $('.ex1 .cont'+num+' p').text(fn)
  }

  $('.ex1 button').click(function(){
    var n = $(this).val()
    fn1(n)
    /* 또는 fn1($(this).val()) */
   })


    function fn2(el){
      var 컨테이너번호 = el.parent().attr('data-cont') //this - 선택이 바뀐 애
      var 상품가격 = parseInt($(`.ex2 .cont${컨테이너번호} input[type=radio]:checked`).val())
      var 상품갯수 = parseInt($(`.ex2 .cont${컨테이너번호} input[type=number]`).val())
      var 총가격 = 상품갯수 * 상품가격
      $(`.ex2 .cont${컨테이너번호} p`).text(`${총가격}원`)
    }

  $(`.ex2 input[type=radio]`).change(function(){
    fn2($(this))
    /* 
    var 컨테이너번호 = $(this).parent().attr('data-cont') //this - 선택이 바뀐 애
    var 상품가격 = parseInt($(`.ex2 .cont${컨테이너번호} input[type=radio]:checked`).val())
    var 상품갯수 = parseInt($(`.ex2 .cont${컨테이너번호} input[type=number]`).val())
    var 총가격 = 상품갯수 * 상품가격
    $(`.ex2 .cont${컨테이너번호} p`).text(총가격) 
    총가격 값을 구하기 위해 상품가격값과 갯수값이 필요하다 
    이벤트는 다르지만 결국 할일은 똑같기 때문에 함수는 1개만 사용
    */ 
    //$(`.ex2 input[type=radio]:checked`) radio 버튼이 두개여서 안 된다
  })

  $(`.ex2 input[type=number]`).bind('input',function(){
    fn2($(this))
    /* 
    var 컨테이너번호 = $(this).parent().attr('data-cont')
    var 상품가격 = parseInt($(`.ex2 .cont${컨테이너번호} input[type=radio]:checked`).val())
    var 상품갯수 = parseInt($(`.ex2 .cont${컨테이너번호} input[type=number]`).val())
    var 총가격 = 상품갯수 * 상품가격
    $(`.ex2 .cont${컨테이너번호} p`).text(총가격) 
    */
  })

  $(`.ex3 div`).click(function(){
    $(this).siblings('div').css({'background':'none'})
    $(this).css({'background':'red'})
  })

  $(`.ex4 button`).click(function(){
    var 출력 = $(this).text() //button에 있는 숫자는 글자라 text로 가져온다
    $(`.ex4 .output`).text(출력)
    //클릭한 버튼의 번호를 알아낸다
    //번호를 output에 출력한다
  })
  
  $(`.ex5 button`).click(function(){
    var n = $(this).val()
    $(`.ex5 .output`).text(n)
    //클릭한 버튼의 번호를 value속성에서 알아낸다
    //번호를 output에 출력한다
  })

  $(`.ex6 div`).click(function(){
    var bg = $(this).attr('data-bg')
    $(`.ex6 .output`).text(bg)
    //클릭한 div의 data-bg속성에 기록된 색상을 알아낸다
    //색상을 output에 출력한다
  })
  
  $(`.ex7 div`).click(function(){
    //모든 div 초기색상으로 변경
    //클릭한 div의 css속성의 background를 red로 변경
    $(`.ex7 div`).css({'background':'none'})
    $(this).css({'background':'red'})
  })

  $(`.ex8 div`).click(function(){
    $(`.ex8 div`).css({'background':'none'})
    var bg = $(this).attr('data-bg')
    $(this).css({'background':bg})
    //모든 div를 원래색으로 초기화
    //클릭한 div에서 data-bg속성값을 알아낸다
    //클릭한 div를 data-bg속성값으로 배경색을 바꾼다
  })

  $(`.ex9 button`).click(function(){
    //모든 div를 원래대로 초기화
    //클릭한 버튼의 번호를 value 속성에서 알아낸다
    //번호에 해당하는 box를 찾아서 빨갛게 변하게 한다
    $(`.ex9 div`).css({'background':'none'})
    var n = $(this).val()
    $(`.ex9 .box${n}`).css({'background':'red'})
  })

  $(`.ex10 button`).click(function(){
    //모든 div를 원래대로 초기화
    //클릭한 버튼의 번호를 data-n에서 알아낸다
    //번호에 해당하는 색상 value값을 알아낸다
    //번호에 해당하는 box를 찾아서 해당 색을 변하게 한다
    $(`.ex10 div`).css({'background':'none'})
    var n = $(this).attr('data-n')
    var bg = $(this).val()
    $(`.ex10 .box${n}`).css({'background':bg})
    
  })

  $(`.ex11 button`).click(function(){
    //모든 div를 원래대로 초기화
    //클릭한 번호의 value속성값을 알아낸다
    //해당하는 box의 색상 data-bg값을 알아낸다
    //번호에 해당하는 box를 찾아서 해당 색을 변하게 한다
    $(`.ex11 div`).css({'background':'none'})
    var n = $(this).val()
    var bg = $(`.ex11 .box${n}`).attr('data-bg')
    $(`.ex11 .box${n}`).css({'background':bg})
  })

  $(`.ex12 input`).bind('input',function(){
    var n = $(this).val()
    $(this).siblings('.output').text(n)
  })

  $(`.ex13 input`).change(function(){
    //선택한 div를 제외하고 옆에를 원래대로 초기화
    //선택한 번호의 value속성값을 알아낸다
    //선택한 번호의 형제에서 해당하는 box의 색상 data-bg값을 알아낸다
    //선택한 번호에 해당하는 box를 찾아서 해당 색으로 변하게 한다
    $(this).siblings('div').css({'background':'none'})
    var n = $(this).val()
    var bg = $(this).siblings(`.box${n}`).attr('data-bg')
   
    $(this).siblings(`.box${n}`).css({'background':bg})
  })
}) //ready