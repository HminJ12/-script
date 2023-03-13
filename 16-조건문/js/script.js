/* 
  비교 연산자 종류
  === 같다  !== 다르다 >크다 <작다 >=이상이다 <=이하이다
  
  비교 연산자 결과로는 true false(undefinde, NaN)만 반환한다
  결과는 true 아니면 false만 나온다 (불린값)

  
  (2===2)범위 설정 true가 나옴
  !(2===2) 반대 결과가 나옴 true, false를 뒤집는 연산자

  논리연산자 종류 (비교 연산자를 두개 이상 사용할 경우 논리연산자로 연결한다)
  $$(and, 면서) 모든 비교연산이 true일 경우 최종 true
  ||(or, 또는) 비교연산 하나가 true이면 최종 true

  조건문(if문) 3가지가 있다
  if(){} 하나의 일을 처리할 때
  if(){}else{} 두가지 일을 처리할 때, 정답이냐 아니냐
  if(){}else if(){}else if(){}else{}
*/
$(function(){
  $(`.ex1`).submit(function(e){
    e.preventDefault()
    var result
    var n = parseInt($(`.ex1 input`).val())
    if(n > 0){
      result ="정답"
    }else{
      result="오답"
    }
    $(`.ex1 .output`).text(result)
    })
    
    //form에서만 엔터 쳤을 때 생기는 이벤트
    //새로고침이 됨, 새로고침이 안 되게 만들어야 한다(e ->이벤트 리스너)
  /* if(n >= 1){
   $(`.ex1 .output`).text('정답')
    } n이 1과 같거나 크다로 할 수도 있다*/

   $(`.ex2`).submit(function(e){
    e.preventDefault()
    var n = $(`.ex2 input`).val()
    var result
    if(n === '1'){
      result = 'one'
    }else if(n==='2'){
      result = 'two'
    }else if(n==='3'){
      result = 'three'
    }else{
      alert('입력오류')
      return false //더이상 할 필요가 없을 때 끊어버린다
      //중지를 해버리겠다
    } //else if문 조건에 따라서 2개 이상일 때
    
    $(`.ex2 .output`).text(result)
   }) 


  $(`.ex3 button`).click(function(){
    var n = parseInt($(`.ex3 input`).val()) //NaN 
    if(!n){ //if(!false)
      alert(`숫자만 입력해주세요`) ; return false}
    // n은 값이 들어 있을 때, 정상적일 때(undefined,NaN도 아니다) n이 정상적이라면
    // !n ->n이 반대일 때  


    var result
    if(n>=3 && n<=7){
      result = "정답"
    }else{
      result = "오답"
    }
    $(`.ex3 .output`).text(result)
  })

  $(`.ex4`).submit(function(e){
    e.preventDefault()
    var n = parseInt($(`.ex4 input`).val())
    if(!n){
      alert(`숫자를 입력해주세요`)
      return false
    }
    var result
    if(n===1 || n===5 || n===10 || n===25){
      result = "정답"
    }else{
      result = "오답"
    }
    $(`.ex4 .output`).text(result)

  })

  $(`.ex5 button`).click(function(){
    var n = parseInt($(`.ex5 input`).val())
    if(!n && n !== 0){ //0이 false로 안 나오게 하려면
      alert(`숫자를 입력해주세요`)
      return false
    }
    var result
    if(n%2 === 0 && n !==0 ){
      result = "정답"
    }else{
      result = "오답"
    }

    $(`.ex5 .output`).text(result)
  })
  // script에서는 0은 false로 간주한다

}) //ready

