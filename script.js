const accelX = document.getElementById("accelX")
const accelY = document.getElementById("accelY")
const accelZ = document.getElementById("accelZ")



const gyroX = document.getElementById("gyroX")
const gyroY = document.getElementById("gyroY")
const gyroZ = document.getElementById("gyroZ")



const distXEle = document.getElementById("distX")
console.log(distX.innerHTML)

let currentVeloX = 0
let prevTime = new Date().getTime()
let traveledDistanceX = 0


if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {
      const acceleration = event.acceleration;



      accelX.innerHTML = acceleration.x
      accelY.innerHTML = acceleration.y
      accelZ.innerHTML = acceleration.z


    });
  } else {
    console.log('DeviceMotionEvent is not supported on this device.');
  }
  

  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
      const beta = event.beta; // rotation around the X axis
      const gamma = event.gamma; // rotation around the Y axis
      const alpha = event.alpha; // rotation around the Z axis

      gyroX.innerHTML = alpha
      gyroY.innerHTML = beta
      gyroZ.innerHTML = gamma
    });
  } else {
    console.log('DeviceOrientationEvent is not supported on this device.');
  }
  

