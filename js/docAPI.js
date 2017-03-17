var apiKey = require("./../.env").apiKey;

function Doctors() {

}

var doctorCount;
var firstNames;


Doctors.prototype.nearby = function(medicalIssue) {
    $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + medicalIssue + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=" + apiKey)
    .then(function(response) {
        var doctorCount = Object.keys(response.data).length;

        console.log(doctorCount);

        for (var i = 0; i <= doctorCount; i++)
        {
            return firstNames = response.data[i].profile.first_name;
            console.log(firstNames);
        }
        $('#amount-doctors').text("You have " + doctorCount + " doctors in your area who can attend to you.");
    })
    .fail(function(error) {
        $(".doc-display-area").text("failed!");
        console.log("in fail of API");
    });
};

// Make sure every function which is used is exported to be properly called
exports.DoctorModule = Doctors;
exports.nearby = Doctors.nearby;
exports.doctorCount = doctorCount;
