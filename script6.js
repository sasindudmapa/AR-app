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


let avgAccArr = [null]
let veloXArr = [null]  


if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {
      const acceleration = event.acceleration;

      xAccelerationCurrent = acceleration.x
      yAcceleration = acceleration.y
      zAcceleration = acceleration.z

      accelXEle.innerHTML = acceleration.x
    //   accelYEle.innerHTML = acceleration.y
    //   accelZEle.innerHTML = acceleration.z

    if(currentVeloX > 0){
        avgAccArr.push(avgAcceleration)
        veloXArr.push(currentVeloX)
    }
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
    // console.log("current velocity initially is : ", currentVeloX.toFixed(2))
    let avgAcceleration = (xAccelerationPrev + xAccelerationCurrent)/2
    let dX = currentVeloX*timeFrameInSec + (1/2 * avgAcceleration * (timeFrameInSec**2))

    
    

    accelYEle.innerHTML = avgAccArr
    accelZEle.innerHTML = veloXArr


    currentVeloX = currentVeloX + avgAcceleration*timeFrameInSec
    xAccelerationPrev = xAccelerationCurrent



    traveledDistanceX+=dX

    // console.log(`index: ${index}, total distance: ${traveledDistanceX.toFixed(2)}, distance: ${dX.toFixed(2)}, currentVelo: ${currentVeloX.toFixed(2)}, avgAccel: ${avgAcceleration.toFixed(2)}`)

    

    ball.style.left = `${ballPos.x + dX*1000}px`


    distXEle.innerHTML = traveledDistanceX.toFixed(2)




}, timeFrame);

