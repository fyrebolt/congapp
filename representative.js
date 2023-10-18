function loadClient() {
    gapi.client.setApiKey("AIzaSyD-OzrPVgxU-zjXEgWW3LA2xFhTXJJr2uc");
    return gapi.client.load("https://civicinfo.googleapis.com/$discovery/rest?version=v2")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  function fetchImage(wikiLink){
    }

  // Make sure the client is loaded before calling this method.
  function executeCountry(inputLine, searchType) {
    return gapi.client.civicinfo.representatives.representativeInfoByAddress({
      "address": inputLine,
      "levels": [
        "country"
      ],
      "roles": [
        searchType
      ]
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
            if(searchType == "legislatorLowerBody"){
                console.log(response.result.officials[0].name);
                document.getElementById("fedHouseRep").textContent = response.result.officials[0].name 
            }
                
                //fetchImage(response.result.officials[0].urls[1])
                
              },
              function(err) { console.error("Execute error", err); });
  }
function checkEmpty(){
    //does not run search if no input
    const tags = ["address", "city", "state", "zipCode"]
    for(let i = 0; i < tags.length; i++){
        if(document.getElementById(tags[i]).value){
            return true
        }
    }
    return false
}

gapi.load("client");
searchInput = document.getElementById("searchInput")
//bar = document.getElementById("houseRepImage")
searchInput.onclick = () => {
    if(checkEmpty()){
        let inputLine = ""
        const tags = ["address", "city", "state", "zipCode"]
        for(let i = 0; i < tags.length; i++){
            if(document.getElementById(tags[i]).value){
                inputLine += document.getElementById(tags[i]).value
                if(i != (tags.length-1)){
                    // if not last input
                    inputLine += ","
                }
            }
        }
        console.log(inputLine)
        // example house rep
        executeCountry(inputLine,"legislatorLowerBody")
        //window.alert(response.result.officials[0].urls[1])
        document.getElementById("test").textContent = ""
    }
    else{
        window.alert("Location Boxes Empty\nOne Location Input Required")
    }
}
