$(function(){

  $(`.ex1 button`).click(function(){
    var num1_1 = $(`.ex1 .num1_1`).val()
    var num1_2 = $(`.ex1 .num1_2`).val()
    var num2_1 = $(`.ex1 .num2_1`).val()
    var num2_2 = $(`.ex1 .num2_2`).val()
    var num1 = parseInt(num1_1 + num1_2)
    var num2 = parseInt(num2_1 + num2_2)
    var oper = $(`.ex1 select option:selected`).text()
    /* 알파벳이 있는지 검사하는 방법은 빼기를 해본다 
    0은 false로 간주한다*/

    if(
      (!(num1_1 - num1_2) && num1_1-num1_2 !== 0)
      ||
      (!(num2_1 - num2_2) && num2_1-num2_2 !== 0 )
      ){
      alert(`입력오류`)
      return false
    }
    /* if(!num1_1 || !num1_2 || !num2_1 || !num2_2 ){
      alert(`입력오류`)
      return false
    } */
    

    if(oper==='/' && num2===0){
      alert(`0으로는 나눌 수 없어요`)
      return false
    }


    var result
    if(oper==='+'){
      result = num1 + num2
    }else if(oper==='-'){
      result = num1 - num2
    }else if(oper==='*'){
      result = num1 * num2
    }else{
      result = (num1 / num2).toFixed(1)
    }

    $(`.ex1 .output`).text(result)
  })
  

  $(`.ex2 button`).click(function(){
    var n = parseInt($(`.ex2 input`).val())

    if(!n && n!==0){
      alert('숫자만 입력 가능')
      return false
    }

    /* 
    var result
    if(n%2 === 0 && n > 10){
      result = '정답'
    }else{
      result = '오답'
    }
    result 구하려고 만든 것임*/

    var result = (n%2 === 0 && n > 10)? `정답`:`오답` 
    /* 
    삼항연산자
    (조건)? ('참인 값'):('거짓인 값') 
    값을 받아내는 게 목적
    */

    $(`.ex2 .output`).text(result)
  })

  var r = Math.ceil(Math.random()*3)
  $(`.ex3 b`).text(r)

  $(`.ex3 button`).click(function(){
    var n = $(`.ex3 input`).val()
    var result = (
      (r===1 && n==='one')
      ||
      (r===2 && n==='two')
      ||
      (r===3 && n==='three')
      )? `정답`:`오답`

    $(`.ex3 .output`).text(result)
  }) //삼항연산자 사용

  
  $(`.ex4 input`).click(function(){
    /* $(this).val('x') //바꾸는 값은 변수에 못 넣는다 */ 
    var str = ($(this).val()==='o')? 'x':'o'
    $(this).val(str)
  })

  $(`.ex4 button`).click(function(){
    $(this).toggleClass('active')
  })

})