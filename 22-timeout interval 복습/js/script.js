$(function(){
var 위치 = 0
var 클릭가능 = true //false일 때 버튼 자체를 멈추게 할 거기 때문에 
//클릭 안쪽 가장 상위에 조건을 적는다, 클릭했을 때 실행되는 코드
var 이동거리 = 50
$(`.ex1 button`).click(function(){
  if(클릭가능 === false) return false

  //클릭가능 = true이면 실행되는 코드
  클릭가능 = false
  setTimeout(function(){
    클릭가능 = true
  },500)
  위치 += 이동거리 //변수가 들어가야 한다, 변하는 건 변수
  if(위치 > 250 ) {위치 = 200 ; 이동거리 = -50 ;}
  if(위치 < 0) {위치 = 50; 이동거리 = 50;}
  $(`.ex1 .box`).css({'transform':`translateX(${위치}px)`})
}) 

}) //ready

$(function(){
  var n = 1

  function fnChange(){
    ++ n
    if(n > 5) n = 1
    $(`.ex2 img`).hide()
    $(`.ex2 .img${n}`).show()
  }

  var intervalID = setInterval(function(){
    fnChange()
    /* ++ n
    if(n > 5) n = 1
    $(`.ex2 img`).hide()
    $(`.ex2 .img${n}`).show() 동일한 부분 함수로 한다*/
  },1000)

  $(`.ex2 .pause`).click(function(){
    clearInterval(intervalID)
    $(`.ex2 .btns`).addClass('active')
  })

  $(`.ex2 .play`).click(function(){
    clearInterval(intervalID)
    intervalID = setInterval(function(){
      fnChange()
    /* ++ n
    if(n > 5) n = 1
    $(`.ex2 img`).hide()
    $(`.ex2 .img${n}`).show() */
    },1000)
    $(`.ex2 .btns`).removeClass('active')
  })
}) //ready ex2 시작하자마자 반복 매초마다 interval
//interval 버튼을 여러번 누르면 중첩이 된다.

$(function(){
  var 목적지 = 0
  var intervalID
  var 이동량 = 50
  $(`.ex3 .move`).click(function(){
    clearInterval(intervalID)  
    intervalID = setInterval(function(){
      목적지 += 이동량
      if(목적지 > 250){목적지=200; 이동량 = -50}
      if(목적지 < 0 ){목적지=50; 이동량 = 50}
      $(`.ex3 .box`).css({'transform':`translate(${목적지}px)`})
    },300)
    $(`.ex3 .btns`).addClass('active')
  })

  $(`.ex3 .stop`).click(function(){
    clearInterval(intervalID)
    $(`.ex3 .btns`).removeClass('active')
  })
}) //ready ex3
//이동 - 알아서50씩 왔다 갔다 (증감연산)


$(function(){
  //버튼을 클릭했을 때
  //몇초부터 시작할지 알아낸다
  //여러번 클릭하면 안 되니까 버튼을 숨긴다(에러방지) .hide
  //1초마다 반복해서 할 일 setInterval
  
  $(`.ex4 button`).click(function(){
    var 초 = parseInt($(`.ex4 input`).val())
    $(this).hide()
    $(`.ex4 .output`).text(초) //입력하자마자 시작해야 해서
      var intervalID = setInterval(function(){
      //초를 1씩 감소한다
      -- 초
      //0초가 되면 인터벌을 멈춘다 
      if(초 === 0) {
        clearInterval(intervalID)
        $(`.ex4 button`).show()
        //버튼을 다시 보여준다, 여기서는 this 사용 불가
      }
      $(`.ex4 .output`).text(초)
      //초를 출력한다
    },1000) //1초 뒤부터 시작한다
  }) 

}) //ready ex4, 타이머 0이 되면 끝난다


$(function(){
  var intervalID
  $(`.ex5 .start`).click(function(){
    var n = 1 //시작 버튼 누를 때마다 1로 다시 돌아가야 해서 안에서 변수를 만든다
    $(`.ex5 .box${n}`).addClass(`active`)
    intervalID = setInterval(function(){
      ++n
      if(n > 5) {
        n=1
        $(`.ex5 div`).removeClass(`active`)
      }
      //5에서 1로 다시 돌아간다
      //5 이상  갔을 때 다시 불이 꺼진다
      $(`.ex5 div`).removeClass(`active`)
      $(`.ex5 .box${n}`).addClass(`active`)
    },1000)
    
    $(`.ex5 .btns`).addClass('active')
  })

  $(`.ex5 .stop`).click(function(){
    clearInterval(intervalID)
    $(`.ex5 div`).removeClass(`active`)
    $(`.ex5 .btns`).removeClass('active')
  })

  //인터벌 안에서 증가가 되야 하고 클릭할 때마다 1로 다시 돌아와야 함
}) //ready ex5

$(function(){
  $(`.ex6 .start`).click(function(){
    var n = 1
    $(`.ex6 .box${n}`).css({'background':'yellow'})
    intervalID = setInterval(function(){
      ++n
      if(n > 5) {
        n=1
        $(`.ex6 div`).css({'background':'none'})
      }
      //5에서 1로 다시 돌아간다
      //5 이상  갔을 때 다시 불이 꺼진다
      $(`.ex6 div`).css({'background':'none'})
      $(`.ex6 .box${n}`).css({'background':'yellow'})
    },1000)
    
    $(`.ex6 .btns`).addClass('active')
  })

  $(`.ex6 .stop`).click(function(){
    clearInterval(intervalID)
    $(`.ex6 div`).css({'background':'none'})
    $(`.ex6 .btns`).removeClass('active')
  })


}) //ready
