
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

	function mod(n, m) {
	  return ((n % m) + m) % m;
	}
  function generateRandomNoise(sl1,sl2,picker1,picker2,width=512,height=512) {
  // Create a canvas element
    var gif = new GIF({
	  workers: 2,
	  quality: 10
	});
	var growthFactor = sl1 * 0.1;
	var angleFactor = 360.0/sl2;
	var hueShiftFactor = -0.1;
	var clr1 = hexToRgb(picker1);
	var clr2 = hexToRgb(picker2);
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
	        
		var l = mod(f,1.0);
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
	  image.width = width;
	  image.height = height;
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
