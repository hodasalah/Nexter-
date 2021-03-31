let $window = $(window),
    $document = $(document),
    Body = $("body"),
    Html = $("html"),
    htmlBody = $("html, body"),
    ScrollToTop = $("#Scroll-To-Top");

$(function () {
    "use strict";

    // Scroll to Top Button
    function scrolltopbtn() {
        if ($window.scrollTop() >= 500) {
            ScrollToTop.css("display", "block");
        } else {
            ScrollToTop.css("display", "none");
        }
    }
    scrolltopbtn();
    $window.on("scroll", function () {
        scrolltopbtn();
    });

    ScrollToTop.on("click", function () {
        htmlBody.animate(
            {
                scrollTop: 0,
            },
            1000
        );
    });
});
