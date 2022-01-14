//nav mobile

$(function() {
    $(".toggle").on("click", function() {
        if ($(".nav-overlay").hasClass("active")) {
            $(".nav-overlay").removeClass("active");
            $("body").removeClass("stop-scrolling");
            $(".icon").toggleClass('open');
        } else {
            $(".nav-overlay").addClass("active");
            $("body").addClass("stop-scrolling");
            $(".icon").toggleClass('open');
        }
    });
});

$(window).resize(function() {
    if ($(window).width() > 767) {
        $(".nav-overlay").removeClass("active");
    }
});

//topBtn scrolling

var showTopBtn = function() {
    var topBtn = document.getElementById('topBtn');
    var y = window.window.pageYOffset;
    if (y > 100){
        $('#topBtn').fadeIn(100);
        $('#topBtn').css('display', 'flex');
    } else {
        $('#topBtn').fadeOut(100);
    }
};

window.addEventListener('scroll', showTopBtn);