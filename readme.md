<head>
	<link rel="stylesheet" href="mainsite.css">
	<script src="gif.js?v=3"></script>
	<script src="spiral.js"></script>
</head>
 
<body>
  <h1>anomaly</h1>
  <h2>spiral generator</h2>
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
  <button onclick="generateRandomNoise()">Generate Spiral</button>
  <div id="imageContainer"></div>
  <p> test website??? wha?? </p>
</body>

<script>

	const url = "https://stimulatingcomplexdirectories-json-store-1--coder100.repl.co/db/a961b31c-6e2f-498a-93bc-8038431205ee";
	async function getDb(offset="") {
	    return await fetch(url+offset, {
	      method: "GET"
	    }).then(n => n.text());
	  }

	function getData(id) {
		(async () => {
		  db = await getDb("/"+id);
		  console.log(db["test"]);
		  return db;
		})();
		return {};
	}

	function postData(id, data) {
		(async () => {
		  await fetch(url+"/"+id, {
		    method: "POST",
		    headers: {
		      "Content-Type": "application/json"
		    },
		    body: JSON.stringify(data)
		  });
		})();
	}

	//Where the real code begins
	
    const slider1 = document.getElementById('slider1');
    const colorPicker1 = document.getElementById('colorPicker1');
    const slider2 = document.getElementById('slider2');
    const colorPicker2 = document.getElementById('colorPicker2');

	
	
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
