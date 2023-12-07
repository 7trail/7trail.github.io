--------------------------
layout: page
title: "control panel"
permalink: /control.html
--------------------------
<head>
	<link rel="stylesheet" href="mainsite.css">
	<script src="gif.js?v=3"></script>
	<script src="spiral.js"></script>
	<script src="data.js"></script>
</head>
 
<body>
  <h1>anomaly</h1>
  <h2>spiral control panel</h2>
  <h3>on this page, you can synchronize and control a spiral that another individual is viewing. share a room code, and you're set. enjoy.</h3>
	<br><br><br>

  <label for="textInput">Enter Room Code:</label>
  <input type="text" id="textInput" placeholder="Type something...">
  <br>
 
  <label for="slider1">Speed:</label>
  <input type="range" id="slider1" min="-1" max="1" value="0.2" step="0.1">
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
  <button onclick="sendSpiral()">Send Updated Spiral</button>
  <div id="imageContainer"></div>
</body>

<script>

	

	//Where the real code begins
    const inputElement = document.getElementById('textInput');
    const slider1 = document.getElementById('slider1');
    const colorPicker1 = document.getElementById('colorPicker1');
    const slider2 = document.getElementById('slider2');
    const colorPicker2 = document.getElementById('colorPicker2');

	function sendSpiral() {
		//generateRandomNoise(slider1.value,slider2.value,colorPicker1.value,colorPicker2.value);
		postData("data/"+inputElement.value,{
			"sl1":slider1.value,
			"sl2":slider2.value,
			"picker1":colorPicker1.value,
			"picker2":colorPicker2.value
		});
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
  
</script>
