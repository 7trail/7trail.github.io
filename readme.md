<head>
	<link rel="stylesheet" href="mainsite.css">
	<script src="gif.js?v=3"></script>
</head>

<body>
  <h1>anomaly</h1>
  <h2>spiral generator</h2>
  <label for="slider1">Speed:</label>
  <input type="range" id="slider1" min="0" max="3" value="0.2" step="0.1">
  <br>

  <label for="slider2">Spiral Amount:</label>
  <input type="range" id="slider2" min="2" max="24" value="4">
  <br>

  <label for="colorPicker1">Color 1:</label>
  <input type="color" id="colorPicker1" value="#ff0000">
  <br>

  <label for="colorPicker2">Color 2:</label>
  <input type="color" id="colorPicker2" value="#000000">
  <br>
  <button onclick="generateRandomNoise()">Generate Spiral</button>
  <div id="imageContainer"></div>
  <p> test website??? wha?? </p>
</body>

<script>
    const slider1 = document.getElementById('slider1');
    const colorPicker1 = document.getElementById('colorPicker1');
    const slider2 = document.getElementById('slider2');
    const colorPicker2 = document.getElementById('colorPicker2');

	function hexToRgb(hex) {
	    // Remove the hash symbol, if present
	    hex = hex.replace(/^#/, '');
	
	    // Parse the hex value into individual color components
	    var bigint = parseInt(hex, 16);
	    var r = (bigint >> 16) & 255;
	    var g = (bigint >> 8) & 255;
	    var b = bigint & 255;
	
	    // Return the RGB values as an object
	    return [r,g,b];
	}
	
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
    var a = x2 - x1;
    var b = y2 - y1;
    
    var c = Math.sqrt( a*a + b*b );
    return c;
  }

  function angle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    //if (theta < 0) theta = 360 + theta; // range [0, 360)
    return (theta+360) % 360;
  }
  function lerpcolor(clr1,clr2, fac) {
    return [clr1[0]*(1-fac) + clr2[0]*fac,clr1[1]*(1-fac) + clr2[1]*fac,clr1[2]*(1-fac) + clr2[2]*fac];
  }
  function generateRandomNoise() {
  // Create a canvas element
    var gif = new GIF({
	  workers: 2,
	  quality: 10
	});
	var growthFactor = slider1.value;
	var angleFactor = 360.0/slider2.value;
	var hueShiftFactor = -0.1;
	var clr1 = hexToRgb(colorPicker1.value);
	var clr2 = hexToRgb(colorPicker2.value);
	  for (let i = 0; i < 100; i++) {
	    var canvas = document.createElement("canvas");
	    canvas.width = 128;
	    canvas.height = 128;
	    var ctx = canvas.getContext("2d");
	
	    
	    // Generate random noise
	    for (var x = 0; x < 128; x++) {
	      for (var y = 0; y < 128; y++) {
	        var d = getDistance(x,64,y,64);
	        var a = angle(x,y,64,64);
	
	        
	        
	        var dist = ((d/64.0)+(a/angleFactor));
	        
	        var randomValue = Math.floor(Math.random() * 256);
	        var v = i*growthFactor;
		var f = (dist+v);
	        
		var l = (f)%1.0;
	        var clr = lerpcolor(clr1,clr2,l);
		if (l < 0) {
			clr = [0,0,255];
		}
		
	        ctx.fillStyle = "rgb(" + Math.floor(clr[0]) + "," + Math.floor(clr[1]) + "," + Math.floor(clr[2]) + ")";
	        ctx.fillRect(x, y, 1, 1);
	      }
	    }
  	
	
	// or a canvas element
		gif.addFrame(canvas, {delay: 20});
	  }
	gif.on('finished', function(blob) {
	  var image = new Image();
	  image.src = URL.createObjectURL(blob);
	
	  var imageContainer = document.getElementById("imageContainer");
	  imageContainer.innerHTML = '';
	  imageContainer.appendChild(image);
	});
	
	gif.render();
    // Create an image element and set its source to the canvas data URL
    	/*var image = new Image();
	image.src = canvas.toDataURL();
	
	// Append the image to the HTML container
	var imageContainer = document.getElementById("imageContainer");
	imageContainer.innerHTML = '';
	imageContainer.appendChild(image);*/
  }
</script>
