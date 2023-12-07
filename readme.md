<body>
  <h1>anomaly</h1>
  <h2>spiral generator</h2>
  <button onclick="generateRandomNoise()">Generate Random Noise Image</button>
  <div id="imageContainer"></div>
  <p> test website??? wha?? </p>
</body>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Find the div with the class 'wrapper'
    var wrapperDiv = document.querySelector('.wrapper');

    // Check if the wrapperDiv is found
    if (wrapperDiv) {
        // Find and remove the header element within the wrapper
        var headerElement = wrapperDiv.querySelector('header');
        if (headerElement) {
            headerElement.remove();
        }

        // Find and remove the footer element within the wrapper
        var footerElement = wrapperDiv.querySelector('footer');
        if (footerElement) {
            footerElement.remove();
        }
    }
});
  function getDistance(x1,x2,y1,y2) {
    var a = x1 - x2;
    var b = y1 - y2;
    
    var c = Math.sqrt( a*a + b*b );
    return c;
  }

  function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return theta;
  }
  function lerpcolor(clr1,clr2, fac) {
    return [clr1[0]*(1-fac) + clr2[0]*fac,clr1[1]*(1-fac) + clr2[1]*fac,clr1[2]*(1-fac) + clr2[2]*fac];
  }
  function generateRandomNoise() {
  // Create a canvas element
    var canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    var ctx = canvas.getContext("2d");

    var growthFactor = 0.2;
    var hueShiftFactor = -0.1;
    
    // Generate random noise
    for (var x = 0; x < 128; x++) {
      for (var y = 0; y < 128; y++) {
        var d = getDistance(x,64,y,64);
        var a = angle(x,y,64,64);

        var angleFactor = 90.0;
        
        var dist = ((d/64.0)+(a/angleFactor));
        
        var randomValue = Math.floor(Math.random() * 256);
	var i = 0;
        var v = i*growthFactor;
	var f = (dist+v);
        var f2 = (dist+v*hueShiftFactor);
        

        var clr = lerpcolor([255, 156, 175],[92, 0, 18],1-((f2+1)%1));
        ctx.fillStyle = "rgb(" + Math.floor(clr[0]) + "," + Math.floor(clr[1]) + "," + Math.floor(clr[2]) + ")";
        ctx.fillRect(x, y, 1, 1);
      }
    }
  
    // Create an image element and set its source to the canvas data URL
    var image = new Image();
    image.src = canvas.toDataURL();
  
    // Append the image to the HTML container
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = '';
    imageContainer.appendChild(image);
  }
</script>
