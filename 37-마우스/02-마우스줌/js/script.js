$(function(){
  function fnZoom(pageX, pageY, container, big){
    big.show()
    var offsetX = pageX - container.offset().left //문서기준의 마우스위치 - 문서기준의 요소위치
    var ratioX = offsetX / container.innerWidth() //요소기준의 마우스위치
    var moveRangeX = container.innerWidth() - big.innerWidth() //큰 이미지가 이동할 수 있는 범위
    var moveX = ratioX * moveRangeX

    var offsetY = pageY - container.offset().top
    var ratioY = offsetY / container.innerHeight()
    var moveRangeY = container.innerHeight() - big.innerHeight()
    var moveY = ratioY * moveRangeY

    big.css({'left':`${moveX}px`, 'top': `${moveY}px`})
  }

  //이벤트
 $(`.ex1 figure`).mousemove(function(e){
    fnZoom(e.pageX, e.pageY, $(this), $(this).find('.big'))
  })

  $(`.ex1 figure`).bind('touchmove',function(e){
    fnZoom(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY, $(this), $(this).find('.big'))
  })

  $(`.ex1 figure`).mouseleave(function(e){
    $(this).find('.big').hide()
  })

  $(`.ex1 figure`).bind('touchend',function(e){
    $(this).find('.big').hide()
  })

})
//비율공식 0 -> 0 , 0.5 -> -100px, 1 -> -200px이 되어야 한다
//mouseOffset(mousePageX - offset.left)/200(엘리먼트 박스 크기) * -200 (큰이미지가 움직일 수 있는 최대거리, 박스의 최대 이동치)
//박스의 최대 이동치 (figure - img 크기) 비율 제어량
// 쇼핑몰에서 보던 이미지 확대 효과


/* 바닐라로 변경하기 */
/* const fnZoomIn = (pageX, pageY, container, big) => {
  document.querySelectorAll('.ex1 figure').forEach((el)=>{
    el.show()
    let offsetX = pageX - container.offset().left //문서기준의 마우스위치 - 문서기준의 요소위치
    let ratioX = offsetX / container.clientWidth() //요소기준의 마우스위치
    let moveRangeX = container.clientWidth() - el.innerWidth() //큰 이미지가 이동할 수 있는 범위
    let moveX = ratioX * moveRangeX
  
    let offsetY = pageY - container.offset().top
    let ratioY = offsetY / container.clientHeight()
    let moveRangeY = container.clientHeight() - el.clientHeight()
    let moveY = ratioY * moveRangeY
    el.style.left = `${moveX}px` 
    el.style.top = `${moveY}px`

  })

}
document.querySelector('.ex1 figure').addEventListener('mousemove',(e)=>{

})
document.querySelector(`.ex1 figure`).addEventListener('touchmove',(e)=>{
 
})
document.querySelector('.ex1 figure').addEventListener('mouseleave',(e)=>{
    
})
document.querySelector(`.ex1 figure`).addEventListener('touchend',(e)=>{

}) */