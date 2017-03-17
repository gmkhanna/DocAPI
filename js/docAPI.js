var apiKey = require("./../.env").apiKey;

function Doctors() {

}


Doctors.prototype.nearby = function(medicalIssue) {
    $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + medicalIssue + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=" + apiKey)
    .then(function(response) {
        // $("#doctors-listed").append("<li>" + response.data.profile.first_name + "</li>");
        console.log("in nearby function");
        console.log(response.data.profile[1]);
    })
    .fail(function(error) {
        $(".doc-display-area").text("<p>" + error.responseJSON.message + "</p>");
    });
};

// Make sure every function which is used is exported to be properly called
exports.DoctorModule = Doctors;
exports.nearby = nearby;
