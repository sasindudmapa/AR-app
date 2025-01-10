let previousAcceleration = { x: null, y: null, z: null };
let totalDistance = { x: 0, y: 0, z: 0 };
const sensitivity = 0.02; // Adjust sensitivity to ignore small movements

function calculateDistance(a1, a2) {
  if (a1 !== null && a2 !== null) {
    return Math.abs(a2 - a1);
  }
  return 0;
}

function handleMotionEvent(event) {
  const { x, y, z } = event.accelerationIncludingGravity;

  if (x !== null && y !== null && z !== null) {
    if (previousAcceleration.x !== null) {
      totalDistance.x += calculateDistance(previousAcceleration.x, x);
      totalDistance.y += calculateDistance(previousAcceleration.y, y);
      totalDistance.z += calculateDistance(previousAcceleration.z, z);
    }

    previousAcceleration = { x, y, z };

    // Display the total distance moved on each axis
    document.getElementById("output").innerText = `
      Moved Distance:
      X: ${totalDistance.x.toFixed(2)} meters
      Y: ${totalDistance.y.toFixed(2)} meters
      Z: ${totalDistance.z.toFixed(2)} meters
    `;
  }
}

// Request device motion access (required on iOS devices)
if (window.DeviceMotionEvent) {
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    document.body.addEventListener("click", async () => {
      const permission = await DeviceMotionEvent.requestPermission();
      if (permission === "granted") {
        window.addEventListener("devicemotion", handleMotionEvent);
      } else {
        alert("Permission denied. Cannot access device motion data.");
      }
    });
  } else {
    window.addEventListener("devicemotion", handleMotionEvent);
  }
} else {
  document.getElementById("output").innerText =
    "Device Motion API is not supported on your device.";
}