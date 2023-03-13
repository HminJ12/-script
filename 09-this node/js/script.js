$(function(){

  function fn1(conN,btnN,bg){
    $(`.ex1 .cont${conN} div:nth-of-type(${btnN})`).css({'background': bg})
    $(`.ex1 .cont${conN} div`).not($(`div:nth-of-type(${btnN})`)).css({'background' : 'none'})
  }

  $(`.ex1 .cont1 button`).click(function(){
    var btnN = $(this).text() //클릭한 버튼의 번호 1,2,3
    var bg = $(`.ex1 .cont1 div:nth-of-type(${btnN})`).attr('data-bg') //클릭한 버튼에 해당하는 박스의 data-bg속성 값, red, blue, yellow
    fn1(1,btnN,bg)
  })

  $(`.ex1 .cont2 button`).click(function(){
    var btnN = $(this).val() 
    var bg = $(`.ex1 .cont2 div:nth-of-type(${btnN})`).text()
    fn1(2,btnN,bg)
  })


  function fn2(contN,el){
    $(`.ex2 .cont${contN} div`).css({'background':'none'}) //순서를 잘 지켜야 한다. 앞으로 이렇게 사용할 예정.
    el.css({'background':`red`})
  }

  $('.ex2 .cont1 button').click(function(){
    var el = $(this).next() //이런 방법도 있고
    fn2(1,el)
    //$(`.ex2 .cont1 div`).not($(this).next()).css({'background':'none'})
  })

  $('.ex2 .cont2 button').click(function(){
    fn2(2,$(this).prev()) //이런 방법도 있다.
  })


  function fn3(conN,el){
    $(`.ex3 .cont${conN} div`).not(el).removeClass('t')
    el.toggleClass('t')
  }
  $('.ex3 .cont1 div').click(function(){
    //$(this).prevAll('div').removeClass('t')
    //$(this).nextAll('div').removeClass('t')
    fn3(1,$(this))
  })

  $('.ex3 .cont2 div').click(function(){
    fn3(2,$(this))
  })


  function fn4(conN,el,ell){
    $(`.ex4 .cont${conN} div`).removeClass('t')
    el.addClass('t')
    ell.addClass('t')
  }

  $('.ex4 .cont1 div').click(function(){
    fn4(1,$(this),$(this).prevAll())
  })

  $('.ex4 .cont2 div').click(function(){
    var el = $(this)
    var ell = $(this).nextAll()
    fn4(2,el,ell)
    })

}) //ready