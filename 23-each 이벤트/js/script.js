$(function(){
  $(`.ex1 button`).click(function(){
    $(`.ex1 div`).css({'background':`red`})
  })
}) //ready

$(function(){
  $(`.ex2 button`).click(function(){
    $(`.ex2 div`).each(function(){
      var bg = $(this).text()
      $(this).css({'background':bg})
    })  //each 차례대로 한번씩 반복한다 
      //each에서 $(this)는 순서에 해당하는 엘리먼트를 말한다
      //차례대로 다 다른값을 제어할 때 사용한다!
  })
}) //ready

$(function(){
  $(`.ex3 button`).click(function(){
    $(`.ex3 div`).each(function(){
      var size = Math.floor(Math.random() * 41) + 30 
      $(this).css({
        'width':`${size}px`,
        'height':`${size}px`
      })
    })
  })
}) //ready

$(function(){
  $(`.ex4 input:not(.user)`).each(function(){
    var rand = Math.floor(Math.random() * 10)
    $(this).val(rand)
  })

  $(`.ex4 button`).click(function(){
    var sum = 0
    //ex4 안에 있는 input만큼 반복한다
    $(`.ex4 input:not(.user)`).each(function(){
      sum += parseInt($(this).val())
      //sum += parseInt($(`ex4 input:nth-of-type(1~5)`).val())
    })
    var user = parseInt($(`.ex4 .user`).val())
    var result = (user === sum)?`정답`:`오답` 
    $(`.ex4 .output`).text(result)
  })
  //증감연산
  //클릭할때마다 0부터 시작해서 증가
  //정답 아니면 오답 나오게 
}) //ready ex4

$(function(){
  $(`.ex5 button`).click(function(){
    var user = $(`.ex5 input:checked`).val()
    var result = (user === '1')?`정답`:`오답`
    $(`.ex5 .output`).text(result)
  })
  //체크하고 결과보기 눌렀을 때 정답이 나와야 한다
}) //ready

$(function(){

  $(`.ex6 button`).click(function(){
    var point = 0

    $(`.ex6 div`).each(function(){
      if($(this).find(`input:checked`).val()==='o'){
        ++ point
      } 
      //각 문제안의 체크된 input의 value값이 o라면 정답인지 확인

    })//문제마다 차례대로 한번씩 반복해서 할일
    
    $(`.ex6 .output`).text(point)
  })
}) //ready ex6
//맞힌 갯수만큼 점수 나오기 문제의 갯수만큼 반복 div갯수만큼
//증감연산 변수 초기값 

$(function(){
  $(`.ex7 button`).click(function(){
    $(`.ex7 div`).css({'background':`none`})
    $(this).parent('p').siblings('div').each(function(){
      var bg = $(this).attr('data-bg')
      $(this).css({'background':bg})
    })
    

  })
}) //ready ex7
//클릭했을 때 다른애들은 전부 원래대로 
//this parent siblings each

$(function(){

}) //ready