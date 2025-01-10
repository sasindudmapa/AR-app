const accelXEle = document.getElementById("accelX")
const accelYEle = document.getElementById("accelY")
const accelZEle = document.getElementById("accelZ")

const gyroXEle = document.getElementById("gyroX")
const gyroYEle = document.getElementById("gyroY")
const gyroZEle = document.getElementById("gyroZ")

const distXEle = document.getElementById("distX")


let xAccelerationPrev = 0
let xAccelerationCurrent = 0
let yAcceleration = 0
let zAcceleration = 0

let xGyro = 0
let yGyro = 0
let zGyro = 0


const timeFrame = 50 //50 milliseconds
const timeFrameInSec = timeFrame / 1000
let currentVeloX = 0
let traveledDistanceX = 0

const accels = [2,4,6,-6,-4,-2, -2,-4,-6, 6,4,2, -2,-4,-6, 6,4,2, 2,4,6,-6,-4,-2]

const accels2 = [
    0.98, -1.87, 1.32, -1.45, 0.74, 1.96, -0.82, 1.61, -1.27, 0.11,
    -1.22, 1.75, 0.32, 1.40, -0.63, 1.18, 1.24, -1.73, 0.92, 1.07,
    -0.39, 0.64, -1.93, 0.57, 0.51, -0.47, -1.65, 1.67, -0.08, 1.52,
    0.23, -0.89, 0.88, -0.66, -0.22, 1.50, 0.74, -0.94, 0.11, -1.06,
    1.63, -0.97, 0.18, -1.33, 1.78, 1.41, -0.56, 0.43, 0.95, 1.85
  ]

let index = 0
xAccelerationCurrent = accels2[index]


// if (window.DeviceMotionEvent) {
//     window.addEventListener('devicemotion', function(event) {
//       const acceleration = event.acceleration;

//       xAccelerationCurrent = acceleration.x
//       yAcceleration = acceleration.y
//       zAcceleration = acceleration.z

//       accelXEle.innerHTML = acceleration.x
//       accelYEle.innerHTML = acceleration.y
//       accelZEle.innerHTML = acceleration.z
//     });
// } else {
//     console.log('DeviceMotionEvent is not supported on this device.');
// }
  

// if (window.DeviceOrientationEvent) {
// window.addEventListener('deviceorientation', function(event) {
//     const beta = event.beta; // rotation around the X axis
//     const gamma = event.gamma; // rotation around the Y axis
//     const alpha = event.alpha; // rotation around the Z axis

//     gyroXEle.innerHTML = alpha
//     gyroYEle.innerHTML = beta
//     gyroZEle.innerHTML = gamma
// });
// } else {
//     console.log('DeviceOrientationEvent is not supported on this device.');
// }


const ball = document.getElementById("test-ball")
let ballPos = ball.getBoundingClientRect()
  
let startApp = setInterval(() => {
    console.log("current velocity initially is : ", currentVeloX.toFixed(2))
    let avgAcceleration = (xAccelerationPrev + xAccelerationCurrent)/2
    let dX = currentVeloX*timeFrameInSec + (1/2 * avgAcceleration * (timeFrameInSec**2))


    currentVeloX = currentVeloX + avgAcceleration*timeFrameInSec
    xAccelerationPrev = xAccelerationCurrent
    xAccelerationCurrent = accels2[index]


    traveledDistanceX+=dX

    console.log(`index: ${index}, total distance: ${traveledDistanceX.toFixed(2)}, distance: ${dX.toFixed(2)}, currentVelo: ${currentVeloX.toFixed(2)}, avgAccel: ${avgAcceleration.toFixed(2)}`)

    

    ball.style.left = `${ballPos.x + dX*1000}px`


    distXEle.innerHTML = traveledDistanceX.toFixed(2)


    index < accels2.length - 1 ? index++ : index = 0

}, timeFrame);

function calculateDistance(){

}
