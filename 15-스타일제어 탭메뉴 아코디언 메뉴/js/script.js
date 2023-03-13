$(function(){

  $(`.ex1 button`).click(function(){
    var n = $(this).text()
    $(`.ex1 .box`).hide()
    $(`.ex1 .box${n}`).show() //css({'display':'block'}) 줄임말, 
    //해당태그 레벨에 맞게 바뀜 div라 block레벨로 나옴
  })

  $(`.ex2 button`).click(function(){
    var n = $(this).text()
    $(`.ex2 .box`).not($(`.box${n}`)).hide()
    //$(`.ex2 .box${n}`).siblings('.box').hide() 이런 방법도 있다
    $(`.ex2 .box${n}`).toggle()
  })

  $(`.ex3 .box`).click(function(){
    $(`.ex3 .box div`).stop().slideUp()
    $(this).children(`div`).stop().slideToggle() 
    //.slideDown() 접이식, 아코디언 위에서 아래로 펼쳐진다
    //.slideUp() 반대
    /* 천천히 변하는 걸 애니메이션 효과
    스택이 쌓인다. 애니메이션 효과가 쌓인다 */
  }) 

  $(`.ex4 .box`).click(function(){
    $(`.ex4 .box div`).stop().fadeOut()
    $(this).children('div').stop().fadeToggle()
    //서서히 나타난다, 젖어들다
  })

  $(`.tab button`).click(function(){
    var n = $(this).val()
    $(`.tab .pane`).hide()
    $(`.tab .pane${n}`).show()
    $(`.tab button`).removeClass('active')
    $(this).addClass('active')
  }) //tab메뉴

  $(`.menu>ul>li>a`).click(function(e){
    e.preventDefault() //무조건 위에다 쓴다 
    //원래 행동을 막는다 콜백함수 안에
    $(`.menu>ul>li>ul`).stop().slideUp()
    $(this).siblings('ul').stop().slideToggle()

    $(`.menu>ul>li>a`).not($(this)).removeClass('active')
    $(this).toggleClass('active')

  }) //아코디언은 주로 메뉴만들 때 만든다
  //a기능을 막아놓고 내 기능만 사용하도록 해야 함 e.preventDefault()
  //클릭한 a의 형제 ul이 나오게 해야 함(next해도 상관없음)




}) //ready

/* 
모양, 스타일 제어하는 명령어
css,
addClass, removeClass, toggleClass
show, hide, toggle
slideDown, slideUp, slideToggle
fadeIn, fadeOut, fadeToggle
 */