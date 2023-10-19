function loadClient() {
    gapi.client.setApiKey("AIzaSyD-OzrPVgxU-zjXEgWW3LA2xFhTXJJr2uc");
    return gapi.client.load("https://civicinfo.googleapis.com/$discovery/rest?version=v2")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  function fetchImage(wikiLink){
    }
  

  // Make sure the client is loaded before calling this method.
  function execute(level,inputLine, searchType, tagList) {
    return gapi.client.civicinfo.representatives.representativeInfoByAddress({
      "address": inputLine,
      "levels": [
        level
      ],
      "roles": [
        searchType
      ]
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
            for(let tag = 0; tag < tagList.length;tag++){
                
                description = response.result.officials[tag].urls[1];
                description = description.substring(30)
                //console.log(description);
                  fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exchars=600&explaintext&titles=" + description + "&format=json")
                  .then(function(response){return response.json();})
                  .then(function(response) {
                      page = response.query.pages;
                      page[Object.keys(page)[0]]
                      desc = page[Object.keys(page)[0]].extract;
                      descArray = desc.split(".");
                      newDesc = "";
                      //console.log(newDesc)
                      for (i = 0; i < 3; i++) {
                        newDesc += descArray[i] + "."
                      }
                      //console.log(newDesc);
                      document.getElementById(tagList[tag]).innerHTML = newDesc;
                  })
                  .catch(function(error){console.log(error);});

                text = response.result.officials[tag].name;
                //console.log(text);
                document.getElementById(tagList[tag]).innerHTML = "a";
            }
                //logan: might work, change 0 to tag
                //fetchImage(response.result.officials[0].urls[1])
                
              },
              function(err) { console.error("Execute error", err); });
  }
function checkEmpty(tags){
    //does not run search if no input
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
    const tags = ["address", "city", "state", "zipCode"]
    if(checkEmpty(tags)){
        let inputLine = ""
        for(let i = 0; i < tags.length; i++){
            if(document.getElementById(tags[i]).value){
                inputLine += document.getElementById(tags[i]).value
                inputLine+=","
            }
        }
        inputLine = inputLine.slice(0, -1)
        //removes last ,
        console.log(inputLine)
        execute("country",inputLine,"legislatorLowerBody",["fedHouseRep"])
        execute("country",inputLine,"legislatorUpperBody",["fedSenateOne","fedSenateTwo"])
        document.getElementById("test").textContent = ""
    }
    else{
        window.alert("Location Boxes Empty\nOne Location Input Required")
    }
}
