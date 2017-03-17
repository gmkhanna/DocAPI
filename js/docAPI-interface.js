// Required items here (if applicable)
var Doctors = require("./../js/docAPI.js").DoctorModule;

//Ready the Docum.
$(document).ready(function() {
    event.prevenDefault();
    $("#search-button").submit(function(event) {
        var medCond = $("#medIssue").val();
        $("#medIssue").val("");
        var DocList = new Doctors();
        DocList.nearby(medCond);
    });

});
