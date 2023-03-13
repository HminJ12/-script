$(document).ready(function(){

  function fn(n,gender){
    var prd_price = parseInt($(`.ex${n} .prd input:checked`).val())
    var option_price = parseInt($(`.ex${n} .option select`).val())
    var cnt = parseInt($(`.ex${n} .cnt input`).val())
    var price = (prd_price + option_price) * cnt
    $(`.ex${n} .output`).html(`${gender}성의류 : ${price}원`)
    return price
  }

  function total(){
    var price1 = fn(1,'남')
    var price2 = fn(2,'여')
    var total_price = price1 + price2
    $('.total').html(`총가격 : ${total_price}원`)
  }

  $('.ex1 .prd input, .ex1 .option select').change(function(){
    total()
  })

  $('.ex1 .cnt input').bind('input',function(){
    total()
  })

  $('.ex2 .prd input, .ex2 .option select').change(function(){
    total()
  })

  $('.ex2 .cnt input').bind('input',function(){
    total()
  })


})