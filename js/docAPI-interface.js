// Required items here (if applicable)
var Doctors = require("./../js/docAPI.js").DoctorModule;

// function headLoop() {
//     for (var i = 0; i < headArray.length; i++)
//     $('#ad').fadeIn(headArray[i], 2000);
//     if (headArray[i] = headArray.length - 1) {
//         headArray[i] = 0;
//     }
// }

//Ready the Docum.
$(document).ready(function() {
    $("#caring").delay(1000).fadeIn(3000);
    $("#exp").delay(3000).fadeIn(4000);
    $("#here").delay(5000).fadeIn(4500);
    var DocList = new Doctors();
    $('#medIssue-search').submit(function(event) {
        event.preventDefault();
        $(".name").empty();
        $(".bio").empty();
        var medCond = $('#medIssue').val();
        $('#medIssue').val("");
        DocList.nearby(medCond);

    });

});
