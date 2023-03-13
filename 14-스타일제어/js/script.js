$(function(){

  function fn1(el){
    var n = el.text()
    var bg = el.siblings(`.box${n}`).attr('data-bg')
    el.siblings('div').css({'background':'none'})
    el.siblings(`.box${n}`).css({'background':bg})
  }

  $(`.ex1 button`).click(function(){
    fn1($(this))
    /* 
    var n = $(this).text()
    var bg = $(this).siblings(`.box${n}`).attr('data-bg')
    //클릭한 버튼의 번호에 해당하는 형제 박스의 색깔
    
    //초기화, 원래대로
    //클릭한 버튼의 형제 div를 원래대로
    $(this).siblings('div').css({'background':'none'})
    $(this).siblings(`.box${n}`).css({'background':bg})
    //this 기준으로 찾아야 한다(형제 찾을 때)
    //클릭한 버튼에 형제 box n번째 div 색깔을 바꿔준다 
    */
  })

  $(`.ex2 div`).click(function(){
    $(this).siblings('div').removeClass('active')
    $(this).addClass('active')
  })//스타일 여러개가 바뀌어서 addClass, removeClass 사용함
  
  $(`.ex3 button`).click(function(){
    $(this).siblings('button').css({'color':'black'})
    $(this).css({'color':'red'})
  })

  $(`.ex4 button`).click(function(){
    $(this).siblings('button').removeClass('active')
    $(this).toggleClass('active')
  })//toggleClass 사용하고 removeClass도 사용한다

  $(`.ex5 button`).click(function(){
    $(`.ex5 button`).css({'color':'black'})
    //전부 다 원래대로 초기화를 한다
    //(무조건 this를 찾는 것이 아니다)
    //상황에 맞게 써야 한다
    $(this).css({'color':'red'})
  })

  $(`.ex6 button`).click(function(){
    $(`.ex6 button`).not($(this)).removeClass('active')
    //토글할 때는 다 초기화하면 안 된다
    //클릭한 버튼($(this)) 빼고 초기화를 한다
    $(this).toggleClass('active')
    //toggleClass와 toggle은 전부 다 비활성화하면 안 된다
    //상황에 맞게 써야 한다
    //toggleClass, toggle 이 두 개만 not을 사용해야 한다!!
  })

  $(`.ex7 button`).click(function(){
    var n = $(this).val()
    $(`.ex7 .cont${n} button`).not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })//토글클래스 사용으로 not을 사용함
   //cont1,2 class명을 주고 value 값을 줘서 

  $(`.ex8 button`).click(function(){
    $(this).parents('article').find('button').not($(this)).removeClass('active')
    $(this).toggleClass('active')
  })
  //.parents() 조상을 찾음 ('')에 넣어야 함, 
  //부모의 이름을 꼭 줘야한다 겹치지 않는 이름으로
  //(태그를 적는 건 위험하기 때문에 범위를 축소해야 한다)

  //.find() 손주까지 다 찾음 (자손)
  //함부로 쓰면 안 된다 겹치면 해당되는 조상을 찾는다 

  /* node
  prev, next, prevAll, nextAll, parent, children, 
  siblings, parennts, find

  css,
  addClass('active1 active2 active3'), removeClass('active1 active2 active3'), toggleClass
  add와 remove는 여러개의 class를 사용할 수 있다 띄어쓰기로*/

  $(`.ex9 button`).click(function(){
    var n = $(this).text()
    $(`.ex9 div`).show()
    $(`.ex9 .box${n}`).hide()
  })
  //.hide() 사라지는 명령어, .show() 보여주는 명령어

  $(`.ex10 button`).click(function(){
    var n = $(this).text()
    $(`.ex10 div`).hide()
    $(`.ex10 .box${n}`).show()
  }) //css에서 일단 3개 다 안 보이게 설정한다.
  //show <-> hide , toggle() hide()

  $(`.ex11 button`).click(function(){
    var n = $(this).text()
    $(`.ex11 div`).not(`.box${n}`).hide()
    $(`.ex11 .box${n}`).toggle()
  })

  $(`.ex12 button`).click(function(){
    var n = $(this).text() //바꿔야 할 박스 번호, 클래스번호 
    $(`.ex12 div`).not(`.box${n}`).removeClass(`active1 active2 active3`)
    $(`.ex12 .box${n}`).toggleClass(`active${n}`)
    //addClass와 removeClass에만 나열이 가능하다
  })

  $(`.ex13 button`).click(function(){
    var n = $(this).text()
    $(`.ex13 div`).not(`.box${n}`).removeClass(`active`)
    $(`.ex13 .box${n}`).toggleClass(`active`)
  })
  //구조가 더 좋다, 만들 때 13번처럼 만들어라.


}) //ready