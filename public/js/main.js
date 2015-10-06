/*
	Pirate Translation API: The Client

	Client-Side Cheatsheet
	======================
	document.getElementById("id")
	form.elements["name"]
	form.onsumbit = ...
	event.preventDefault()
	inputElement.value
*/


// _____________________________________________________________________________
// Setting up API requests
var pirateEndPoint = "/piratespeak";
var pirateParameters = {
	text: ""
}


// _____________________________________________________________________________
// Getting elements from the DOM
var backgrDiv = document.getElementById("background");
var wrapDiv = document.getElementById("wrap");
backgrDiv.removeChild(wrapDiv);

var clone = wrapDiv.cloneNode(true);
backgrDiv.appendChild(clone);

var formID = clone.querySelector("#translate-form");
var formInput = formID.elements["english-text"];
var pirateText = clone.querySelector("#pirate-text");


// _____________________________________________________________________________
// Setting up the events so that the APIs are called when a query is submitted 
// with the form
function callPirateApi(event) {
	event.preventDefault();

	formInputValue = formInput.value;
	pirateParameters.text = formInputValue;

	// console.log(pirateParameters.text);

	var pirateApiCaller = new ApiCaller(pirateEndPoint, pirateParameters);
	pirateApiCaller.getJson(displayTranslation);
	// console.log(pirateParameters.text);

}
formID.onsubmit = callPirateApi;

function displayTranslation(jsonResponse) {
	// console.log(jsonResponse);
	pirateText.textContent = jsonResponse.translation;

	// console.log(jsonResponse.translation);
	// for (var i = 0; i < jsonResponse.translation.length; i = i + 1) {
		// pirateText.innerHTML or can make each sentence a paragraph

	// }
}
