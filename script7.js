const accelXEle = document.getElementById("accelX")
const accelerations = document.getElementById("accelY")
const velocities = document.getElementById("accelZ")

const gyroXEle = document.getElementById("gyroX")
const gyroYEle = document.getElementById("gyroY")
const gyroZEle = document.getElementById("gyroZ")

const distXEle = document.getElementById("distX")


let xGyro = 0
let yGyro = 0
let zGyro = 0

let accelerationsArry = [0]
let veloXArr = [0]  
let currentVeloX = 0; // Initialize the variable


if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {
      const acceleration = event.acceleration;

      xAccelerationCurrent = acceleration.x
      yAcceleration = acceleration.y
      zAcceleration = acceleration.z

      accelXEle.innerHTML = acceleration.x

        accelerationsArry.push(acceleration.x.toFixed(2))
        veloXArr.push(currentVeloX.toFixed(2))

        accelerations.innerHTML = accelerationsArry.join(", ");
        velocities.innerHTML = veloXArr.join(", ");

        
        
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







