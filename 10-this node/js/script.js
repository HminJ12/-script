$(function(){
  
  function func1(contN, el1, el2){
    $(`.ex1 .cont${contN} div`).removeClass('active')
    el1.addClass('active') 
    el2.addClass('active') 
  }

  $('.ex1 .cont1 div').click(function(){
    func1(1, $(this), $(this).prev('div'))
  })

  $('.ex1 .cont2 div').click(function(){

   /*  
    $(`.ex1 .cont2 div`).removeClass('active')
    $(this).addClass('active') 
    $(this).next('div').addClass('active') 
    */

    func1(2, $(this), $(this).next('div'))
  })

  $('.ex1 .cont3 div').click(function(){
    $(this).toggleClass('active')
    $(`.ex1 .cont3 div`).not($(this)).removeClass('active')
  })

  function func2(el,contN,style){
    var {css, init, active} = style
    $(`.ex2 .cont${contN} button`).css({[css] : init})
    el.siblings('button').css({[css] : active})
  }

  $(`.ex2 .cont1 button`).click(function(){
    var obj = {
      css : 'color',
      init : '#000',
      active : 'red'
    }
    func2($(this),1,obj)
    /* 
    $(`.ex2 .cont1 button`).css({'color':`#000`})
    $(this).siblings('button').css({'color':`red`}) 
    */
  })

  $(`.ex2 .cont2 button`).click(function(){
    /* 
    $(`.ex2 .cont2 button`).css({'font-weight':'normal'})
    $(this).siblings('button').css({'font-weight':'bold'}) 
    */
    var obj = {
      css : 'font-weight',
      init : 'normal',
      active : 'bold'
    }
    func2($(this),2,obj)
  })


  function func3(contN,el,style){
    var {css,init,active} = style
    $(`.ex${contN} button`).css({[css]:init})
    el.parent().siblings('article').children('button').css({[css]:active})
  }

  $(`.ex3 button`).click(function(){
    var obj = {
      css : 'color',
      init : 'black',
      active : 'red'
    }
    func3(3,$(this),obj)
  })

  $(`.ex4 button`).click(function(){
    var obj = {
      css : 'font-weight',
      init : 'normal',
      active : 'bold'
    }
    func3(4,$(this),obj)
  })

})