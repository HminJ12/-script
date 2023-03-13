$(function(){
  var n = 0
  $(`.ex1 button:not(.clr)`).click(function(){
    //n += 1 //n이 1 증가한다
    n += parseInt($(this).text()) //n이 클릭한 버튼 숫자 증가한다
    $(`.ex1 .output`).append(`, ${n}`) //쓴 내용에 계속 추가(이어붙이다)
  }) //clr 빼려고 

  $(`.ex1 .clr`).click(function(){
    // $(`.ex1 .output`).text('') text()안에 ''만 넣는 방법
    n = 0
    $(`.ex1 .output`).text('0')
    
  })

}) //증감연산 사용할 초기값 필요

$(function(){
  var n = 0
  var 증가량 = 0
  $(`.ex2 button:not(.clr)`).click(function(){
    // 증가량 ++ // n += 증가량 이렇게 해도 되고 증가량이 1씩 증가한다
    n += ++증가량  //증가량++은 사용불가
    $(`.ex2 .output`).append(`, ${n}`)
  })

  $(`.ex2 .clr`).click(function(){
    n = 0
    증가량 = 0
    $(`.ex2 .output`).text('0')
  })

}) //증감연산

$(function(){
  var n = 0
  var timeoutID 
  $(`.ex3 button`).click(function(){
    clearTimeout(timeoutID) //취소한다 여러번 눌러도 마지막 1번만 올라간다
    timeoutID = setTimeout(function(){
      $(`.ex3 .output`).text(++n)
    },1000) //1초가 지났을 때 할 일, 1000 밀리세컨드가 1초임 100은 0.1s 
    //setTimeout에 clear를 사용하기 위해 이름을 준다

  })

}) // ready ex3

$(function(){
  var n = 0
  var intervalID //비어있는 걸 만들어 놓고 
  $(`.ex4 .btn1`).click(function(){
    clearInterval(intervalID) //취소
    intervalID = setInterval(function(){
      $(`.ex4 .output`).text(++n)
    },1000) //1초마다 계속 증가

  })

  $(`.ex4 .btn2`).click(function(){
    clearInterval(intervalID) //취소
    intervalID = setInterval(function(){
      $(`.ex4 .output`).text(--n)
    },1000) //1초마다 감소
  })

  $(`.ex4 .btn3`).click(function(){
    clearInterval(intervalID) //증감 중지
  })

}) //ex4

$(function(){
  var n = 0

  var intervalID = setInterval(function(){
    $(`.ex5 .output`).text(++n)
  },1000)
  //바로 id를 지정해준다

  $(`.ex5 .btn1`).click(function(){
    clearInterval(intervalID)
    intervalID = setInterval(function(){
      $(`.ex5 .output`).text(++n)
    },1000)
  })

  $(`.ex5 .btn2`).click(function(){
    clearInterval(intervalID)
    intervalID = setInterval(function(){
      $(`.ex5 .output`).text(--n)
    },1000)
  })

  $(`.ex5 .btn3`).click(function(){
    clearInterval(intervalID)
  })
  //같은 intervalID를 사용한다
}) //ex5 시작할 때부터 알아서 1씩 증가

$(function(){
  var n = 0
  var 클릭가능 = true //처음에는 클릭을 할 수 있도록 세팅
  $(`.ex6 button`).click(function(){
    if(!클릭가능) return false //클릭가능 === false , 조건에 따라서 사용할 거냐 말 거냐
    
    //클릭이 true인 상태에서 실행되는 코드
    클릭가능 = false //두번째 클릭부터 클릭을 못 한다, 1번 클릭한 버튼으로 만든 것임 다음부터는 클릭못해

    setTimeout(function(){
      클릭가능 = true
    },1000) //1초 후에는 클릭할 수 있다 
    //1초 안에 클릭 못하는 걸 했기 때문에 clearTime 안 해야 한다

    $(`.ex6 .output`).text(++n)
  })
}) //ex6 1초 동안 못 누르게 한다, 클릭 제어, 중요한 기능임 
  //로그인 버튼 같은 거, 알림창, 많이 사용됨

$(function(){
  var n = 0  
  var timeoutID
  var intervalID

  $(`.ex7 button`).click(function(){
    clearTimeout(timeoutID)
    clearInterval(intervalID)

    timeoutID = setTimeout(function(){
      intervalID = setInterval(function(){
        $(`.ex7 .output`).text(++n)
      },1000) //interval도 스택이 쌓인다 clear를 안 하면
    },5000)
  
  })

}) //ex7

$(function(){
  var x = 0
  var c = true
  $(`.ex8 button`).click(function(){
    if(!c) return false
    c = false
    setTimeout(function(){
      c = true
    },1000)

    x += 50
    if(x>=250){x=250}
    
    
    $(`.ex8 div`).css({'left':`${x}px`})
  })


}) //ex8 클릭할 때마다 조금씩 오른쪽으로 이동
//연산(계산)에 의해서 순차적으로 반복되는 일어나는 상황 
//증감연산 
//시간 제어 1초마다 한 번씩 움직이게 해라

$(function(){
  var n = 1
  var intervalID = setInterval(function(){
    ++n
    if(n > 5) n = 1
    $(`.ex9 img`).hide()
    $(`.img${n}`).show()
    },1000)

  $(`.ex9 .btn1`).click(function(){
    clearInterval(intervalID)
    intervalID = setInterval(function(){
      ++n
      if(n > 5) n = 1
      $(`.ex9 img`).hide()
      $(`.img${n}`).show()
    },1000)

  })

  $(`.ex9 .btn2`).click(function(){
    clearInterval(intervalID)
  })

}) //ex9
//시작하자마자 1초마다 1,2,3,4,5 알아서 바뀜
//play, stop버튼 만들기 stop은 멈춤 play는 다시 돌아감


$(function(){
  var x = 0
  var c = true

  $(`.ex10 button`).click(function(){
    if(!c) return false
    c = false
    setTimeout(function(){
      c = true
    },1000)

    x += 50
    if(x>=250){x=250}
  
    
    $(`.ex10 div`).css({'left':`${x}px`})
  })
}) //ex8 버튼 다시 돌아가는 거 ex10