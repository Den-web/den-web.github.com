$(document).ready(function () {
    $("#video1").mouseenter(function () {
        $("#play").css("background-color", "#fcffb7");
    });
    $("#play").mouseenter(function () {
        $("#play").css("background-color", "#fcffb7");
    });
    $("#video1").click(function () {
        $("#play").css('display', 'none');
    });
    $("#play").click(function () {
        $("#play").css('display' , 'none');
    });
    $("#video1").mouseout(function () {
        $("#play").css("background-color", "white");
    });
});
