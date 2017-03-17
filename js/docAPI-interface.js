// Required items here (if applicable)

//Ready the Docum.
$(document).ready(function() {
    $("#medIssue-search").submit(function(event) {
        event.prevenDefault();
        val medCond = $("#medIssue").val();
        $("#medIssue").val("");
        Doctors.nearby(medCond);
    });

});
