// Required items here (if applicable)
var Doctors = require("./../js/docAPI.js").DoctorModule;

//variables
// var showDoctors = function (doctor) {
//     $('#doc-info').append("<li>" + doctor.profile.first_name + "</li>");
// };

// console.log(showDoctors());

//Ready the Docum.
$(document).ready(function() {
    var DocList = new Doctors();
    $('#medIssue-search').submit(function(event) {
        event.preventDefault();
        var medCond = $('#medIssue').val();
        $('#medIssue').val("");
        DocList.nearby(medCond);
    });

});
