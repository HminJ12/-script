$(function(){
  
/* 
  증감연산은 초기값이 필요함
  초기값 선언 위치가 중요함

  증감연산자
  n += 2 // n = n + 2  n이 2씩 증가한다 앞에서부터 읽는다 
  2이상 값일 때 사용
  n ++ // n += 1  n을 먼저 찾고 자기 혼자 증가한다
  ++ n // n += 1  증가를 한 다음에 값을 준다 (대부분 ++n을 쓴다)
  다른 곳에 값을 넘겨야 할 때 반드시 ++ n을 사용해야 한다!
  증감, 검사, 호출
  n ++ //1씩 증가한다 n += 1과 같은 식
*/
 



  var n = 1 

  function fn(param){
    //++n
    n += param
    if(n > 5) n = 5 
    if(n < -5) n = -5 
    $(`.ex1 .output`).text(n)    
  } 


  $(`.ex1 .increase`).click(function(){
    fn(1)
    /*  //n ++ //1씩 증가한다 n += 1과 같은 식 
    ++n
    if(n > 5) n = 5 //증감하고 검사하고 사용한다의 순서다!
    $(`.ex1 .output`).text(n) */
  })

  $(`.ex1 .decrease`).click(function(){
    fn(-1)
    /* --n
    if(n < -5) n= -5
    $(`.ex1 .output`).text(n) */
  })  

}) //함수레벨 스코프 목적으로 분리한 거다
/*  */
$(function(){
  var n = 1

  function fn(param){
    n += param
    if(n > 5){n = 1}
    if(n < 1){n = 5}
    $(`.ex2 .output`).text(n)
  }


  $(`.ex2 .decrease`).click(function(){
    fn(1)
 
  })

  $(`.ex2 .increase`).click(function(){
    fn(-1)

  })

})

/* floor는 0, ceil은 1부터 시작 */
$(function(){
  var rdn 
  

  //함수 만들기 4개 만점 안 맞으면 빵점

  function fnRdn(num){
    
    rdn = Math.floor(Math.random()*10)
    $(`.ex3_${num} .num1`).val(rdn)
    rdn = Math.floor(Math.random()*10)
    $(`.ex3_${num} .num2`).val(rdn)
  }
  fnRdn(1)
  fnRdn(2)
  fnRdn(3)
  fnRdn(4)
  
  var n

  function fn1(c){
    var num1 = parseInt($(`.ex3_${c} .num1`).val())
    var num2 = parseInt($(`.ex3_${c} .num2`).val())
    var sum1 = num1 + num2
    var user1 = parseInt($(`.ex3 .ex3_${c} input:last-child`).val())
    
  
    if(sum1===user1){
      ++n
    }

   
  }

  
  $(`.ex3 button`).click(function(){
    n = 0
    fn1(1)
    fn1(2)
    fn1(3)
    fn1(4)

    $(`.ex3 .output`).text(n)
  })

  //함수 안에서 증감연산해야 한다 조건문 사용
})