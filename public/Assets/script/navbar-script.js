var sec1 = $("#why-us").offset().top;

$(document).scroll(() => {
    let reached = false;
    var scrollPos = $(document).scrollTop();

    if (scrollPos > sec1 - 77) {
        $("nav").addClass("navbar-light");
        $("nav").removeClass("navbar-dark");
        $("nav").addClass("bg-light");
        $("nav").removeClass("nav-old");
        $("nav").addClass("nav-new");
        $("button").removeClass("btn-old");
        $("button").addClass("btn-new");


    } else if (scrollPos < sec1 - 77) {
        $("nav").addClass("navbar-dark");
        $("nav").removeClass("navbar-light");
        $("nav").removeClass("bg-light");
        $("nav").addClass("nav-old");
        $("nav").removeClass("nav-new");
        $("button").addClass("btn-old");
        $("button").removeClass("btn-new");

    }

})