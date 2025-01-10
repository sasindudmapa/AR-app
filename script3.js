const accelXEle = document.getElementById("accelX")
const accelYEle = document.getElementById("accelY")
const accelZEle = document.getElementById("accelZ")

const gyroXEle = document.getElementById("gyroX")
const gyroYEle = document.getElementById("gyroY")
const gyroZEle = document.getElementById("gyroZ")

const distXEle = document.getElementById("distX")


let xAcceleration = 0
let yAcceleration = 0
let zAcceleration = 0

let xGyro = 0
let yGyro = 0
let zGyro = 0


const timeFrame = 50 //50 milliseconds
const timeFrameInSec = timeFrame / 1000
let currentVeloX = 0
let traveledDistanceX = 0


if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {
      const acceleration = event.acceleration;

      xAcceleration = acceleration.x
      yAcceleration = acceleration.y
      zAcceleration = acceleration.z

      accelXEle.innerHTML = acceleration.x
      accelYEle.innerHTML = acceleration.y
      accelZEle.innerHTML = acceleration.z
    });
  } else {
    console.log('DeviceMotionEvent is not supported on this device.');
  }
  

if (window.DeviceOrientationEvent) {
window.addEventListener('deviceorientation', function(event) {
    const beta = event.beta; // rotation around the X axis
    const gamma = event.gamma; // rotation around the Y axis
    const alpha = event.alpha; // rotation around the Z axis

    gyroXEle.innerHTML = alpha
    gyroYEle.innerHTML = beta
    gyroZEle.innerHTML = gamma
});
} else {
    console.log('DeviceOrientationEvent is not supported on this device.');
}


const ball = document.getElementById("test-ball")
let ballPos = ball.getBoundingClientRect()
  
let startApp = setInterval(() => {
    let dX = currentVeloX*timeFrameInSec + (1/2*xAcceleration*(timeFrameInSec**2)) //distance in meters
    currentVeloX = 2*dX/timeFrameInSec - currentVeloX

    ball.style.left = `${ballPos.x + dX*10000}px`

    traveledDistanceX+=dX

    distXEle.innerHTML = traveledDistanceX.toFixed(2)

}, timeFrame);


