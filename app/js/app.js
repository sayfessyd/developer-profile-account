$(document).ready(function () {

    $('form').trigger("reset");

    $(".item").click(function () {
        /* Hide current form */
        $(".form").hide();
        /* Item highlight */
        $(".active").not(".var").addClass('secondary');
        $(".active").removeClass('active');
        $(this).removeClass('secondary');
        $(this).addClass('active');
        /* Hide sidebar for mobile screen */
        if (window.matchMedia("(max-width: 1200px)").matches) {
            $(".sidebar").css("transform", "translateX(-275px)");
            $("body").css("touch-action", "auto");
        }
    });

    $(".profile").click(function () {
        /* Hide current form */
        $(".form").hide();
        /* Item highlight */
        $(".active").not(".var").addClass('secondary');
        $(".active").removeClass('active');
        $("#personal-item").removeClass('secondary');
        $("#personal-item").addClass('active');
        /* Hide sidebar for mobile screen */
        if (window.matchMedia("(max-width: 1200px)").matches) {
            $(".sidebar").css("transform", "translateX(-275px)");
            $("body").css("touch-action", "auto");
        }
        /* Show personal form */
        $("#personal-tab").fadeIn();
    });

    $("#email-item").click(function () {
        /* Show email form */
        $("#email-tab").fadeIn();
    });

    $("#personal-item").click(function () {
        /* Show personal form */
        $("#personal-tab").fadeIn();
    });

    $(".arrow, .button").click(function () {
        if ($(".sidebar").css("transform") == "matrix(1, 0, 0, 1, 0, 0)") {
            $(".sidebar").css("transform", "translateX(-275px)")
            $("body").css("touch-action", "auto");
        } else if ($(".sidebar").css("transform") == "matrix(1, 0, 0, 1, -275, 0)") {
            $(".sidebar").css("transform", "translateX(0px)");
            $("body").css("touch-action", "none"); // problems with fixed elements (100% Height) when scrolling with chrome for mobiles.
        }
    });

    $('input').focus(function () {
        $(this).parents('.form-group').addClass('focused');
        $(this).siblings(".form-line").css("border-color", "#202020");
    });

    $('input').blur(function () {
        if ($(this).val() == "") {
            $(this).parents('.form-group').removeClass('focused');
            $(this).css("border-color", "#f7f7f7");
        }
        $(this).siblings(".form-line").css("border-color", "#f7f7f7");
    });

    $('input').keyup(function () {
        $(this).css("border-color", "#ffffff");
        $(this).siblings(".form-hidden").html($(this).val());
        var control = $(this).siblings(".form-hidden").get(0);
        $(this).siblings(".form-line").css("width", control.getBoundingClientRect(control).width + "px");
    });

    $(".form-label").click(function () {
        $(this).siblings('.form-input').focus();
    });

});