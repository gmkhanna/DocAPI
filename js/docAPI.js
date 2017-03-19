var apiKey = require("./../.env").apiKey;

var doctorCount;
var showDoctors;

function Doctors() {

}


var nameList = [];
var specList = [];
var pracList = [];

Doctors.prototype.nearby = function(medicalIssue) {
    $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + medicalIssue + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=" + apiKey)
    .then(function(response) {
        var dataArray = response.data;
        var amountDoctors = dataArray.length;
        $('#amount-doctors').text(amountDoctors);

        for (var i = 0; i < dataArray.length; i++) {
            nameList.push(dataArray[i].profile.first_name + " " + dataArray[i].profile.last_name + " " + dataArray[i].profile.title);
            specList.push(dataArray[i].specialties[0].description);
            pracList.push(dataArray[i].specialties[0].name);
        }
        for (var i = 0; i < nameList.length; i++) {
            $('.name').append("<h3>" + nameList[i] + "</h3>" + "<hr>");
            $('.bio').append("<ul>" + "<li>" + "Practice: " + pracList[i] + " - " + specList[i] + "</li>" + "<hr>");
            // $('.spec').append("<p>" + specList[i] + "</p>");
        }
    })
    .fail(function(error) {
        $(".doc-display-area").append(error.responseJSON.message);
    });
};

// Make sure every function which is used is exported to be properly called
exports.DoctorModule = Doctors;
exports.nearby = Doctors.nearby;
exports.doctorCount = doctorCount;
exports.nameList = nameList;
exports.specList = specList;
