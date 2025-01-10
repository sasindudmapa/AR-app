const accelX = document.getElementById("accelX")
const accelY = document.getElementById("accelY")
const accelZ = document.getElementById("accelZ")

const gyroX = document.getElementById("gyroX")
const gyroY = document.getElementById("gyroY")
const gyroZ = document.getElementById("gyroZ")

const distX = document.getElementById("distX")
console.log(distX.innerHTML)

let currentVeloX = 0
let currentTime = new Date().getTime()
let traveledDistanceX = 0


if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {
      const acceleration = event.acceleration;

      currentTime = (new Date().getTime() - currentTime) / 1000

      let dX = currentVeloX*currentTime + (1/2 * acceleration.x * currentTime**2)
      traveledDistanceX = parseFloat((traveledDistanceX + dX).toFixed(2))
      currentVeloX = Math.sqrt(currentVeloX**2 + 2*acceleration.x*dX)

      accelX.innerHTML = acceleration.x
      accelY.innerHTML = acceleration.y
      accelZ.innerHTML = acceleration.z

      distX.innerHTML = traveledDistanceX
      console.log("traveled distance: ", traveledDistanceX)


    });
  } else {
    console.log('DeviceMotionEvent is not supported on this device.');
  }
  

  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
      const beta = event.beta; // rotation around the X axis
      const gamma = event.gamma; // rotation around the Y axis
      const alpha = event.alpha; // rotation around the Z axis
      // console.log('Alpha:', alpha);
      // console.log('Beta:', beta);
      // console.log('Gamma:', gamma);

      gyroX.innerHTML = alpha
      gyroY.innerHTML = beta
      gyroZ.innerHTML = gamma
    });
  } else {
    console.log('DeviceOrientationEvent is not supported on this device.');
  }
  

