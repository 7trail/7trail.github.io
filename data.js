const url = "https://stimulatingcomplexdirectories-json-store-1--coder100.repl.co/db/a961b31c-6e2f-498a-93bc-8038431205ee";

	async function getDb(offset="") {
	    return await fetch(url+offset, {
	      method: "GET"
	    }).then(n => n.text());
	  }

	function getData(id) {
		var val = "";
		
		(async () => {
		  db = await getDb("/"+id);
		  val = db;
		})();
		console.log(val);
		return val;
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
