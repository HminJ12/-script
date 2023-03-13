$(function(){
  
  $(`.ex1 .btn1`).click(function(){
    var n = 1
    var a = n ++
    $(`.ex1 .output`).text(a)
  })

  $(`.ex1 .btn2`).click(function(){
    var n = 1
    var a = ++ n
    $(`.ex1 .output`).text(a)
  })

  function fn(){
    var n = 1
    return ++ n
  }
  $(`.ex1 .btn3`).click(function(){
    
    $(`.ex1 .output`).text(fn())
  })

}) //ready

$(function(){
  var n = 10 
  //.output 하고 일치해야함 초기값은 화면하고 일치해야 함
  //초기값을 어디서 할지 정한다
  
  $(`.ex2 button`).click(function(){
    
    $(`.ex2 .output`).text(++n)
  })

}) //ready


$(function(){
  var n = 1

  $(`.ex3 button`).click(function(){
    ++n
    if(n > 5) n = 5
    $(`.ex3 .output`).text(n)
  })
}) //ready

$(function(){
  
  //문제제출
  function fnSet(exNum){
    var rand
    rand = Math.floor(Math.random()*10)
    $(`.ex4_${exNum} .num1`).val(rand)
    rand = Math.floor(Math.random()*10)
    $(`.ex4_${exNum} .num2`).val(rand)
  }

  fnSet(1)
  fnSet(2)

  /*  var rand
  rand = Math.floor(Math.random()*10)
  $(`.ex4_2 .num1`).val(rand)
  rand = Math.floor(Math.random()*10)
  $(`.ex4_2 .num2`).val(rand) */

  //점수체크
  var point //함수와 클릭했을 때 둘 다 변수를 사용하기 때문에 밖에다 변수를 만든다

  function fnCheck(exNum){
    var num1 = parseInt($(`.ex4_${exNum} .num1`).val())
    var num2 = parseInt($(`.ex4_${exNum} .num2`).val())
    var num3 = parseInt($(`.ex4_${exNum} .num3`).val())
    if(num3 === num1 + num2){
      ++ point
    }


  }

  $(`.ex4 button`).click(function(){
    //var point = 0 , 0부터 시작해야 해서, 초기화, 다시 눌렀을 때 다시 점수를 증감해야 해서
    point = 0
    fnCheck(1)
    fnCheck(2)

    $(`.ex4 .output`).text(point)


  })


}) //ready 화면이 출력되는 순간
//Math.floor 소수점을 버린다

$(function(){

  function fnSet(exNum){
    var rand
    rand = Math.floor(Math.random()*10)
    $(`.ex5_${exNum} .num1`).val(rand)
    rand = Math.floor(Math.random()*10)
    $(`.ex5_${exNum} .num2`).val(rand)
  }

  fnSet(1)
  fnSet(2)
  //점수체크

  function fnCheck(exNum){
    var num1 = parseInt($(`.ex5_${exNum} .num1`).val())
    var num2 = parseInt($(`.ex5_${exNum} .num2`).val())
    var num3 = parseInt($(`.ex5_${exNum} .num3`).val())
    var result = (num3 === num1 + num2)? 1:0
    return result
  }

  $(`.ex5 button`).click(function(){
    //var result = fnCheck(1)+fnCheck(2)+fnCheck(3)
    var result = 0

    result += fnCheck(1) //정답 0 1 증가
    result += fnCheck(2) //오답 1 0 증가
    result += fnCheck(3) //정답 1 1 증가
    $(`.ex5 .output`).text(result)
    //반복문하면 사용 불가

  })


})



/* ex6 carousel 회전목마 */
$(function(){
  var n = 1

  function fnChange(){
    if(n > 5) n = 1
    if(n < 1) n = 5
    $(`.ex6 img`).hide()
    $(`.img${n}`).show()
    $(`.ex6 .indicator button`).removeClass('active')
    $(`.btn${n}`).addClass('active')
  }

  $(`.next`).click(function(){
    n ++
    fnChange()
  })

  $(`.prev`).click(function(){
    n --
    fnChange()
  })

  $(`.indicator button`).click(function(){
    n = parseInt($(this).text())
    fnChange()
  })
  
})

$(function(){
  var n = 0   
  $(`.ex7 button`).click(function(){
    
    //클릭한 버튼의 숫자
    var num = parseInt($(this).text())
    n += num
    /* n = n + num */
    
    $(`.ex7 .output`).append(`,${n}`)
  
  })

}) //.text() 내용을 지우고 새로 쓸 때 사용함, append는 이어쓰기

$(function(){
  var n = 0
  var a = 0
  $(`.ex8 button`).click(function(){
    n += ++a
    $(`.ex8 .output`).append(`,${n}`)
  })
})
/* n += a
a = (a += 1) */