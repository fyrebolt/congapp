const customParams = {
    //"key": os.environ['API_KEY'],
    "address": "2725 INTERNATIONAL BLVD OAKLAND",
    // "returnAllAvailableData": True
    // "electionId": "ELECTION_ID"
}
// Replace with your actual API key
const apiKey = 'AIzaSyCrxsmm5-hWzIkW2mNmu-cQjWliSW3ZXZk';


// Construct the query string with custom parameters
const queryParams = new URLSearchParams(customParams);
const apiUrl = `https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&${queryParams.toString()}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the data returned by the API
    document.getElementById("dave").innerHTML = data;
    // You can access specific information about representatives from the 'data' object
  })
  .catch(error => {
    document.getElementById("dave").innerHTML = 'Error fetching data:' +error;
  });