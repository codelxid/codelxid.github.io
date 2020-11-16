// Navbar
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".header").addClass("nav-active bg-light");
    } else {
        $(".header").removeClass("nav-active");
    }
});