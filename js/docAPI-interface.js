// Required items here (if applicable)
var Doctors = require("./../js/docAPI.js").DoctorModule;

//Ready the Docum.
$(document).ready(function() {
    $('#medIssue-search').submit(function(event) {
        event.preventDefault();
        var medCond = $('#medIssue').val();
        $('#medIssue').val("");
        var DocList = new Doctors();
        DocList.nearby(medCond);
        console.log("in event");
    });
});
