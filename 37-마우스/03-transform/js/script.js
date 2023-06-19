const fn = (clientX,) => {
  document.querySelectorAll('.ex1 figure img').forEach(img => {
    img.classList.remove('deactive')
    let diffX = clientX - (img.getBoundingClientRect().x + img.clientWidth * 0.5 )
    img.style.transform = `rotateY(${diffX * 0.1}deg)`
  }) //img배열
}


document.querySelector('.ex1').addEventListener('mousemove',(e)=>{
  fn(e.clientX)
})

document.querySelector('.ex1').addEventListener('touchmove',(e)=>{
  fn(e.changeTouches[0].clientX)
})

const fnInit = () => {
  document.querySelectorAll('.ex1 figure img').forEach(img => {
    img.classList.add('deactive')
  }) 
}

document.querySelector('.ex1').addEventListener('mouseleave',(e)=>{
  fnInit()
})

document.querySelector('.ex1').addEventListener('touchend',(e)=>{
  fnInit()
})


//제이쿼리로 변경하기
