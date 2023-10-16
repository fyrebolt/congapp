//going to need input conversion possibly. like if api works with zip, then do address - > zip, etc
const xhr = new XMLHttpRequest();
let params = {
      "key": "AIzaSyCrxsmm5-hWzIkW2mNmu-cQjWliSW3ZXZk",
      "address": "2725 INTERNATIONAL BLVD OAKLAND",
      // "returnAllAvailableData": True
      // "electionId": "ELECTION_ID"
  }
xhr.open("GET", "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyCrxsmm5-hWzIkW2mNmu-cQjWliSW3ZXZk", params=params);
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    document.getElementById("dave").innerHTML = "d";
  } else {
    console.log(`Error: ${xhr.status}`);
    document.getElementById("dave").innerHTML = `Error: ${xhr.status}`;
  }
};

searchButton = document.getElementById("searchButton")
repsButton.onclick =()=>{
    console.log("clicked")
}
