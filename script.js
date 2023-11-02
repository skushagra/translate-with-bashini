const API_URL = "https://bashiniapi-production.up.railway.app/scaler/translate";

// integer reference of the languages as per the api documentation
const LANG = {
    "English": 1,
	"Hindi": 2,
	"Bengali": 3,
    "Gujarati": 4,
    "Kannada": 5,
    "Malayalam": 6,
    "Marathi": 7,
    "Odia": 8,
    "Punjabi": 9,
    "Tamil": 10,
    "Telugu": 11,
    "Assamese": 12,
};

$('#writer').on('input', function() {

    var text = document.getElementById("writer").innerText;
    var _from = document.getElementById("from")
    _from = _from.options[_from.selectedIndex].text;
    var _to = document.getElementById("to")
    _to = _to.options[_to.selectedIndex].text;

    if(text == ""){
        document.getElementById("viewer").innerHTML = "";
    }
    
    if(_from == _to){
        alert("Source and target languages cannot be same.");
        text = "";
        document.getElementById("viewer").innerHTML = "";
    }

    const requestData = {
        source: LANG[_from],
        content: text,
        target: LANG[_to]
    };

    // API call
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("viewer").innerText = data.translated_content;
    })
    .catch((error) => {
        // console.error("Error:", error);
        alert("An error occurred while translating the text." + error);
    });


});
