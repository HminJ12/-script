$(function(){
  function fnScroll(){
    var scrollRange = $(`.scrollbar`).innerWidth() - $(`.scrollbtn`).innerWidth() 
    //스크롤이 가능한 범위

    var scrollBtnX = parseInt($(`.scrollbtn`).css('left')) //스크롤의 현재 위치
    var scrollRatio = scrollBtnX / scrollRange //0~1
    var moveRange = $(`.container`).innerWidth() - $(`.wrap`).innerWidth()  //최대 이동 범위, 움직일 수 있는 범위
    var x = moveRange * scrollRatio
    $(`.wrap`).css({'transform':`translateX(${x}px)`})
  } //비율 구하는 공식

  $(`.scrollbtn`).draggable({
    axis : 'x',
    containment : 'parent',
    drag:function(){fnScroll()},
  })
}) //ready


$(function(){
  function fnScroll(){
    var dragRange = $(`.container2`).innerWidth() - $(`.wrap2`).innerWidth()
    var dragX = parseInt($(`.wrap2`).css('left'))
    var dragRatio = dragX / dragRange
    var moveRange = $(`.scrollbar2`).innerWidth() - $(`.scrollbtn2`).innerWidth()
    var x = moveRange * dragRatio
    $(`.scrollbtn2`).css({'transform':`translateX(${x}px)`})
    
  }

  $(`.wrap2`).draggable({
    axis : 'x',
    containment : 
    [
      $(`.container2`).offset().left - 900,
      $(`.container2`).offset().top + 0, 
      $(`.container2`).offset().left + 0, 
      $(`.container2`).offset().top + 0,
    ], //left, top, right, bottom
    drag : function(){fnScroll()},
  }) //자식이 부모보다 클 때는 배열로 받아야 한다
  /* 
  containment는 문서의 절대 위치인 문서 기준이다
  */

}) //ready

$(function(){
  function fnScrollbarDrag(){
    var dragRange = $(`.scrollbar3`).innerWidth() - $(`.scrollbtn3`).innerWidth()
    var dragX = parseInt($(`.scrollbtn3`).css(`left`))
    var dragRatio = dragX / dragRange
    var moveRange = $(`.container3`).innerWidth() - $(`.wrap3`).innerWidth()
    var x = moveRange * dragRatio
    $(`.wrap3`).css({'left':`${x}px`})
  }

  $(`.scrollbtn3`).draggable({
    containment:'parent',
    drag : function(){fnScrollbarDrag()},
  })

  function fnContainerDrag(){
    var dragRange = $(`.container3`).innerWidth() - $(`.wrap3`).innerWidth()
    var dragX = parseInt($(`.wrap3`).css(`left`))
    var dragRatio = dragX / dragRange
    var moveRange = $(`.scrollbar3`).innerWidth() - $(`.scrollbtn3`).innerWidth()
    var x = moveRange * dragRatio
    $(`.scrollbtn3`).css({'left':`${x}px`})
  }

  function fnSetDrag(){
    $(`.wrap3`).draggable({
      axis : 'x',
      containment : 
      [
        $(`.container3`).offset().left - ($(`.wrap3`).innerWidth() - $(`.container3`).innerWidth()),
        $(`.container3`).offset().top + 0, 
        $(`.container3`).offset().left + 0, 
        $(`.container3`).offset().top + 0,
      ], //left, top, right, bottom
      drag : function(){fnContainerDrag()},
    })
    $(`.wrap3, .scrollbtn3`).css({'left':0})
  }

  fnSetDrag()
  $(window).resize(function(){
    fnSetDrag()
  })


})
/* 
ui가 자동으로 position을 추가해서 안 하는 거다, 
드래그하는 애한테 transform을 적용하면 안 된다 
*/