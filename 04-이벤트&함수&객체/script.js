function 더하기(숫자1, 숫자2){
  var 숫자1 = parseInt(숫자1)
  var 숫자2 = parseInt(숫자2)
  var 결과 = 숫자1 + 숫자2
  return 결과
} //더하기 함수 

function 곱하기(숫자1, 숫자2){
  return 숫자1 * 숫자2
} //곱하기 함수

function 빼기(숫자1, 숫자2){
  return 숫자1 - 숫자2
}

function 나누기(숫자1, 숫자2){
  return 숫자1 / 숫자2
}


$('.ex1 .div1 button').click(function(){
  var 숫자1 = $('.ex1 .div1 .num1').val()
  var 숫자2 = $('.ex1 .div1 .num2').val()
  var 더하기결과 = 더하기(숫자1, 숫자2)
  var 곱하기결과 = 곱하기(숫자1, 숫자2)
  $('.ex1 .div1 .output').html(더하기결과+','+곱하기결과)
})

$('.ex1 .div2 button').click(function(){
  var 숫자1 = $('.ex1 .div2 .num1').val()
  var 숫자2 = $('.ex1 .div2 .num2').val()
  var 더하기결과 = 더하기(숫자1, 숫자2)
  var 빼기결과 = 빼기(숫자1, 숫자2)
  $('.ex1 .div2 .output').html(더하기결과+','+빼기결과)
})

$('.ex1 .div3 button').click(function(){
  var 숫자1 = $('.ex1 .div3 .num1').val()
  var 숫자2 = $('.ex1 .div3 .num2').val()
  var 빼기결과 = 빼기(숫자1, 숫자2)
  var 곱하기결과 = 곱하기(숫자1, 숫자2)
  $('.ex1 .div3 .output').html(빼기결과+','+곱하기결과)
})

$('.ex1 .div4 button').click(function(){
  var 숫자1 = $('.ex1 .div4 .num1').val()
  var 숫자2 = $('.ex1 .div4 .num2').val()
  var 더하기결과 = 더하기(숫자1, 숫자2)
  var 나누기결과 = 나누기(숫자1, 숫자2)
  $('.ex1 .div4 .output').html(더하기결과+','+나누기결과)
})


function 계산(수1, 수2){
  var 수1 = parseInt(수1)
  var 수2 = parseInt(수2)
  var 더하기 = 수1+수2
  var 빼기 = 수1-수2
  var 곱하기 = 수1*수2
  var 나누기 = (수1/수2).toFixed(2)
  var 객체 = {
    더하기,
    빼기,
    곱하기,
    나누기,
  }
  return 객체
}

$('.ex2 .div1 button').click(function(){
  var 숫자1 = $('.ex2 .div1 .num1').val()
  var 숫자2 = $('.ex2 .div1 .num2').val()
  //var 객체 = 계산(숫자1, 숫자2)
  var {더하기,곱하기} = 계산(숫자1, 숫자2) //구조분해할당, destructuring
  $('.ex2 .div1 .output').html(더하기+','+곱하기)
})

function 합계(국어,영어,수학){
  var 국어 = parseInt(국어)
  var 영어 = parseInt(영어)
  var 수학 = parseInt(수학)
  var 국영총점 = 국어+영어
  var 국영평균 = (국어+영어)/2
  var 영수총점 = 영어+수학
  var 영수평균 = (영어+수학)/2
  var 객체 = {
    국영총점,
    국영평균,
    영수총점,
    영수평균,
  }
  return 객체
}

$('.ex3 .div1 button').click(function(){
  var 국어 = $('.ex3 .div1 .num1').val()
  var 영어 = $('.ex3 .div1 .num2').val()
  var 수학 = $('.ex3 .div1 .num3').val()
  var {국영총점,국영평균} = 합계(국어,영어,수학)
  $('.ex3 .div1 .output').html(국영총점+','+국영평균)
})

$('.ex3 .div2 button').click(function(){
  var 국어 = $('.ex3 .div2 .num1').val()
  var 영어 = $('.ex3 .div2 .num2').val()
  var 수학 = $('.ex3 .div2 .num3').val()
  var {영수총점,영수평균} = 합계(국어,영어,수학)
  $('.ex3 .div2 .output').html(영수총점+','+영수평균)
})

function 가격(상품가격,상품색,갯수){
  var a = 상품가격
  var b = 상품색
  var c = 갯수
  var 합 = a*c + b*c
  return 합
}

$('.ex4 .div1 button').click(function(){
  var 상품가격 = $('.ex4 .div1 .n1 input:checked').val()
  var 상품색 = $('.ex4 .div1 .n2 input:checked').val()
  var 갯수 = $('.ex4 .div1 .num1').val()
  var 합 = 가격(상품가격,상품색,갯수)
  $('.ex4 .div1 p:last-child').html(합)
})