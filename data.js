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
