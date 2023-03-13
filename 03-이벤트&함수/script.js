$('.ex1 button').click(function(){
  var 숫자1 = parseInt($('.ex1 .num1').val())
  var 숫자2 = parseInt($('.ex1 .num2').val())
  var 합 = 숫자1 + 숫자2
  alert(합)
})

$('.ex2 button').click(function(){
  var 숫자1 = parseInt($('.ex2 .num1').val())
  var 숫자2 = parseInt($('.ex2 .num2').val())
  var 합 = 숫자1 + 숫자2
  alert(합)
})

$('.ex3 button').click(function(){
  var 상품가격 = $('.ex3 input:checked').val()
  var 상품갯수 = $('.ex3 .cnt').val()
  var 총가격 = 상품가격 * 상품갯수
  alert(총가격)
})

function 사칙연산(a,b){
  var 숫자1 = a//5
  var 숫자2 = b//3
  var 더하기 = 숫자1 + 숫자2
  var 빼기 = 숫자1 - 숫자2
  var 곱하기 = 숫자1 * 숫자2
  var 나누기 =(숫자1 / 숫자2).toFixed(2) 
  alert(숫자1+'+'+숫자2+'='+더하기+','+숫자1+'-'+숫자2+'='+빼기+','+숫자1+'*'+숫자2+'='+곱하기+', '+숫자1+'/'+숫자2+'='+나누기)
}

$('.ex4 button').click(function(){
  var 숫자1 = parseInt($('.ex4 .num1').val())
  var 숫자2 = parseInt($('.ex4 .num2').val())
  사칙연산(숫자1,숫자2)
})

$('.ex5 button').click(function(){
  var 숫자1 = parseInt($('.ex5 .num1').val())
  var 숫자2 = parseInt($('.ex5 .num2').val())
  사칙연산(숫자1,숫자2)
})

function 여백(a,b,c){
  var 컨테이너넓이 = a
  var 그리드의갯수 = b
  var 그리드한칸넓이 = c
  var 총여백 = 컨테이너넓이 - (그리드의갯수 * 그리드한칸넓이)
  var 한칸여백 = 총여백 / (그리드의갯수 - 1)
  alert(한칸여백)
  
}

$('.ex6 button').click(function(){
  var 컨테이너넓이 = parseInt($('.ex6 .num1').val())
  var 그리드의갯수 = parseInt($('.ex6 .num2').val())
  var 그리드한칸넓이 = parseInt($('.ex6 .num3').val())
  여백(컨테이너넓이, 그리드의갯수, 그리드한칸넓이)
})

$('.ex7 button').click(function(){
  var 컨테이너넓이 = parseInt($('.ex7 .num1').val())
  var 그리드의갯수 = parseInt($('.ex7 .num2').val())
  var 그리드한칸넓이 = parseInt($('.ex7 .num3').val())
  여백(컨테이너넓이, 그리드의갯수, 그리드한칸넓이)
})