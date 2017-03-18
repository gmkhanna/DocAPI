var apiKey = require("./../.env").apiKey;

var doctorCount;
var showDoctors;

function Doctors() {

}
//
// function searchFunc(medCond) {
//     var splitBio = bio.split(' ');
//     var count = 0;
//
//     for (var i = 0; i < splitBio.length; i++)
//     if (medCond = splitBio[i])
//     {
//         count++;
//     }
//
// }


Doctors.prototype.nearby = function(medicalIssue) {
    $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + medicalIssue + "&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=" + apiKey)
    .then(function(response) {
        var dataArray = response.data;
        var amountDoctors = dataArray.length;
        $('#amount-doctors').text("Doctors total in your area: " + amountDoctors);

        for (var i = 0; i < dataArray.length; i++) {
            $('#name').text(dataArray[i].profile.first_name + " " + dataArray[i].profile.last_name + " " + dataArray[i].profile.title + "<br>" + dataArray[i].profile.bio);
        }
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

// var docArray = [];
// var doctorCount = Object.keys(response.data).length;
//
// response.data.forEach(function(doctor) {
//     showDoctors(medCond);
// });
// // docArray.push(response.data)
//
// console.log(dataArray);
// for (var i = 0; i < amountDoctors; i++)
// var indivDoc = dataArray[i];
// for (var key in indivDoc) {
//     var docInfo = key;
//     var docInfoObj = indivDoc[key];
//     // console.log(label);
//     console.log(docInfoObj);
// $('#doc-info').append("<li>" + "lets see " + docInfo + "</li>");
//
// }
