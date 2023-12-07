<head>
  <link href="/mainsite.css" rel="stylesheet">
</head>

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
    function generateRandomNoise() {
  // Create a canvas element
  var canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  var ctx = canvas.getContext("2d");

  // Generate random noise
  for (var x = 0; x < 128; x++) {
    for (var y = 0; y < 128; y++) {
      var randomValue = Math.floor(Math.random() * 256);
      ctx.fillStyle = "rgb(" + randomValue + "," + randomValue + "," + randomValue + ")";
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
