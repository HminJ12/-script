$(function(){

  $(`.ex1 button`).click(function(){
    $(`.ex1 div`).css({'background':`none`})
    $(this).parent().siblings(`div`).each(function(){
      var bg = $(this).attr('data-bg') //차례에 해당하는 attribute 
      $(this).css({'background':bg})
    })
  }) //parent()안에는 안 적는다. 의미는 parent(`p`)

}) //ex1

$(function(){
  function fnSetNumber(){
    $(`.ex2 span`).each(function(){
      var r = Math.floor(Math.random() * 10)
      $(this).text(r)
    }) //전부 다른 값이 필요해서 each 사용함, 문제 출력
  }
  
  fnSetNumber()
  var point = 0

  $(`.ex2 button`).click(function(){
    var sum = 0
    $(`.ex2 span`).each(function(){
      sum += parseInt($(this).text())
    }) //정답 확인
    var n = parseInt($(`.ex2 input`).val()) //사용자가 입력한 값
    /* var result = (sum === n)?`정답`:`오답` */
    var result
    
    if(sum === n){
      ++ point
      $(`.ex2 div`).css({'background':`none`})
      $(`.ex2 input`).val('') //값을 입력하는 것, 안의 내용을 지우겠다 
      fnSetNumber()
    }else{
      
      $(`.ex2 div`).css({'background':`red`})
    }

    $(`.ex2 input`).focus()
    $(`.ex2 .output`).text(point)
    
  })

}) //ex2 화면이 나오자마자
//결과보기 누른 후 정답일 때 점수 증가 문제가 또 나옴 

$(function(){
  $(`.ex3 .btn1`).click(function(){
    var point = 0
    $(`.ex3 div`).each(function(){
      var check = $(this).find(`input:checked`).val()
      if(check === '정답') {
        point ++
        $(this).children(`.radios`).css({'background':`green`})
      }else{
        $(this).children(`.radios`).css({'background':`red`})
      }
      //point += (check === '정답')? 1 : 0
    })
    $(`.ex3 .output`).text(point)
  })

  $(`.ex3 .btn2`).click(function(){
    $(`.ex3 .output`).text('0')
    $(`.ex3 .radios`).css({'background':`none`})
    $(`.ex3 input`).prop(`checked`, false) //버튼 체크 없애는 거
  })
}) //ex3 증감연산(점수), 클릭할 때마다 0부터 다시 점수 계산


$(function(){
  $(`.ex4 button`).click(function(){
    var 체크박스갯수 = $(`.ex4 input`).size()
    var 정답수 = 0
    $(`.ex4 input`).each(function(){
      //(체크가 돼있다 && value값이 o) || (체크가 안 되어있다 && value값이 x)
      var ox = $(this).val() //차례대로 o,x
      var checked = $(this).prop(`checked`) //checked가 됐는지 안 됐는지 true, false
      if((checked === true && ox === 'o') || (checked === false && ox === 'x')){
        정답수 += 1
      }
    }) //몇 개 맞았나 
    var result = (체크박스갯수 === 정답수) ? `정답`:`오답`
    $(`.ex4 .output`).text(result)

  })

}) //ex4 4점 나왔을 때 정답, 체크박스 어려움...

$(function(){

  function 정답체크박스숫자알아내기(el){
    var 정답체크갯수 = 0 //문제마다 
    el.children(`input`).each(function(){
      var 정답여부 = $(this).val() //this는 input, input의 정답여부
      var 체크여부 = $(this).prop(`checked`)
      if(
        (체크여부 === true && 정답여부 === 'o')
        || 
        (체크여부 === false && 정답여부 === 'x')
        ){ //정답체크조사
        정답체크갯수 ++
        }
    }) //한 문제당 체크박스 한번씩 반복, 체크박스 each
    
    return 정답체크갯수 //함수 만들면 return을 해준다
  }

  $(`.ex5 .btn1`).click(function(){
    var 총점 = 0

    $(`.ex5 div`).each(function(){
      var 체크박스갯수 = $(this).children(`input`).size() //체크박스 갯수, this는 div
      
      
      var 정답체크갯수 = 정답체크박스숫자알아내기($(this))
      //return한 정답체크갯수를 받을 var 박스를 만들어준다
      
      if(체크박스갯수 === 정답체크갯수){
        총점 ++
        $(this).css({'background':`green`}) //this는 div
      }else{
        $(this).css({'background':`red`})
      }
    }) //문제마다 each
    
    $(`.ex5 .output`).text(총점)

  }) //click 

  $(`.ex5 .btn2`).click(function(){
    $(`.ex5 .output`).text('0')
    $(`.ex5 div`).css({'background':`none`})
    $(`.ex5 input`).prop(`checked`, false) 
  })
})

