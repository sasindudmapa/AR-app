const accels = [
    0.98, -1.87, 1.32, -1.45, 0.74, 1.96, -0.82, 1.61, -1.27, 0.11,
    -1.22, 1.75, 0.32, 1.40, -0.63, 1.18, 1.24, -1.73, 0.92, 1.07,
    -0.39, 0.64, -1.93, 0.57, 0.51, -0.47, -1.65, 1.67, -0.08, 1.52,
    0.23, -0.89, 0.88, -0.66, -0.22, 1.50, 0.74, -0.94, 0.11, -1.06,
    1.63, -0.97, 0.18, -1.33, 1.78, 1.41, -0.56, 0.43, 0.95, 1.85
  ]
const timeFrame = 50 //50 milliseconds
let traveledDistanceX = 0
let currentVeloX = 0


// const accels2 = [2,4,6,0,0,0,-3,-1,-8,-13, -3, -4, -6, -8]
const accels2 = [2,4,6,-6,-4,-2, -2,-4,-6, 6,4,2, -2,-4,-6, 6,4,2, 2,4,6,-6,-4,-2]
let index = 0
let timeFrameInSec = timeFrame / 1000


const ball = document.getElementById("test-ball")
let ballPos = ball.getBoundingClientRect()
console.log(ballPos)

let startApp = setInterval(() => {
    // let index = Math.floor(Math.random() * accels.length) 
    let curAccel = accels2[index]
    let dX = currentVeloX*timeFrameInSec + (1/2*curAccel*(timeFrameInSec**2)) //distance in meters
    // currentVeloX = Math.sqrt(currentVeloX**2 + 2 * curAccel * dX)
    // console.log(" velocity: ", currentVeloX.toFixed(2))
    currentVeloX = 2*dX/timeFrameInSec - currentVeloX
    // console.log("current velocity is ", currentVeloX)

    ball.style.left = `${ballPos.x + dX*10000}px`

    traveledDistanceX+=dX


    // console.log("distance: ", traveledDistanceX.toFixed(2), " acceleration: ", curAccel, " dx: ", dX.toFixed(2))

    index < accels2.length - 1 ? index++ : index = 0
}, timeFrame);