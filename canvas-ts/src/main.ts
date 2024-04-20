const el = document.querySelector<HTMLCanvasElement>('#canvas')!
/* !代表一定存在 */
// const app = el?.getContext('2d') ?代表可能是空
const app = el.getContext('2d')!

// app.fillStyle = 'red'
// app.fillRect(0,0,300,300)

// app.fillStyle = '#27ae60'
// app.fillRect(0,0,100,100)

// app.strokeStyle = '#27ae60'
// app.lineWidth = 20
// app.lineJoin = 'round'
// app.strokeRect(50,50,200,200)

/*
app.fillStyle = '#27ae60'
app.lineWidth = 20
// 画啥
app.arc(100,1000,50,0,2*Math.PI)
// 画
app.stroke()
*/

// app.beginPath()

// app.moveTo(el.width/2,10)

// app.lineTo(el.width -10,250)

// app.lineTo(10,250)

// app.closePath()

// const gradient = app.createLinearGradient(0,0,300,300)
// gradient.addColorStop(0,'#27ae60')
// gradient.addColorStop(0.5,'#e74c3c')
// gradient.addColorStop(1,'#f39c12')

// app.strokeStyle = gradient
// app.lineWidth = 10

// app.fillStyle = gradient

// app.fill()

// app.stroke()


// app.fillStyle = '#34495e'

// app.fillRect(0,0,el.width,el.height)

// app.font = '40px Fira Code Regular Nerd Font'

// app.fillStyle = 'white'
// app.textBaseline = 'top'
// app.fillText('苑畅',50,100)


// 贴图

const img = document.createElement('img')

// 注意看图片路径,跟index.html一个级别的
img.src = './images/1.jpeg'

img.onload = ()=>{
  // console.log(111)
  // document.body.insertAdjacentElement('afterbegin',img)
  const pattern = app.createPattern(img,'repeat')!
  app.fillStyle = pattern
  app.fillRect(0,0,200,300)
} 







