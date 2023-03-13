$(function(){
  $(`.ex1 button`).click(function(){
    var kor = parseInt($(`.ex1 .kor`).val())
    var eng = parseInt($(`.ex1 .eng`).val())
    var math = parseInt($(`.ex1 .math`).val())
    var total = kor + eng + math
    var avg = (total / 3).toFixed(1)

    if(!total) { //이 값이 false일 때, 이 값이 정상이 아닐 때
      alert(`입력이 잘못 되었습니다`) 
      return false
    }

    var result
    if(avg >= 90){
      result = 'A'
    }else if(avg >= 80 && avg < 90){
      result = 'B'
    }else if(avg >= 70 && avg < 80){
      result = 'C'
    }else{ //avg < 70
      result = 'D'
    }

    /* if(avg >= 90){
      result = 'A'
    }else if(avg >= 80){
      result = 'B'
    }else if(avg >= 70){
      result = 'C'
    }else{ //avg < 70
      result = 'D'
    } else가 그밖에라는 뜻으로 이렇게 해도 된다*/


    $(`.ex1 .output`).text(`총점은 ${total}점, 평균은 ${avg}점, 등급은 ${result}`)  
  }) 


  $(`.ex2 button`).click(function(){
    var age = parseInt($(`.ex2 .age`).val())
    var point = parseInt($(`.ex2 .point`).val())
    
    if(!age || !point){
      alert ('입력오류')
      return false
    }
    
    var result
    if((age>=19 && point >= 90) || (age<19 && point >= 80)){
      result = 'A'
    }else if(
      (age>=19 && point >= 80 && point < 90) 
      || 
      (age<19 && point >= 70 && point < 80)
      ){
      result = 'B'
    }else if(
      (age>=19 && point >= 70 && point < 80) 
      || 
      (age<19 && point >= 60 && point < 70)
      ){
      result = 'C'
    }else{
      result = 'D'
    }
    
    $(`.ex2 .output`).text(`결과는 ${result}입니다`)

  })

  $(`.ex3 button`).click(function(){
    var com = Math.ceil(Math.random() * 3)
    if(com===1){
      com = '가위'
    }else if(com===2){
      com = '바위'
    }else{
      com = '보'
    }
    var user = $(`.ex3 input:checked`).val()
    var result
    if(
      (com==='가위' && user==='가위')
      ||
      (com==='바위' && user==='바위')
      ||
      (com==='보' && user==='보')
      ){
      result = "비김"
    }else if(
      (com==='가위' && user==='바위')
      ||
      (com==='바위' && user==='보')
      ||
      (com==='보' && user==='가위')
      ){
      result = "사용자승"
    }else{
      result = "사용자패"
    }

    $(`.ex3 .output`).text(`컴퓨터:${com}, 사용자:${user}, 결과:${result}`)

  })

  $(`.ex4 button`).click(function(){
    //1-1
    //1-2
    //두개 이어서 숫자 하나로 만들기
    var n1 = $(`.ex4 .num1-1`).val()
    var n2 = $(`.ex4 .num1-2`).val()
    var n3 = parseInt(n1+n2)
    var m1 = $(`.ex4 .num2-1`).val() 
    var m2 = $(`.ex4 .num2-2`).val()
    var m3 = parseInt(m1+m2)
    var sum = n3 + m3
    var sub = n3 - m3
    var multi = n3 * m3
    var div = n3 / m3
  
    var v =$(`.ex4 select`).val()
    if(!n3 || !m3 ){
      alert ('입력오류')
      return false
    }

    if(v===div && m3===0){
      alert ('숫자를 넣어주세요')
      return false
    } /* 안 나옴... 왜? */
    
    var result
    if(v === 'sum'){
      result = sum
    }else if(v === 'sub'){
      result = sub
    }else if(v === 'multi'){
      result = multi
    }else{
      result = div
    }

    $(`.ex4 .output`).text(result)

  })

  $(`.ex5 button`).click(function(){
    var gen = $(`.ex5 input:checked`).val()
    var t = $(`.ex5 .tall`).val()
    var w = $(`.ex5 .wet`).val()
    
    var bmi = (w / ((t*t)/100) *100).toFixed(2)

    var result
    if((bmi < 15) || (bmi < 20)){
      result = '마름'

    }else if((bmi >= 15 && bmi<20) || (bmi >=20 && bmi<25)){
      result = '적정'
    }else if((bmi >= 20 && bmi<25) || (bmi >=25 && bmi<30)){
      result = '약간 비만'
    }else{
      result = '비만'
    } 
    
    $(`.ex5 .output`).text(`성별:${gen}, bmi수치:${bmi}, bmi분석:${result}`)
  })



}) //비동기 문법 ready