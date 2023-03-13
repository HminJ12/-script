$(document).ready(function(){
  $('.ex1 button').click(function(){
    $('.ex1 button').css({'color':'red'})
  })

  $('.ex2 button').click(function(){
    $('.ex2 .box').css({
      'width' : '100px',
      'height' : '100px',
      'background' : 'red',
      'border-radius' : '50%',
      'text-align' : 'center',
      'line-height' : '100px',
      'color' : 'white'
    })
  })

  $('.ex3 .btn1').click(function(){
    $('.ex3 .box').addClass('tt')
  })

  $('.ex3 .btn2').click(function(){
    $('.ex3 .box').removeClass('tt')
  })

  $('.ex3 .btn3').click(function(){
    $('.ex3 .box').toggleClass('tt')
  })

  $('.ex4 .btn4').click(function(){
    $('.ex4 div').removeClass('tt')
  })

  $('.ex4 .btn5').click(function(){
   $('.ex4 div').addClass('tt')
  })

  $('.ex5 .btn6').click(function(){
    $('.ex5 span').toggleClass('tt')
  })

})