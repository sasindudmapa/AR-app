if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function(event) {
      const acceleration = event.acceleration;
      console.log('Acceleration X:', acceleration.x);
      console.log('Acceleration Y:', acceleration.y);
      console.log('Acceleration Z:', acceleration.z);
    });
  } else {
    console.log('DeviceMotionEvent is not supported on this device.');
    alert("doesnt support")
  }
  

  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
      const beta = event.beta; // rotation around the X axis
      const gamma = event.gamma; // rotation around the Y axis
      const alpha = event.alpha; // rotation around the Z axis
      console.log('Alpha:', alpha);
      console.log('Beta:', beta);
      console.log('Gamma:', gamma);
    });
  } else {
    console.log('DeviceOrientationEvent is not supported on this device.');
    alert("doesnt support")

  }
  