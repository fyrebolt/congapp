function loadClient() {
    if(!(localStorage.getItem("loggedIn")=="yes" || sessionStorage.getItem("guest")=="yes")){
        window.location.href = "index.html";
    }
    if(sessionStorage.getItem("guest")!="yes"){
        email = localStorage.getItem("user")
        user = email.replaceAll(".","").replaceAll("#","").replaceAll("$",'').replaceAll("[","").replaceAll("]","")
        user = user.substring(0,user.indexOf("@"))
        database.ref(user+'/status').once('value').then((snapshot)=>{ 
            if(snapshot.val().surveyed==false && window.location.href != "https://fyrebolt.github.io/congapp/setup.html"){
                window.location.href= "setup.html"
            }
            if(snapshot.val().surveyed==true && window.location.href == "https://fyrebolt.github.io/congapp/setup.html"){
                window.location.href= "profile.html"
            }
        })
    }
    gapi.client.setApiKey("AIzaSyD-OzrPVgxU-zjXEgWW3LA2xFhTXJJr2uc");
    return gapi.client.load("https://civicinfo.googleapis.com/$discovery/rest?version=v2")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  async function fetchImage(description, TAG){
      fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=pageimages&format=json&piprop=original&titles=" + description)
                    .then(function(response){return response.json();})
                    .then(function(response) {
                    console.log(response);
                        var pages = response.query.pages;
                        img = pages[Object.keys(pages)[0]].original.source;
                        document.getElementById(TAG).innerHTML = "<img  width =150px src=\"" + img + "\">" 
                    })
                    .catch(function(error){console.log(error);});
    }
  async function fetchDescription(description,TAG,repName){
    fetch("https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exchars=600&explaintext&titles=" + description + "&format=json")
                  .then(function(response2){return response2.json();})
                  .then(function(response2) {
                    //gets description
                      
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
                      document.getElementById(TAG + "Description").innerHTML ="Description: "+newDesc;
                  })
                  .catch(function(error){
                    console.log(error);
                    
                  });
  }
  

  // Make sure the client is loaded before calling this method.
  async function execute(level,inputLine, searchType, tagList) {
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
                repGovLink = response.result.officials[tag].urls[0]
                descriptionLink = response.result.officials[tag].urls[1];
                if(descriptionLink != undefined){
                  //have wiki link
                  //gets image from wiki
                  description = descriptionLink.substring(30)
                  fetchImage(description, tagList[tag] + "Image")
                  fetchDescription(description,tagList[tag],repName)
                }
                else{
                  //place .gov info here
                }
                //basic stuff for every rep
                document.getElementById(tagList[tag]).innerHTML = repName;
                document.getElementById(tagList[tag]+"Contact").innerHTML ="Contact Link: <a href=" + repGovLink + " target=_blank>" + repGovLink + "</a>"
                
                
            }
                
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
function checkIfAll(tags){
    for(let i = 0; i < tags.length; i++){
        if(document.getElementById(tags[i]).value == false){
            return false
        }
    }
    return true
}
function checkIfAddressCityZip(){
    const tags = ["address", "city", "zipCode"]
    for(let i = 0; i < tags.length; i++){
        if(document.getElementById(tags[i]).value){
            return true
        }
    }
    return false
}
function checkIfAddressCity(){
    if(document.getElementById("address").value || document.getElementById("city").value){
        return true                                                                      
    }
    return false
}
function resetAll(){
    //reset all disabled
    const tags = ["president","vicePresident","fedHouseRep","fedSenateOne","fedSenateTwo","governor","lieutenantGovernor","stateHouseRep","stateSenator"]
    for(let i = 0; i < tags.length; i++){
        document.getElementById(tags[i]).textContent = ""
        document.getElementById(tags[i] + "Contact").textContent = ""
        document.getElementById(tags[i] + "Image").textContent = ""
        document.getElementById(tags[i] + "Description").textContent = ""
    }
}

gapi.load("client");
searchInput = document.getElementById("searchInput")
searchInput.onclick = () => {
    resetAll()
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
        // calling all calls
        //need bad input catch + visibility 
        execute("country",inputLine,"headOfGovernment",["president"])
        execute("country",inputLine,"deputyHeadOfGovernment",["vicePresident"])
        execute("administrativeArea1",inputLine,"headOfGovernment",["governor"])
        execute("administrativeArea1",inputLine,"deputyHeadOfGovernment",["lieutenantGovernor"])
        if(checkIfAll(tags)){
            //all input boxes full
            execute("administrativeArea1",inputLine,"legislatorUpperBody",["stateSenator"])
            execute("administrativeArea1",inputLine,"legislatorLowerBody",["stateHouseRep"])
        }
        if(checkIfAddressCityZip()){
            execute("country",inputLine,"legislatorUpperBody",["fedSenateOne","fedSenateTwo"])
        }
        if(checkIfAddressCity()){
            execute("country",inputLine,"legislatorLowerBody",["fedHouseRep"])
        }
        
    }
    else{
        window.alert("Location Boxes Empty\nOne Location Input Required")
    }
}
