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
                repName = response.result.officials[tag].name;
                
                descriptionLink = response.result.officials[tag].urls[1];
                if(descriptionLink != undefined){
                  description = descriptionLink.substring(30)
                  fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exchars=600&explaintext&titles=" + description + "&format=json")
                  .then(function(response2){return response2.json();})
                  .then(function(response2) {
                      repName = response.result.officials[tag].name;
                      console.log(repName)
                      page = response2.query.pages;
                      page[Object.keys(page)[0]]
                      desc = page[Object.keys(page)[0]].extract;
                      descArray = desc.split(". ");
                      newDesc = "";
                      //console.log(newDesc)
                      for (i = 0; i < 3; i++) {
                        if (i < descArray.length){
                        newDesc += descArray[i] + ". "
                        }
                      }
                      document.getElementById(tagList[tag]).innerHTML = "Name: " + repName +"<br>Description: "+newDesc;
                  })
                  .catch(function(error){
                    console.log(error);
                    
                  });
                }
                //place .gov info here
                repUrlLink = response.result.officials[tag].urls[0]
                document.getElementById(tagList[tag]).innerHTML = "Name: " + repName +"<br>Description: <a href=" + repUrlLink + " target=_blank>" + repUrlLink + "</a>"
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
