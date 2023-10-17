function loadClient() {
    gapi.client.setApiKey("AIzaSyD-OzrPVgxU-zjXEgWW3LA2xFhTXJJr2uc");
    return gapi.client.load("https://civicinfo.googleapis.com/$discovery/rest?version=v2")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  function fetchImage(wikiLink){
    const wikipediaLink = wikiLink; 

    // Define the API endpoint
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(wikipediaLink)}&format=json`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const page = data.parse;
        if (page && page.images && page.images.length > 0) {
        const firstImage = page.images[0];
        // You can use the 'firstImage' variable to construct the image URL.
        return firstImage;
        } else {
        console.log('No images found on the Wikipedia page.');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
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
                document.getElementById("houseRep").textContent = response.result.officials[0].name
              },
              function(err) { console.error("Execute error", err); });
  }


gapi.load("client");
searchInput = document.getElementById("searchInput")
bar = document.getElementByClass("houseRepImage")
searchInput.onclick = () => {
    execute()
    bar.src = fetchImage(response.result.officials[0].urls[1])
}
