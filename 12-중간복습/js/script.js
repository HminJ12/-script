$(function(){
/* 변수 
선언
  var : 함수레벨 scope, 변수를 사용할 범위 설정
  var a = 1 변수를 선언(만든다)
숫자형 변수
  a = '1'
  a + 1 //'11'
  a - 1 //0 
문자와 변수 연결 문법
  a = 'a1' 
  b = '1a'
  parseInt(a) -> 앞에 문자가 있으면 안 된다

  `` 탬플릿 문법
  $('button')
  jQuery('buttppm')

  객체
  구조분해

  boolean형
  true 혹은 false의 값만 가지는 변수
  var a = true

  언제(이벤트), 무엇(요소, 변수)을 이용해서, 어떤 일을 할지

  이벤트 바인딩
   $('쿼리셀렉터').click(function(){//콜백함수
    //할일
  })
  $('쿼리셀렉터').bind('click',function(){
    //할일
  })

  함수
  반복되는 유사 코드를 리팩토링 하는 목적

  $(this) //event target 이벤트를 당한 것
  이벤트를 줄이는 목적
  */

  function fn1(param){
    var 첫번째수 = parseInt($('.ex1 article:'+param+'-child input:first-child').val())
    var 두번째수 = parseInt($(`.ex1 article:${param}-child input:last-of-type`).val())
    var 결과 = 첫번째수 + 두번째수
    $(`.ex1 article:${param}-child p`).text(결과)
  }

  $('.ex1 article:first-child button').click(function(){
    fn1('first')
  })

    $('.ex1 article:last-child button').click(function(){
    fn1('last')
  })


    function fn2(num){
      var 성 = $('.ex2 .div'+num+' .first-name').val()
      var 이름 = $(`.ex2 .div${num} .last-name`).val()
      $('.ex2 .div'+num+' p').text(성+이름)
    }

    $('.ex2 .div1 button').click(function(){
      fn2(1)
    })

    $('.ex2 .div2 button').click(function(){
      fn2(2)
    })

    function fn3(num){
      var 숫자1 = parseInt($('.ex3 .cont'+num+' .num1').val())
      var 숫자2 = parseInt($('.ex3 .cont'+num+' .num2').val())
      var 결과 = 숫자1 + 숫자2
      $(`.ex3 .cont${num} p`).text(결과)
    }
    
    $('.ex3 .cont1 input').bind('input',function(){
      fn3(1)
    }) //bind input과 click이 같은 일을 함, bind input은 입력했을 때부터 결과값이 바뀜

    $('.ex3 .cont1 button').click(function(){
      fn3(1)
    })

    $('.ex3 .cont2 input').bind('input',function(){
      fn3(2)
    })

    $('.ex3 .cont2 button').click(function(){
      fn3(2)
    })


    function fn4(param){
      var 번호 = param //클릭한 번호, 입력한 번호
      var 글자 = $(`.ex4 .cont${번호} input`).val() //입력한 글자
  
      $(`.ex4 .cont${번호} p`).text(글자)
    
    }

    $('.ex4 button').click(function(){
      fn4($(this).val())
    }) //버튼 3개를 한꺼번에 부른다, 이벤트를 줄인다

    $('.ex4 input').bind('input',function(){
      fn4($(this).attr('data-n'))
      /* var 입력한번호 = $(this).attr('data-n')
      var 글자 = $(`.ex4 .cont${입력한번호} input`).val()
      $(`.ex4 .cont${입력한번호} p`).text(글자) */
      })

})