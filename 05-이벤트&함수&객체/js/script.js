$(document).ready(function(){
  function fn1(num1,num2){
    var num1 = parseInt(num1)
    var num2 = parseInt(num2)
    var sum = num1 + num2
    var sub = num1 - num2
    var multi = num1 * num2
    var divide = (num1 / num2).toFixed(2)
    var obj = {
      sum,
      sub,
      multi,
      divide
    }
    return obj
  }
  $('.section1 .article1 button').click(function(){
    var num1 = $('.section1 .article1 .p1 input:checked').val()
    var num2 = $('.section1 .article1 .p2 input:checked').val()
    var obj = fn1(num1,num2)
    $('.section1 .article1 .output').text(`
    더하기:${obj.sum},빼기:${obj.sub},곱하기:${obj.multi},나누기:${obj.divide}
    `)
  })

  $('.section1 .article2 button').click(function(){
    var num1 = $('.section1 .article2 .p1 input:checked').val()
    var num2 = $('.section1 .article2 .p2 input:checked').val()
    var {sum,sub,multi,divide} = fn1(num1,num2)
    $('.section1 .article2 .output').text(`
    더하기:${sum}, 
    빼기:${sub}, 
    곱하기:${multi},
    나누기:${divide}
    `)
  })


  $('.ex2 input').bind('input',function(){
    var num1 = $('.ex2 .num1').val()
    var num2 = $('.ex2 .num2').val()
    var sum = parseInt(num1) + parseInt(num2)
    $('.ex2 b').text(sum)
  })

  function fn3(){
    var num1 = parseInt($('.ex3 .num').val())
    var num2 = parseInt($('.ex3 .radios input:checked').val())
    var num3 = parseInt($('.ex3 select').val())
    var sum = num1 + num2 + num3
    var sub = num1 - num2 - num3
    var multi = num1 * num2 * num3
    $('.ex3 .output').text(`
    ${sum},
    ${sub},
    ${multi}`)
    
  }

  $('.ex3 .num').bind('input',function(){
    fn3()
  })

  $('.ex3 .radios input, .ex3 select').change(function(){
    fn3()
  })


  function fn4(){
    var num1 = parseInt($('.ex4 .prd1 .radio1 input:checked').val())
    var num2 = parseInt($('.ex4 .prd1 select').val())
    var num3 = parseInt($('.ex4 .prd1 .p3').val())
    var num4 = parseInt($('.ex4 .prd2 .radio2 input:checked').val())
    var num5 = parseInt($('.ex4 .prd2 select').val())
    var num6 = parseInt($('.ex4 .prd2 .p4').val())
    var sum1 = (num1+num2)*num3 
    var sum2 = (num4+num5)*num6
    var fin = sum1 + sum2
    var obj = {
      sum1, sum2,
    }
    
    $('.ex4 .prd1 .output').text(`${sum1}원`)
    $('.ex4 .prd2 .output').text(`${sum2}원`)
    $('.ex4 .total').text(`총가격 ${fin}원`)
  
    return obj
   
  }


  $('.ex4 .prd1 .radio1 input, .ex4 .prd1 select').change(function(){
    var {sum1} = fn4()
    
  })

  $('.ex4 .prd1 .p3').bind('input',function(){
    var {sum1} = fn4()
    
  })

  $('.ex4 .prd2 .radio2 input, .ex4 .prd2 select').change(function(){
    var {sum2} = fn4()
    
  })

  $('.ex4 .prd2 .p4').bind('input',function(){
    var {sum2} = fn4()
    
  })




}) //ready