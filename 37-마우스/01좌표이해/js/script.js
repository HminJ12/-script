document.addEventListener('DOMContentLoaded',()=>{
{  
  const fnMouseHandler = (clientX, clientY, pageX, pageY, offsetX, offsetY) => {
    document.querySelector('.client-x').innerText = clientX
    document.querySelector('.client-y').innerText = clientY
    document.querySelector('.page-x').innerText = pageX
    document.querySelector('.page-y').innerText = pageY
    document.querySelector('.offset-x').innerText = offsetX
    document.querySelector('.offset-y').innerText = offsetY
  }
  window.addEventListener('mousemove',(e)=>{
    fnMouseHandler(e.clientX, e.clientY, e.pageX, e.pageY, e.offsetX, e.offsetY)
  }) //데스크탑에서
  window.addEventListener('touchmove',(e)=>{
    fnMouseHandler(
      e.changedTouches[0].clientX, 
      e.changedTouches[0].clientY, 
      e.changedTouches[0].pageX, 
      e.changedTouches[0].pageY,
      e.changedTouches[0].offsetX,
      e.changedTouches[0].offsetY,
    )
  }) //모바일에서, 둘 다 같이 사용해야 한다
} //ex1

{
  const fnGetMouseOffset = (clientX, clientY, x, y) => {
    let offsetX = clientX - x
    let offsetY = clientY - y
    document.querySelector('.ex2 .offset-x').innerText = offsetX
    document.querySelector('.ex2 .offset-y').innerText = offsetY
  }
  document.querySelector('.ex2').addEventListener('mousemove',(e)=>{
    fnGetMouseOffset(
      e.clientX,
      e.clientY,
      e.currentTarget.getBoundingClientRect().x,
      e.currentTarget.getBoundingClientRect().y
    )

  })
  document.querySelector('.ex2').addEventListener('touchmove',(e)=>{
    fnGetMouseOffset(
      e.changedTouches[0].clientX ,
      e.changedTouches[0].clientY,
      e.currentTarget.getBoundingClientRect().x,
      e.currentTarget.getBoundingClientRect().y
    )
  })
} //ex2

{
  window.addEventListener('mousemove',(e)=>{
    document.querySelector('.cur').style.opacity = 1
    document.querySelector('.cur').style.left = `${e.clientX}px`
    document.querySelector('.cur').style.top = `${e.clientY}px`
  })

  //버튼, 앵커한테 이벤트리스너를 줘야 함
document.querySelectorAll('button, a').forEach((el)=>{
    el.addEventListener('mouseenter',()=>{
      document.querySelector('.cur').classList.add('active')
    })
    el.addEventListener('mouseleave',()=>{
      document.querySelector('.cur').classList.remove('active')
    })
  }) 
} //cursor  

/* 제이쿼리로 
$(function(){
  $(window).bind('mousemove',function(e){
    $('.cur').css({'opacity': 1, 'left': `${e.clientX}px`, 'top':`${e.clientY}px`})
  })
  $('button, a').mouseenter(function(){
    $(this).siblings('.cur').addClass('active')
  }).mouseleave(function(){
    $(this).siblings('.cur').removeClass('active')
  })
}) //ready */


}) //document -> ready와 같다 
//mousemove는 데스크톱에서만 사용 가능하다, 휴대전화에서는 touchmove이벤트를 사용해야 한다
//e.changedTouches[0] 배열로 나온다 
//e.changedTouches[0].pageX
//객체 기준으로 마우스를 찾는 게 offsetX, offsetY
//모바일에서는 offsetX, offsetY 지원을 안 해줌
//오프셋은 자바스크립트밖에 제공이 안 된다
//바닐라 clientY(1200) - box.getBoundingclientrect().width
//clientY(1200) - box.getBoundingclientrect().y(100) 브라우저 기준


/* 
제이쿼리 문법
$(function(){
  $(window).bind('mousemove',function(e){
    console.log('e.clientX');
  })
  $(window).bind('touchmove',function(e){
  console.log(e.originalEvent.changedTouches[0].clientX);
  })
}) //ready 

//제이쿼리는 e.originalEvent.changedTouches[0].clientX

제이쿼리로 offset 구하는 방법
pageY(1200) - box.OffsetTop(1100) = offsetY(100)
*/

/* 
clientX는 브라우저 기준 좌표이다
pageX는 문서 기준 좌표이다
*/