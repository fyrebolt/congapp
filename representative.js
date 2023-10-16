function loadClient() {
    gapi.client.setApiKey("AIzaSyD-OzrPVgxU-zjXEgWW3LA2xFhTXJJr2uc");
    return gapi.client.load("https://civicinfo.googleapis.com/$discovery/rest?version=v2")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded before calling this method.
  function execute() {
    return gapi.client.civicinfo.representatives.representativeInfoByAddress({
      "address": "Livermore, CA, 94550",
      "levels": [
        "country"
      ],
      "roles": [
        "legislatorLowerBody"
      ]
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log(response.result.officials[0].name);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client");
searchInput = document.getElementById("searchInput")
searchInput.onclick = () => {
    let houseRep = execute().officials[0]
    document.getElementById("houseRep").textContent = houseRep
}
