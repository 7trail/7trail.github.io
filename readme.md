<head>
  <link href="/mainsite.css" rel="stylesheet">
</head>

<body>
  
  <button id="downloadButton">Download Empty Text File</button>
  <p> test website??? wha?? </p>
</body>

<script>
    document.getElementById('downloadButton').addEventListener('click', function () {
        downloadEmptyTextFile();
    });

    function downloadEmptyTextFile() {
        // Create a Blob containing an empty text file
        var blob = new Blob(['TEST'], { type: 'text/plain' });

        // Create a link element
        var link = document.createElement('a');

        // Set the download attribute with the desired file name
        link.download = 'empty_file.txt';

        // Create a URL for the Blob and set it as the href attribute of the link
        link.href = window.URL.createObjectURL(blob);

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click event on the link to start the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    }
</script>
