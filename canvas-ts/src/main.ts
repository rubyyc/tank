const el = document.querySelector<HTMLCanvasElement>('#canvas')!
/* !代表一定存在 */
// const app = el?.getContext('2d') ?代表可能是空
const app = el.getContext('2d')!

app.fillStyle = 'red'
app.fillRect(0,0,300,300)

app.fillStyle = '#27ae60'
app.fillRect(0,0,100,100)
