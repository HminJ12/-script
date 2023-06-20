{
  let mouseStart
  let isDrag = false
  const fnDrag = (mouseStart, mouseMove) => {
    if (isDrag === true) {
      let diffX = mouseMove - mouseStart //마우스 움직이는 이동량
      if(diffX > 0) diffX = 0
      document.querySelector('.wrap p').style.transform = `translateX(${diffX}px)`
    }
  }

  //마우스 누를 때 할 일
  document.querySelector('.wrap').addEventListener('mousedown', (e) => {
    mouseStart = e.clientX
    isDrag = true
  })
  document.querySelector('.wrap').addEventListener('touchstart', (e) => {
    mouseStart = e.changeTouches[0].clientX
    isDrag = true
  })

  //마우스에서 땠을 때 할 일
  document.querySelector('.wrap').addEventListener('mouseup', (e) => {
    mouseStart = e.clientX
    isDrag = false
  })
  document.querySelector('.wrap').addEventListener('touchend', (e) => {
    mouseStart = e.changeTouches[0].clientX
    isDrag = false
  })

  //마우스 움직일 때 할 일
  document.querySelector('.wrap').addEventListener('mousemove', (e) => {
    fnDrag(mouseStart, e.clientX)
  })
  document.querySelector('.wrap').addEventListener('touchmove', (e) => {
    fnDrag(mouseStart, e.changeTouches[0].clientX)
  })
}