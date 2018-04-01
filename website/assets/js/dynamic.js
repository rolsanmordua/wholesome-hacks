// Use of this Script Requires the Tabletop.js Library. The Calling HTML File must include tabletop.js

// Address of the Google Sheets Database
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1NUWrEA7ma3S3wQFbO7E4q_HWwAjesLswlnK1fHG-4GA/edit?usp=sharing';

function init() {
Tabletop.init( { key: public_spreadsheet_url,
                 callback: showInfo,
                 simpleSheet: true } );
}

window.addEventListener('DOMContentLoaded', init)	// Calls method init when Sheets has loaded

// Method that gets called when data has been pulled from Google Sheets
function showInfo(data) {
    var timestampArray = [];
    var moodArray = [];
    var gratefulArray = [];
    var accompArray = [];
    var accompScaleArray = [];
    var healthyArray = [];
    var improveArray = [];
//    
    var index = 0;
    let count = data.length;
    while (index < count){
        timestampArray.push(data[index]["timestamp"]);
        moodArray.push(data[index]["mood"]);
        gratefulArray.push(data[index]["grateful"]);
        accompArray.push(data[index]["accomp"]);
        accompScaleArray.push(data[index]["accompScale"]);
        healthyArray.push(data[index]["healthy"]);
        improveArray.push(data[index]["improve"]);
        index++;
    }
    populateGrateful(gratefulArray);
    populateAccomplishments(accompArray);
    populateHealthy(healthyArray);
    populateImprove(improveArray);
    populateMood(moodArray);
    
	
}

function populateGrateful(gratefulArray) {
    var gratefullist = '<ul class="unorderedLists">';
    for (var index2 = 0; index2 < gratefulArray.length; index2++){
        gratefullist += "<li>" + gratefulArray[index2] + "</li>";
    }
    gratefullist += "</ul>";
    document.getElementById("gratefullist").innerHTML = gratefullist; 
}

function populateMood(moodArray) {
    var dictionary = {};
    for (var index = 0; index < moodArray.length; index++) {
        if (dictionary[moodArray[index]] == undefined) {
            dictionary[moodArray[index]] = 1;
        } else {
            dictionary[moodArray[index]]++;
        }
    }
    var result = "";
    for (var key in dictionary) {
        result += "<p class='moodItem'>"+key+": " + dictionary[key] + "</p>"
    }
    document.getElementById("grid").innerHTML = result;
}

function populateAccomplishments(accompArray) {
    var accomplist = '<ul class="unorderedLists">';
    for (var index2 = 0; index2 < accompArray.length; index2++){
        accomplist += "<li>" + accompArray[index2] + "</li>";
    }
    accomplist += "</ul>";
    document.getElementById("accomplishlist").innerHTML = accomplist; 
}

function populateHealthy(healthyArray) {
    var healthylist = '<ul class="unorderedLists">';
    for (var index2 = 0; index2 < healthyArray.length; index2++){
        healthylist += "<li>" + healthyArray[index2] + "</li>";
    }
    healthylist += "</ul>";
    document.getElementById("healthylist").innerHTML = healthylist; 
}

function populateImprove(improveArray) {
    var improvelist = '<ul class="unorderedLists">';
    for (var index2 = 0; index2 < improveArray.length; index2++){
        improvelist += "<li>" + improveArray[index2] + "</li>";
    }
    improvelist += "</ul>";
    document.getElementById("improvementlist").innerHTML = improvelist; 
}